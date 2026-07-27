"use client";

import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, Sparkles, GraduationCap, ShieldCheck, Menu, X } from 'lucide-react';
import { personalData } from '@/data/portfolioData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      {/* Sticky Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="brand-logo">
            <span className="gradient-text">&lt;{personalData.name} /&gt;</span>
          </a>

          {/* Desktop & Mobile Nav Links */}
          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a 
                href="#progetti" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Progetti GitHub
              </a>
            </li>
            <li>
              <a 
                href="#contatti" 
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contatti
              </a>
            </li>
            <li>
              <a 
                href={personalData.cvUrl} 
                download="Vittorio_Gallicchio_CV.pdf"
                className="btn btn-primary"
                style={{ padding: '0.55rem 1.35rem', fontSize: '0.875rem' }}
              >
                <Download size={16} /> Scarica CV
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Main Header / Hero Section */}
      <section style={{ padding: '5.5rem 0 4rem 0', position: 'relative' }}>
        <div className="container">
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              maxWidth: '880px',
              margin: '0 auto' 
            }}
          >
            {/* Profile Photo */}
            <div className="profile-avatar-container" style={{ marginBottom: '2rem' }}>
              <img
                src={personalData.avatarUrl}
                alt={personalData.name}
                className="profile-avatar-img"
              />
            </div>

            {/* Status Badges */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <div className="section-tag">
                <GraduationCap size={16} /> Ingegneria Informatica UNICAL
              </div>
              <div className="section-tag" style={{ background: 'rgba(2, 132, 199, 0.08)', borderColor: 'rgba(2, 132, 199, 0.25)', color: 'var(--accent-secondary)' }}>
                <ShieldCheck size={16} /> Magistrale in Cybersecurity
              </div>
            </div>

            {/* Name & Title */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              Ciao, sono <span className="gradient-text">{personalData.name}</span>
            </h1>

            <h2 
              style={{ 
                fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.4
              }}
            >
              {personalData.title}
            </h2>

            {/* Location & Bio Intro */}
            <p 
              style={{ 
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '720px',
                marginBottom: '2.5rem'
              }}
            >
              {personalData.bio}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
              {/* Primary Action: Download CV */}
              <a 
                href={personalData.cvUrl} 
                download="Vittorio_Gallicchio_CV.pdf"
                className="btn btn-primary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 2.2rem' }}
              >
                <Download size={20} /> Scarica il mio CV
              </a>

              {/* GitHub Button */}
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 1.85rem' }}
              >
                <Github size={20} /> GitHub (@{personalData.username})
              </a>

              {/* LinkedIn Button */}
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{ fontSize: '1.05rem', padding: '0.9rem 1.85rem' }}
              >
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>

          </div>
        </div>
      </section>
    </header>
  );
};
