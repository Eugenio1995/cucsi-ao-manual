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
  const [selectedClass, setSelectedClass] = useState(null);
  
  // States for creatures table
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'exp', direction: 'asc' }); // Default: menor a mayor EXP
  const [expandedDrops, setExpandedDrops] = useState(new Set());
  
  // States for quests
  const [selectedQuestCategory, setSelectedQuestCategory] = useState(null);
  const [selectedQuest, setSelectedQuest] = useState(null);
  
  // States for spells table
  const [spellSearchTerm, setSpellSearchTerm] = useState('');
  const [spellSortConfig, setSpellSortConfig] = useState({ key: 'precio', direction: 'asc' }); // Default: menor a mayor precio
  const [expandedSpellDescs, setExpandedSpellDescs] = useState(new Set());

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
      'alert-circle': Icons.AlertCircle
    };
    const IconComponent = iconMap[iconName] || Icons.BookOpen;
    return <IconComponent className="section-icon" size={20} />;
  };

  // Calculate EXP/Vida ratio
  const calculateRatio = (exp, vida) => {
    return (exp / vida).toFixed(2);
  };

  // Get ratio chip class
  const getRatioClass = (ratio) => {
    const numRatio = parseFloat(ratio);
    if (numRatio < 1.0) return 'ratio-chip-gray';
    if (numRatio >= 1.0 && numRatio < 1.5) return 'ratio-chip-white';
    return 'ratio-chip-gold';
  };
  
  // Format number with thousands separator
  const formatNumber = (num) => {
    if (typeof num === 'number') {
      return num.toLocaleString('es-ES');
    }
    return num;
  };
  
  // Toggle drop expansion
  const toggleDrop = (index) => {
    const newExpanded = new Set(expandedDrops);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedDrops(newExpanded);
  };

  // Sort creatures
  const sortCreatures = (creatures) => {
    if (!sortConfig.key) return creatures;
    
    return [...creatures].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      
      // Handle numeric sorting
      if (sortConfig.key === 'vida' || sortConfig.key === 'exp' || sortConfig.key === 'oro' || 
          sortConfig.key === 'podAtaque' || sortConfig.key === 'evasion') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  // Handle sort
  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  // Filter and sort creatures
  const getFilteredAndSortedCreatures = (creatures) => {
    let filtered = creatures;
    
    if (searchTerm) {
      filtered = creatures.filter(creature => 
        creature.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return sortCreatures(filtered);
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
                  <img 
                    src={race.image} 
                    alt={race.name} 
                    className="race-icon-image"
                  />
                  <h4 className="race-name">{race.name}</h4>
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
      if (selectedClass) {
        // Render detailed class view
        const classData = section.content.classes.find(c => c.name === selectedClass);
        return (
          <div className="section-content">
            <button 
              className="back-button"
              onClick={() => setSelectedClass(null)}
            >
              ← Volver a Clases
            </button>
            
            <h2 className="class-detail-title">{classData.name}</h2>
            
            <div className="class-description">
              {classData.description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            {/* Modifiers Table */}
            <div className="table-container">
              <h3 className="table-title">Modificadores de Clase</h3>
              <div className="table-scroll">
                <table className="wiki-table modifiers-table">
                  <thead>
                    <tr>
                      {classData.modifiers.subHeaders.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {classData.modifiers.values.map((value, idx) => (
                        <td key={idx}>{value}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {classData.special && (
              <div className="special-info">
                <p>{classData.special}</p>
              </div>
            )}
            
            {/* Points per Level Table */}
            <div className="table-container">
              <h3 className="table-title">Puntos ganados por nivel</h3>
              <div className="table-scroll">
                <table className="wiki-table">
                  <thead>
                    <tr>
                      {classData.pointsPerLevel.headers.map((header, idx) => (
                        <th key={idx}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {classData.pointsPerLevel.rows.map((row, idx) => (
                      <tr key={idx}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="table-note">
                Aclaración: Los puntos de maná y vida representan los valores con los máximos dados (20).
                Cada personaje varia mucho según su raza.
              </p>
            </div>
            
            {/* Abilities */}
            {classData.abilities && classData.abilities.length > 0 && (
              <div className="abilities-section">
                {classData.abilities.map((ability, idx) => (
                  <div key={idx} className="ability-card">
                    <h4 className="ability-title">{ability.title}</h4>
                    {ability.description.split('\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="ability-description">{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }
      
      // Render classes grid
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          <div className="content-text">
            <p>{section.content.text}</p>
          </div>
          
          <div className="classes-grid">
            {section.content.classes.map((classData, idx) => (
              <div 
                key={idx} 
                className="class-card"
                onClick={() => setSelectedClass(classData.name)}
              >
                <div className="class-icon">⚔️</div>
                <h4 className="class-name">{classData.name}</h4>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // Render Criaturas (Bestiary)
    if (section.id === 'criaturas') {
      const filteredCreatures = getFilteredAndSortedCreatures(section.content.creatures);
      
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          
          {/* Search Bar */}
          <div className="bestiary-search">
            <Icons.Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar criatura..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="clear-search"
              >
                <Icons.X size={16} />
              </button>
            )}
          </div>
          
          {/* Creatures Table */}
          <div className="table-container">
            <div className="table-scroll">
              <table className="wiki-table bestiary-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort('name')} className="sortable-header">
                      Criatura {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSort('vida')} className="sortable-header">
                      Vida {sortConfig.key === 'vida' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th>Daño Físico</th>
                    <th>Defensa</th>
                    <th onClick={() => handleSort('podAtaque')} className="sortable-header">
                      Pod. Ataque {sortConfig.key === 'podAtaque' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSort('evasion')} className="sortable-header">
                      Evasión {sortConfig.key === 'evasion' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSort('exp')} className="sortable-header">
                      EXP {sortConfig.key === 'exp' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSort('oro')} className="sortable-header">
                      ORO {sortConfig.key === 'oro' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th>Drop</th>
                    <th>Ubicación</th>
                    <th>Ratio EXP/Vida</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCreatures.map((creature, idx) => {
                    const ratio = calculateRatio(creature.exp, creature.vida);
                    const isExpanded = expandedDrops.has(idx);
                    const dropText = creature.drop;
                    const showDropdown = dropText.length > 30;
                    
                    return (
                      <tr key={idx} id={`creature-${creature.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <td className="creature-name">{creature.name}</td>
                        <td>{formatNumber(creature.vida)}</td>
                        <td>{creature.danoFisico}</td>
                        <td>{creature.defensa}</td>
                        <td>{formatNumber(creature.podAtaque)}</td>
                        <td>{formatNumber(creature.evasion)}</td>
                        <td>{formatNumber(creature.exp)}</td>
                        <td>{formatNumber(creature.oro)}</td>
                        <td className="drop-cell">
                          {showDropdown ? (
                            <div className="drop-dropdown">
                              <button 
                                className="drop-toggle"
                                onClick={() => toggleDrop(idx)}
                              >
                                {isExpanded ? <Icons.ChevronUp size={16} /> : <Icons.ChevronDown size={16} />}
                                <span>{isExpanded ? 'Ver menos' : 'Ver drops'}</span>
                              </button>
                              {isExpanded && (
                                <div className="drop-content">
                                  {dropText}
                                </div>
                              )}
                            </div>
                          ) : (
                            dropText
                          )}
                        </td>
                        <td className="location-cell">{creature.ubicacion}</td>
                        <td>
                          <span className={`ratio-chip ${getRatioClass(ratio)}`}>
                            {ratio}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bestiary-legend">
            <h4>Leyenda de Ratio EXP/Vida:</h4>
            <div className="legend-items">
              <div className="legend-item">
                <span className="ratio-chip ratio-chip-gray">{'< 1.0'}</span>
                <span>Bajo</span>
              </div>
              <div className="legend-item">
                <span className="ratio-chip ratio-chip-white">1.0 - 1.5</span>
                <span>Normal</span>
              </div>
              <div className="legend-item">
                <span className="ratio-chip ratio-chip-gold">≥ 1.5</span>
                <span>Alto</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Render Quests
    if (section.id === 'quests') {
      // Function to navigate to creature
      const navigateToCreature = (creatureName) => {
        setActiveSection('criaturas');
        setSearchTerm(creatureName);
        // Scroll to creature after a short delay
        setTimeout(() => {
          const element = document.getElementById(`creature-${creatureName.toLowerCase().replace(/\s+/g, '-')}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      };
      
      // Render creature links in necesidad text
      const renderNecesidadWithLinks = (necesidad, criaturas) => {
        if (!criaturas || criaturas.length === 0) {
          return <span>{necesidad}</span>;
        }
        
        let result = necesidad;
        const parts = [];
        let lastIndex = 0;
        
        criaturas.forEach(creatureName => {
          const index = result.indexOf(creatureName, lastIndex);
          if (index !== -1) {
            // Add text before creature name
            if (index > lastIndex) {
              parts.push(result.substring(lastIndex, index));
            }
            // Add clickable creature link
            parts.push(
              <span
                key={creatureName}
                className="creature-link"
                onClick={() => navigateToCreature(creatureName)}
              >
                {creatureName}
              </span>
            );
            lastIndex = index + creatureName.length;
          }
        });
        
        // Add remaining text
        if (lastIndex < result.length) {
          parts.push(result.substring(lastIndex));
        }
        
        return <>{parts}</>;
      };
      
      // If viewing a specific quest
      if (selectedQuest) {
        const quest = selectedQuest;
        return (
          <div className="section-content">
            <button 
              className="back-button"
              onClick={() => setSelectedQuest(null)}
            >
              ← Volver a {selectedQuestCategory.name}
            </button>
            
            <h2 className="quest-detail-title">{quest.nombre}</h2>
            
            <div className="quest-detail-info">
              <div className="quest-info-row">
                <span className="quest-label">NPC:</span>
                <span className="quest-value">{quest.npc} {quest.repetible ? '[REPETIBLE]' : '[NO REPETIBLE]'}</span>
              </div>
              <div className="quest-info-row">
                <span className="quest-label">Ubicación:</span>
                <span className="quest-value">{quest.ubicacion}</span>
              </div>
              <div className="quest-info-row">
                <span className="quest-label">Nivel Requerido:</span>
                <span className="quest-value">Mínimo {quest.nivelMin} {'<>'} Máximo {quest.nivelMax}</span>
              </div>
              <div className="quest-info-row">
                <span className="quest-label">Necesidad:</span>
                <span className="quest-value">{renderNecesidadWithLinks(quest.necesidad, quest.criaturas)}</span>
              </div>
              <div className="quest-info-row">
                <span className="quest-label">Recompensa:</span>
                <span className="quest-value">{quest.recompensa}</span>
              </div>
            </div>
          </div>
        );
      }
      
      // If viewing a category
      if (selectedQuestCategory) {
        return (
          <div className="section-content">
            <button 
              className="back-button"
              onClick={() => setSelectedQuestCategory(null)}
            >
              ← Volver a Categorías
            </button>
            
            <h2 className="quest-category-title">{selectedQuestCategory.name}</h2>
            <p className="quest-category-description">{selectedQuestCategory.description}</p>
            
            <div className="quests-list">
              {selectedQuestCategory.quests.map((quest, idx) => (
                <div 
                  key={idx} 
                  className="quest-card"
                  onClick={() => setSelectedQuest(quest)}
                >
                  <div className="quest-card-header">
                    <h4 className="quest-card-title">{quest.nombre}</h4>
                    <span className={`quest-badge ${quest.repetible ? 'repetible' : 'no-repetible'}`}>
                      {quest.repetible ? 'REPETIBLE' : 'NO REPETIBLE'}
                    </span>
                  </div>
                  <div className="quest-card-body">
                    <p><strong>NPC:</strong> {quest.npc}</p>
                    <p><strong>Nivel:</strong> {quest.nivelMin} - {quest.nivelMax}</p>
                    <p className="quest-card-location">{quest.ubicacion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      
      // Show quest categories grid
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          <div className="quest-intro">
            <p>{section.content.intro}</p>
          </div>
          
          <div className="quest-categories-grid">
            {section.content.categories.map((category, idx) => (
              <div 
                key={idx} 
                className="quest-category-card"
                onClick={() => setSelectedQuestCategory(category)}
              >
                <div className="quest-category-icon">{category.icon}</div>
                <h4 className="quest-category-name">{category.name}</h4>
                <p className="quest-category-desc">{category.description}</p>
                <div className="quest-count">{category.quests.length} quests</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    // Render Domar Animales
    if (section.id === 'domar') {
      const sortedCreatures = [...section.content.creatures].sort((a, b) => a.poderDoma - b.poderDoma);
      
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          
          <div className="content-text">
            <p>{section.content.intro}</p>
          </div>
          
          <div className="druid-info-box">
            <p>{section.content.druidInfo}</p>
          </div>
          
          {/* Commands Section */}
          <div className="commands-section">
            <h3 className="subsection-title">{section.content.commands.title}</h3>
            <p className="content-text">{section.content.commands.description}</p>
            <div className="commands-list">
              {section.content.commands.list.map((cmd, idx) => (
                <div key={idx} className="command-item">
                  <code className="command-code">{cmd.command}</code>
                  <span className="command-desc">{cmd.description}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="content-text">
            <p>{section.content.carismaInfo}</p>
          </div>
          
          {/* Power Calculation Section */}
          <div className="power-section">
            <h3 className="subsection-title">{section.content.powerSection.title}</h3>
            <p className="content-text">{section.content.powerSection.description}</p>
            
            <div className="formula-box">
              <strong>{section.content.powerSection.formula}</strong>
            </div>
            
            <div className="examples-list">
              {section.content.powerSection.examples.map((example, idx) => (
                <div key={idx} className="example-item">
                  <span className="example-label">Ejemplo {idx + 1}:</span>
                  <span>{example.text}</span>
                </div>
              ))}
            </div>
            
            <div className="chance-info">
              <p>{section.content.powerSection.chance}</p>
            </div>
            
            <div className="druid-bonus-box">
              <Icons.Wand2 size={20} className="druid-icon" />
              <p>{section.content.powerSection.druidBonus}</p>
            </div>
          </div>
          
          {/* Tameable Creatures Table */}
          <div className="table-container">
            <h3 className="table-title">{section.content.creaturesSection.title}</h3>
            <p className="table-subtitle">{section.content.creaturesSection.description}</p>
            <div className="table-scroll">
              <table className="wiki-table taming-table">
                <thead>
                  <tr>
                    <th>Criatura</th>
                    <th>Poder de Domación</th>
                    <th>Vida</th>
                    <th>Daño Físico</th>
                    <th>Defensa</th>
                    <th>Def. Mágica</th>
                    <th>Pod. Ataque</th>
                    <th>Evasión</th>
                    <th>Magia</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCreatures.map((creature, idx) => (
                    <tr key={idx}>
                      <td className="creature-name">{creature.name}</td>
                      <td className="power-cell">{formatNumber(creature.poderDoma)}</td>
                      <td>{formatNumber(creature.vida)}</td>
                      <td>{creature.danoFisico}</td>
                      <td>{creature.defensa}</td>
                      <td>{creature.defMagica}</td>
                      <td>{formatNumber(creature.podAtaque)}</td>
                      <td>{formatNumber(creature.evasion)}</td>
                      <td className="magic-cell">{creature.magia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    
    // Render Hechizos (Spells)
    if (section.id === 'hechizos') {
      // Toggle spell description expansion
      const toggleSpellDesc = (index) => {
        const newExpanded = new Set(expandedSpellDescs);
        if (newExpanded.has(index)) {
          newExpanded.delete(index);
        } else {
          newExpanded.add(index);
        }
        setExpandedSpellDescs(newExpanded);
      };
      
      // Sort spells
      const sortSpells = (spells) => {
        if (!spellSortConfig.key) return spells;
        
        return [...spells].sort((a, b) => {
          let aValue = a[spellSortConfig.key];
          let bValue = b[spellSortConfig.key];
          
          // Handle numeric sorting
          if (spellSortConfig.key === 'precio' || spellSortConfig.key === 'skills' || 
              spellSortConfig.key === 'mana' || spellSortConfig.key === 'stamina') {
            aValue = Number(aValue);
            bValue = Number(bValue);
          }
          
          if (aValue < bValue) {
            return spellSortConfig.direction === 'asc' ? -1 : 1;
          }
          if (aValue > bValue) {
            return spellSortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        });
      };
      
      // Handle spell sort
      const handleSpellSort = (key) => {
        setSpellSortConfig({
          key,
          direction: spellSortConfig.key === key && spellSortConfig.direction === 'asc' ? 'desc' : 'asc'
        });
      };
      
      // Filter and sort spells
      const getFilteredAndSortedSpells = (spells) => {
        let filtered = spells;
        
        if (spellSearchTerm) {
          filtered = spells.filter(spell => 
            spell.nombre.toLowerCase().includes(spellSearchTerm.toLowerCase())
          );
        }
        
        return sortSpells(filtered);
      };
      
      const filteredSpells = getFilteredAndSortedSpells(section.content.spells);
      
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          
          {/* Search Bar */}
          <div className="bestiary-search">
            <Icons.Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Buscar hechizo..."
              value={spellSearchTerm}
              onChange={(e) => setSpellSearchTerm(e.target.value)}
              className="search-input"
            />
            {spellSearchTerm && (
              <button 
                onClick={() => setSpellSearchTerm('')}
                className="clear-search"
              >
                <Icons.X size={16} />
              </button>
            )}
          </div>
          
          {/* Spells Table */}
          <div className="table-container">
            <div className="table-scroll">
              <table className="wiki-table spells-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSpellSort('nombre')} className="sortable-header">
                      Nombre {spellSortConfig.key === 'nombre' ? (spellSortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSpellSort('precio')} className="sortable-header">
                      Precio {spellSortConfig.key === 'precio' ? (spellSortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSpellSort('skills')} className="sortable-header">
                      Skills {spellSortConfig.key === 'skills' ? (spellSortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSpellSort('mana')} className="sortable-header">
                      Maná {spellSortConfig.key === 'mana' ? (spellSortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th onClick={() => handleSpellSort('stamina')} className="sortable-header">
                      Stamina {spellSortConfig.key === 'stamina' ? (spellSortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                    </th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSpells.map((spell, idx) => {
                    const isExpanded = expandedSpellDescs.has(idx);
                    const descText = spell.descripcion;
                    const showDropdown = descText.length > 50;
                    
                    return (
                      <tr key={idx}>
                        <td className="spell-name">{spell.nombre}</td>
                        <td className="spell-price">{formatNumber(spell.precio)}</td>
                        <td>{formatNumber(spell.skills)}</td>
                        <td>{formatNumber(spell.mana)}</td>
                        <td>{formatNumber(spell.stamina)}</td>
                        <td className="desc-cell">
                          {showDropdown ? (
                            <div className="desc-dropdown">
                              <button 
                                className="desc-toggle"
                                onClick={() => toggleSpellDesc(idx)}
                              >
                                {isExpanded ? <Icons.ChevronUp size={16} /> : <Icons.ChevronDown size={16} />}
                                <span>{isExpanded ? 'Ver menos' : 'Ver más'}</span>
                              </button>
                              {isExpanded && (
                                <div className="desc-content">
                                  {descText}
                                </div>
                              )}
                            </div>
                          ) : (
                            descText
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="spells-count">
            <p>Total de hechizos: <strong>{filteredSpells.length}</strong></p>
          </div>
        </div>
      );
    }
    
    // Render Clanes
    if (section.id === 'clanes') {
      return (
        <div className="section-content">
          <p className="section-description">{section.content.description}</p>
          
          <div className="content-text">
            <p>{section.content.intro}</p>
          </div>
          
          <div className="fundacion-box">
            <code className="command-highlight">/fundarclan</code>
            <p>{section.content.fundacion}</p>
          </div>
          
          {/* Tipos de Clan Table */}
          <div className="table-container">
            <h3 className="table-title">{section.content.tiposClan.title}</h3>
            <div className="table-scroll">
              <table className="wiki-table clan-types-table">
                <thead>
                  <tr>
                    <th>Tipo de Clan</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {section.content.tiposClan.rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="clan-type-name">{row.tipo}</td>
                      <td>{row.descripcion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="content-text niveles-intro">
            <p>{section.content.nivelesClanIntro}</p>
          </div>
          
          {/* Niveles de Clan */}
          <div className="clan-levels-section">
            <h3 className="table-title">{section.content.nivelesClan.title}</h3>
            
            <div className="clan-levels-grid">
              {section.content.nivelesClan.levels.map((level, idx) => (
                <div key={idx} className="clan-level-card">
                  <div className="clan-level-header">
                    <span className="clan-level-number">Nivel {level.nivel}</span>
                    <span className="clan-level-members">
                      {level.nivel === 1 && '6 miembros'}
                      {level.nivel === 2 && '8 miembros'}
                      {level.nivel === 3 && '11 miembros'}
                      {level.nivel === 4 && '13 miembros'}
                      {level.nivel === 5 && '16 miembros'}
                      {level.nivel === 6 && '20 miembros'}
                    </span>
                  </div>
                  
                  <div className="clan-level-requisitos">
                    <h4>Requisitos:</h4>
                    <p>{level.requisitos}</p>
                  </div>
                  
                  <div className="clan-level-ventajas">
                    <h4>Ventajas:</h4>
                    <ul>
                      {level.ventajas.map((ventaja, vIdx) => (
                        <li key={vIdx}>{ventaja}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="nota-final-box">
            <Icons.Info size={20} />
            <p>{section.content.notaFinal}</p>
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
                    setSelectedClass(null); // Reset selected class when changing sections
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
          <Card className="content-card" key={activeSection}>
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