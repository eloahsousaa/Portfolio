export interface Project {
  id: string
  label: string
  title: string
  description: string
  roles: string[]
  githubUrl: string
  liveUrl?: string
}

export interface Skill {
  name: string
  icon: string
}

export interface ContactItem {
  label: string
  value: string
  href: string
  icon: 'email' | 'linkedin' | 'github'
}
