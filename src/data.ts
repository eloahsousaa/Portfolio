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
      'Portal desenvolvido para o Laboratório de Sensoriamento Remoto Agrícola do INPE, com o objetivo de centralizar informações essenciais, ampliar a visibilidade do laboratório e facilitar o acesso público a pesquisas, projetos e iniciativas. Reúne perfis da equipe, publicações científicas, oportunidades e canais de contato. Esse projeto foi escolhido pelo cliente para ser oficialmente o portal do laboratório, destacando-se entre as propostas apresentadas por outros grupos, e atualmente está em fase de implantação no ambiente de produção do INPE.',
    roles: ['Product Owner', 'Front-End', 'UI/UX Design', 'Documentação'],
    githubUrl: 'https://github.com/404NotFound-ABP/AgriRSLAB_Portal',
    videoUrl: `${import.meta.env.BASE_URL}agrislab.mp4`, 
  },

   {
    id: 'FaqTec',
    label: 'Projeto Acadêmico · 2026',
    title: 'Chatbot FAQTec — Fatec Jacareí',
    description:'Chatbot desenvolvido para a Fatec Jacareí, com o objetivo de fornecer suporte automatizado a perguntas frequentes sobre a instituição, cursos, eventos e serviços',
    roles: ['Dev', 'Front-End', 'UI/UX Design' ],
    githubUrl: 'https://github.com/404NotFound-ABP/Autoatendimento_Academico',
    videoUrl: `${import.meta.env.BASE_URL}faqtecbot.mp4`,  
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

import type { Education } from './types'

export const education: Education[] = [
  {
    id: 'fatec-dsm',
    type: 'Graduação',
    title: 'Desenvolvimento de Software Multiplataforma',
    institution: 'Fatec Jacareí',
    period: '2025 – em andamento',
    description: 'Foco em programação orientada a objetos, estruturas de dados, banco de dados e desenvolvimento web com TypeScript e Python.',
  },
  
  {
    id: 'linux',
    type: 'Certificado',
    title: 'Linux Unhatched',
    institution: 'Cisco Networking Academy',
    period: '2025',
    certificateImage: `${import.meta.env.BASE_URL}certificadoLinux.png`,
    description: 'Uma rápida introdução ao popular sistema operacional Linux.'
  },
  
  
 {
    id: 'ameaças cibernéticas',
    type: 'Certificado',
    title: 'Gerenciamento de Ameaças Cibernéticas',
    institution: 'Cisco Networking Academy',
    period: '2025',
    certificateImage: `${import.meta.env.BASE_URL}certificadoAmeaças.png`,
    description: 'Aprenda sobre governança de segurança cibernética e desenvolva suas habilidades para gerenciar ameaças.'
  },
  

{
    id: 'ux design',
    type: 'Certificado',
    title: 'UX Design',
    institution: 'Alura',
    period: '2025',
    certificateImage: `${import.meta.env.BASE_URL}certificadoUx.png`,
    description: 'Aprenda sobre governança de segurança cibernética e desenvolva suas habilidades para gerenciar ameaças.'
  },



{
    id: 'adobe illustrator',
    type: 'Certificado',
    title: 'Adobe Illustrator para Interfaces Digitais',
    institution: 'Alura',
    period: '2025',
    certificateImage: `${import.meta.env.BASE_URL}certificadoAdobe.png`,
    description: 'Aprenda sobre governança de segurança cibernética e desenvolva suas habilidades para gerenciar ameaças.'
  },


]
