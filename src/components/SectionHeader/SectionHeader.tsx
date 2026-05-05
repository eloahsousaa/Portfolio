import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  tag: string
  title: string
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.tag}>{tag}</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </div>
  )
}
