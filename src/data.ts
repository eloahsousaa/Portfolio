import type { Project, Skill, ContactItem } from './types'

export const skills: Skill[] = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Git', icon: '🌿' },
]

export const projects: Project[] = [
  {
    id: 'agrirslab',
    label: 'Projeto Acadêmico · 2025',
    title: 'Portal AgriRSLAB — INPE',
    description:
      'Portal desenvolvido para o Laboratório de Sensoriamento Remoto Agrícola do INPE, com o objetivo de centralizar informações essenciais, ampliar a visibilidade do laboratório e facilitar o acesso público a pesquisas, projetos e iniciativas. Reúne perfis da equipe, publicações científicas, oportunidades e canais de contato.',
    roles: ['Product Owner', 'Front-End', 'UI Design', 'Documentação'],
    githubUrl: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal',
  },
]

export const contactItems: ContactItem[] = [
  {
    label: 'E-mail',
    value: 'eloahsousaa@gmail.com',
    href: 'mailto:eloahsousaa@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    value: 'Eloah Sousa',
    href: 'https://www.linkedin.com/in/eloah-sousa-650038349/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: '@eloahsousaa',
    href: 'https://github.com/eloahsousaa',
    icon: 'github',
  },
]
