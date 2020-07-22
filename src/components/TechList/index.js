import React, { useState } from 'react';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTechs] = useState('');

  const handleAddTech = () => {
    setTechs([...techs, newTech]);
    setNewTech('');
  };

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={(e) => setNewTechs(e.target.value)}
      />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
