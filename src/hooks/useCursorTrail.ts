import { useEffect } from 'react'

export function useCursorTrail() {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.style.cssText =
      'position:fixed;top:0;left:0;pointer-events:none;z-index:999;opacity:0.5;'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')!
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const handleResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const trail: { x: number; y: number; life: number }[] = []
    let mouse = { x: -999, y: -999 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let animId: number

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      trail.push({ x: mouse.x, y: mouse.y, life: 1 })
      if (trail.length > 24) trail.shift()

      trail.forEach((p) => {
        p.life -= 0.04
        const r = p.life * 7
        const alpha = p.life * 0.3
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147, 3, 197, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeChild(canvas)
    }
  }, [])
}
