export interface Project {
  id: string
  label: string
  title: string
  description: string
  roles: string[]
  techs: string[]
  githubUrl: string
  liveUrl?: string
  // modal
  videoUrl?: string       // caminho do vídeo em /public (ex: /videos/agrirslab.mp4)
  fullDescription?: string  // texto longo para o modal
}

export interface Skill {
  name: string
  icon: string
}

export interface ContactItem {
  label: string
  value: string
  href: string
  icon: 'linkedin' | 'github'
}

export interface Education {
  id: string
  type: 'Graduação' | 'Curso' | 'Certificado' | 'Bootcamp' | 'Técnico'
  title: string
  institution: string
  period: string
  description?: string
  certificateImage?: string
}
