"use client";

import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, ArrowUp, CheckCircle, Copy } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contatti" style={{ position: 'relative', background: '#f1f5f9', paddingTop: '5rem', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-tag">
            <Mail size={15} /> Contatti Diretti
          </div>
          <h2 className="section-title" style={{ marginTop: '0.75rem' }}>
            Mettiamoci in <span className="gradient-text">Contatto</span>
          </h2>
          <p className="section-subtitle">
            Hai un&apos;idea di progetto, una proposta di lavoro o semplicemente vuoi fare due chiacchiere? Scrivimi pure!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.25rem',
            marginBottom: '5rem'
          }}
        >
          {/* Email Card */}
          <div 
            className="glass-card" 
            style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  background: 'rgba(99, 102, 241, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)'
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Email</div>
                <a href={`mailto:${personalData.email}`} style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}>
                  {personalData.email}
                </a>
              </div>
            </div>

            <button 
              onClick={handleCopyEmail}
              title="Copia Email"
              style={{
                background: '#f8fafc',
                border: '1px solid var(--border-color)',
                color: copied ? 'var(--accent-secondary)' : 'var(--text-secondary)',
                padding: '0.5rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
            >
              {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
            </button>
          </div>

          {/* GitHub Card */}
          <a 
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card" 
            style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
          >
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                background: 'rgba(2, 132, 199, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-secondary)'
              }}
            >
              <Github size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>GitHub</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>@{personalData.username}</div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card" 
            style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
          >
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                background: 'rgba(59, 130, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb'
              }}
            >
              <Linkedin size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>LinkedIn</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Vittorio Profile</div>
            </div>
          </a>

          {/* Location Card */}
          <div 
            className="glass-card" 
            style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div 
              style={{ 
                width: '42px', 
                height: '42px', 
                borderRadius: '50%', 
                background: 'rgba(217, 119, 6, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d97706'
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Posizione</div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{personalData.location}</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div 
          style={{ 
            padding: '2rem 0', 
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            <span className="gradient-text">&lt;{personalData.name} /&gt;</span>
          </div>

          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {personalData.name}. Tutti i diritti riservati. Sviluppato per GitHub Pages.
          </div>

          <button 
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            <ArrowUp size={16} /> Torna su
          </button>
        </div>
      </div>
    </footer>
  );
};
