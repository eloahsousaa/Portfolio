import { useState } from "react";
import { createPortal } from "react-dom";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import SectionHeader from "../SectionHeader/SectionHeader";
import { projects } from "../../data";
import type { Project } from "../../types";
import styles from "./Projects.module.css";

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalSubtitle}>{project.label}</p>

        <div className={styles.mediaWrapper}>
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            />
          ) : (
            <div className={styles.noVideo}>
              <span>Sem vídeo disponível</span>
            </div>
          )}
        </div>

        <div className={styles.modalBody}>
          <h4 className={styles.modalSection}>Sobre o projeto</h4>
          <p className={styles.modalText}>
            {project.fullDescription || project.description}
          </p>

          <h4 className={styles.modalSection}>Contribuições</h4>
          <div className={styles.modalRoles}>
            {project.roles.map((r) => (
              <span key={r} className={styles.role}>
                {r}
              </span>
            ))}
          </div>

          <h4 className={styles.modalSection}>Tecnologias</h4>
          <div className={styles.modalRoles}>
            {project.techs.map((t) => (
              <span key={t} className={styles.roleTech}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.modalLinks}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <GitHubIcon /> GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                ↗ Ver projeto
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div className={`${styles.card} ${styles.clickable}`} onClick={onClick}>
      <p className={styles.label}>{project.label}</p>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.roles}>
        {project.roles.map((r) => (
          <span key={r} className={styles.role}>
            {r}
          </span>
        ))}
      </div>
      <div className={styles.roles}>
        {project.techs.map((t) => (
          <span key={t} className={styles.roleTech}>
            {t}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          onClick={(e) => e.stopPropagation()}
        >
          <GitHubIcon />
          GitHub
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            onClick={(e) => e.stopPropagation()}
          >
            ↗ Ver projeto
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useScrollFadeIn();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className={styles.section}>
      <div ref={ref} className={styles.fadeIn}>
        <SectionHeader tag="// projetos" title="O que já construí" />

        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => setSelected(p)}
            />
          ))}

          <div className={`${styles.card} ${styles.placeholder}`}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="11.5"
                stroke="rgba(147,3,197,0.4)"
              />
              <line
                x1="20"
                y1="12"
                x2="20"
                y2="28"
                stroke="rgba(147,3,197,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="20"
                x2="28"
                y2="20"
                stroke="rgba(147,3,197,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <p>Mais projetos em breve</p>
          </div>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
