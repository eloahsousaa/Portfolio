import styles from './Navbar.module.css'

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
