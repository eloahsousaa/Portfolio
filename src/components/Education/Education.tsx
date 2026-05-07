import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import SectionHeader from '../SectionHeader/SectionHeader'
import { education } from '../../data'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Education.module.css'

export default function Education() {
  const ref = useScrollFadeIn()
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="education" className={styles.section}>
      <SectionHeader tag="Formação" title="Cursos & Certificados" />

      <div ref={ref} className={`${styles.grid} ${styles.fadeIn}`}>
        {education.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${item.certificateImage ? styles.clickable : ''}`}
            onClick={() => item.certificateImage && setLightbox(item.certificateImage)}
          >
            <div className={styles.cardTop}>
              <span className={styles.type}>{item.type}</span>
              <span className={styles.period}>{item.period}</span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.institution}>{item.institution}</p>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
            {item.certificateImage && (
              <span className={styles.certHint}>Ver certificado →</span>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox renderizado direto no <body> via portal */}
      {lightbox && createPortal(
        <div className={styles.overlay} onClick={() => setLightbox(null)}>
          <div className={styles.lightbox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox} alt="Certificado" className={styles.certImg} />
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
