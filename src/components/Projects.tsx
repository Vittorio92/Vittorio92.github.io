"use client";

import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { projectsData, Project } from '@/data/portfolioData';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Tutti i Progetti' },
    { id: 'web', label: 'Web Applications' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'security', label: 'Security' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'tool', label: 'CLI & Tools' },
  ].filter((cat) => cat.id === 'all' || projectsData.some((p) => p.category === cat.id));

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'typescript': return '#0284c7';
      case 'python': return '#16a34a';
      case 'rust': return '#ea580c';
      case 'javascript': return '#eab308';
      default: return '#6366f1';
    }
  };

  return (
    <section id="progetti" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <FolderGit2 size={15} /> Showcase GitHub
          </div>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Progetti <span className="gradient-text">GitHub</span> & Open Source
          </h2>
          <p className="section-subtitle">
            Esplora le repository principali, i progetti sviluppati ed i contributi del mio profilo GitHub.
          </p>

          {/* Category Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Repo Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <FolderGit2 size={20} color="var(--accent-primary)" />
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Vittorio92 /
                    </span>
                  </div>
                  {project.featured && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--accent-primary)',
                        fontWeight: 700,
                        border: '1px solid rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.85rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(15, 23, 42, 0.04)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        fontWeight: 600
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Meta & Action Links */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {/* Primary Language */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 600 }}>
                      <span
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: getLanguageColor(project.language),
                          display: 'inline-block'
                        }}
                      />
                      <span style={{ color: 'var(--text-primary)' }}>{project.language}</span>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Vedi Repository GitHub"
                      style={{
                        color: 'var(--text-secondary)',
                        transition: 'color 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Github size={20} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Vedi Live Demo"
                        style={{
                          color: 'var(--accent-secondary)',
                          transition: 'color 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub External Callout Box */}
        <div
          className="glass-card"
          style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(2, 132, 199, 0.06) 100%)',
            borderColor: 'rgba(99, 102, 241, 0.25)'
          }}
        >
          <Github size={40} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-primary)' }}>
            Vuoi vedere altri progetti o contributi?
          </h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 1.75rem auto', fontSize: '1.05rem' }}>
            Visita il mio profilo ufficiale GitHub per vedere tutte le repository pubbliche e contributi open source.
          </p>
          <a
            href="https://github.com/Vittorio92"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
          >
            <Github size={20} /> Vai al profilo @Vittorio92
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '650px',
              width: '100%',
              padding: '2.5rem',
              background: '#ffffff',
              borderColor: 'var(--accent-primary)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="section-tag" style={{ marginBottom: '0.6rem' }}>
                  {selectedProject.language}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '1.6rem',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem'
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.05rem' }}>
              {selectedProject.longDescription || selectedProject.description}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={18} /> Apri Repository GitHub
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <ExternalLink size={18} /> Demo In Tempo Reale
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
