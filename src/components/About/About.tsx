import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import SectionHeader from '../SectionHeader/SectionHeader'
import { skills } from '../../data'
import styles from './About.module.css'

export default function About() {
  const refLeft = useScrollFadeIn()
  const refRight = useScrollFadeIn()

  return (
    <section id="about" className={styles.section}>
      {/* Sobre */}
      <div ref={refLeft} className={`${styles.fadeIn} ${styles.text}`}>
        <SectionHeader tag="// sobre mim" title="Quem sou eu" />

        <p>
          Sou desenvolvedora front-end e estudante de Desenvolvimento de
          Software Multiplataforma na Fatec Jacareí, onde construo soluções que
          unem funcionalidade e beleza visual. Acredito que a tecnologia é uma
          extensão da arte — e cada linha de código é uma oportunidade de criar
          algo significativo.
        </p>
        <p>
          Fora do teclado, você me encontra explorando ilustrações, jogando ou
          sendo monitorada de perto pelos meus gatos. Essa mistura de
          referências criativas alimenta diretamente minha visão de design e
          desenvolvimento.
        </p>
        <p>
          Tenho experiência como <strong>Product Owner</strong>, atuando na
          ponte entre as necessidades do cliente e a equipe de desenvolvimento,
          garantindo entregas com qualidade e clareza de propósito.
        </p>

        <div className={styles.tags}>
          {['Fatec Jacareí', 'DSM', 'Product Owner', 'Front-End', 'UI Design', 'Documentação'].map((t) => (
            <span key={t} className={styles.tag}>{t}</span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div id="skills" ref={refRight} className={`${styles.fadeIn} ${styles.skillsCol}`}>
        <SectionHeader tag="// habilidades" title="Tecnologias" />

        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.name} className={styles.skill}>
              <span className={styles.skillIcon}>{s.icon}</span>
              <span className={styles.skillName}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
