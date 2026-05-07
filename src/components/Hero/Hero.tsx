import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Disponível para projetos
        </div>

        <h1 className={styles.name}>
          Olá, sou<br />
          <em className={styles.nameHighlight}>Eloah Sousa</em>
        </h1>

        <p className={styles.title}>Desenvolvedora Front-End</p>

        <p className={styles.desc}>
          Transformo ideias em experiências digitais que encantam. Apaixonada
          por design, arte, gatos e a magia que acontece quando código e
          criatividade se encontram.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            Ver Projetos ↓
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnOutline}`}>
            Entre em Contato
          </a>
        </div>
      </div>

      {/* FOTO — substitua o placeholder pelo seu <img> */}
      <div className={styles.photo}>
       <div className={styles.photo}>
        <img src={`${import.meta.env.BASE_URL}Foto.jpg`} alt="Eloah Sousa" />
      </div>
      </div>
    </section>
  )
}
