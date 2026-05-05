export default function Divider() {
  return (
    <div
      style={{
        height: '1px',
        margin: '0 8%',
        background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
        position: 'relative',
        zIndex: 1,
      }}
    />
  )
}
