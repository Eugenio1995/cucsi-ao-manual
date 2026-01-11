import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import * as Icons from 'lucide-react';
import { wikiSections } from '../mock';

export const WikiContent = () => {
  const [activeSection, setActiveSection] = useState('bienvenida');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const getIcon = (iconName) => {
    const iconMap = {
      'scroll': Icons.Scroll,
      'user-plus': Icons.UserPlus,
      'user': Icons.User,
      'briefcase': Icons.Briefcase,
      'target': Icons.Target,
      'trending-up': Icons.TrendingUp,
      'map': Icons.Map,
      'users': Icons.Users,
      'bug': Icons.Bug,
      'book-open': Icons.BookOpen,
      'paw-print': Icons.PawPrint,
      'sparkles': Icons.Sparkles,
      'package': Icons.Package,
      'flag': Icons.Flag,
      'swords': Icons.Swords,
      'castle': Icons.Castle,
      'flame': Icons.Flame,
      'shield': Icons.Shield,
      'crown': Icons.Crown,
      'anchor': Icons.Anchor,
      'medal': Icons.Award,
      'gem': Icons.Gem,
      'hammer': Icons.Hammer,
      'box': Icons.Box,
      'message-circle': Icons.MessageCircle,
      'star': Icons.Star,
      'coins': Icons.Coins,
      'eye': Icons.Eye,
      'calendar': Icons.Calendar,
      'graduation-cap': Icons.GraduationCap,
      'zap': Icons.Zap,
      'shopping-cart': Icons.ShoppingCart,
      'shopping-bag': Icons.ShoppingBag,
      'info': Icons.Info,
      'alert-circle': Icons.AlertCircle,
      'biceps': Icons.BicepsFlexed,      
    };
    const IconComponent = iconMap[iconName] || Icons.BookOpen;
    return <IconComponent className="section-icon" size={20} />;
  };

  const renderWelcomeContent = (content) => {
    return (
      <div className="welcome-content">
        <div className="welcome-header">
          <h2 className="welcome-title">{content.greeting}</h2>
          <p className="welcome-message">{content.message}</p>
        </div>
        <div className="welcome-sections">
          <div className="info-card">
            <h3>Sobre CucsiAO</h3>
            <p>{content.description}</p>
          </div>
          <div className="info-card">
            <h3>Sistema de Rol</h3>
            <p>{content.roleInfo}</p>
          </div>
          <div className="info-card">
            <h3>El Mapa</h3>
            <p>{content.mapInfo}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderSectionContent = (section) => {
    if (section.id === 'bienvenida') {
      return renderWelcomeContent(section.content);
    }
    
    // Render Crear Personaje
    if (section.id === 'crear-personaje') {
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          <div className="content-text">
            <p>{section.content.text}</p>
          </div>
        </div>
      );
    }
    
    // Render Razas with tables
    if (section.id === 'razas') {
      // Helper function to get cell class based on value
      const getCellClass = (cell, cellIdx) => {
        if (cellIdx === 0) return ''; // First column (race name) no color
        if (cell === '0') return 'neutral-value';
        if (cell.startsWith('+')) return 'positive-value';
        if (cell.startsWith('-')) return 'negative-value';
        return '';
      };
      
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          
          <div className="races-list">
            <h3>Razas disponibles:</h3>
            <div className="races-grid">
              {section.content.races.map((race, idx) => (
                <div key={idx} className="race-card">
                  <div className="race-icon">👤</div>
                  <h4 className="race-name">{race}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <p className="content-text">{section.content.text}</p>
          
          {/* Attributes Table */}
          <div className="table-container">
            <h3 className="table-title">{section.content.attributesTable.title}</h3>
            <p className="table-subtitle">{section.content.attributesTable.subtitle}</p>
            <div className="table-scroll">
              <table className="wiki-table">
                <thead>
                  <tr>
                    {section.content.attributesTable.headers.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.content.attributesTable.rows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className={getCellClass(cell, cellIdx)}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Combat Table */}
          <div className="table-container">
            <h3 className="table-title">{section.content.combatTable.title}</h3>
            <p className="table-subtitle">{section.content.combatTable.subtitle}</p>
            <div className="table-scroll">
              <table className="wiki-table">
                <thead>
                  <tr>
                    {section.content.combatTable.headers.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.content.combatTable.rows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className={getCellClass(cell, cellIdx)}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    
    // Render Atributos
    if (section.id === 'atributos') {
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          <div className="content-text">
            <p>{section.content.intro}</p>
          </div>
          
          <div className="attributes-section">
            <h3 className="subsection-title">Tipos de Atributos</h3>
            <p className="content-text">Cada personaje tiene 5 tipos de atributos que son:</p>
            <ul className="styled-list">
              {section.content.attributes.map((attr, idx) => (
                <li key={idx}>{attr.name}</li>
              ))}
            </ul>
            
            <div className="attributes-details">
              {section.content.attributes.map((attr, idx) => (
                <div key={idx} className="attribute-card">
                  <h4 className="attribute-name">{attr.name}</h4>
                  <p className="attribute-description">{attr.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    // Render Clases
    if (section.id === 'clases') {
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          <div className="content-text">
            <p>{section.content.text}</p>
          </div>
          
          <div className="classes-grid">
            {section.content.classes.map((className, idx) => (
              <div key={idx} className="class-card">
                <div className="class-icon">⚔️</div>
                <h4 className="class-name">{className}</h4>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="section-content">
        <p className="section-description">{section.content.description}</p>
        <div className="placeholder-box">
          <p>{section.content.placeholder}</p>
        </div>
      </div>
    );
  };

  const currentSection = wikiSections.find(s => s.id === activeSection);

  return (
    <section className="wiki-content-section">
      <div className="content-container-with-sidebar">
        {/* Mobile toggle button */}
        <Button
          variant="outline"
          className="mobile-sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{sidebarOpen ? 'Cerrar' : 'Menú'}</span>
        </Button>

        {/* Sidebar */}
        <aside className={`wiki-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <h3>Secciones del Manual</h3>
          </div>
          <ScrollArea className="sidebar-scroll">
            <nav className="sidebar-nav">
              {wikiSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    // Close sidebar on mobile after selection
                    if (window.innerWidth < 768) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                >
                  {getIcon(section.icon)}
                  <span className="sidebar-item-text">{section.title}</span>
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Main content */}
        <main className="wiki-main-content">
          <Card className="content-card">
            <CardHeader>
              <CardTitle className="card-title-with-icon">
                {getIcon(currentSection.icon)}
                {currentSection.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderSectionContent(currentSection)}
            </CardContent>
          </Card>
        </main>
      </div>
    </section>
  );
};