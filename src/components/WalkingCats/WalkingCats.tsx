import { useEffect, useRef } from 'react'
import styles from './WalkingCats.module.css'

const SCALE = 3
const FW = 64
const FH = 64
const ANIM_MS = 120

// animações mapeadas no spritesheet (row * 64 = y offset)
const ANIMS = {
  idle:      { y: 0,    frames: 4  },  // sentado
  walkSide:  { y: 640,  frames: 5  },  // andando lateral
  walkDown:  { y: 128,  frames: 6  },  // andando pra baixo
  walkUp:    { y: 3584, frames: 10 },  // andando pra cima
}

type AnimKey = keyof typeof ANIMS

export default function WalkingCat() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    canvas.width  = FW * SCALE
    canvas.height = FH * SCALE

    const ctx = canvas.getContext('2d')!
    ctx.imageSmoothingEnabled = false

    const img = new Image()
    img.src = '/cat-sprite.png'

    let anim: AnimKey = 'idle'
    let frame = 0
    let animTimer = 0
    let stateTimer = 0
    let x = Math.random() * (window.innerWidth  - FW * SCALE)
    let y = Math.random() * (window.innerHeight - FH * SCALE)
    let vx = 0, vy = 0
    let flipX = false

    canvas.style.left = x + 'px'
    canvas.style.top  = y + 'px'

    function pickState() {
      const roll = Math.random()
      if (roll < 0.35) {
        anim = 'idle'
        vx = 0; vy = 0
        stateTimer = 1500 + Math.random() * 2500
      } else {
        const speed = 0.7 + Math.random() * 1.3
        const angle = Math.random() * Math.PI * 2
        vx = Math.cos(angle) * speed
        vy = Math.sin(angle) * speed

        const absx = Math.abs(vx)
        const absy = Math.abs(vy)

        if (absx > absy) {
          anim = 'walkSide'
          flipX = vx < 0
        } else if (vy > 0) {
          anim = 'walkDown'
          flipX = false
        } else {
          anim = 'walkUp'
          flipX = false
        }
        stateTimer = 1500 + Math.random() * 3000
      }
      frame = 0
    }

    pickState()

    function loop(ts: number) {
      const W = window.innerWidth
      const H = window.innerHeight
      const cfg = ANIMS[anim]

      // avança frame
      if (ts - animTimer > ANIM_MS) {
        frame = (frame + 1) % cfg.frames
        animTimer = ts
      }

      // move
      if (anim !== 'idle') {
        x += vx
        y += vy
        if (x < 0)                  { x = 0;                  vx = Math.abs(vx);  flipX = false; anim = 'walkSide' }
        if (x > W - FW * SCALE)     { x = W - FW * SCALE;     vx = -Math.abs(vx); flipX = true;  anim = 'walkSide' }
        if (y < 0)                  { y = 0;                  vy = Math.abs(vy);  anim = 'walkDown' }
        if (y > H - FH * SCALE)     { y = H - FH * SCALE;     vy = -Math.abs(vy); anim = 'walkUp'   }
        canvas.style.left = x + 'px'
        canvas.style.top  = y + 'px'
      }

      stateTimer -= 16
      if (stateTimer <= 0) pickState()

      // desenha
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (!img.complete) { requestAnimationFrame(loop); return }

      ctx.save()
      if (flipX) {
        ctx.translate(canvas.width, 0)
        ctx.scale(-1, 1)
      }
      ctx.drawImage(img, frame * FW, cfg.y, FW, FH, 0, 0, FW * SCALE, FH * SCALE)
      ctx.restore()

      requestAnimationFrame(loop)
    }

    img.onload = () => requestAnimationFrame(loop)
    if (img.complete) requestAnimationFrame(loop)

    return () => { /* cleanup via component unmount */ }
  }, [])

  return <canvas ref={canvasRef} className={styles.cat} />
}
