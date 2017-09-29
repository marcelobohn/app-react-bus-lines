import React from 'react';

export default function DepartureCity(props) {
  const printCities = () => {
    if (props.items)
      return props.items.map( (a) => { return <option key={a}>{a}</option> } );
  };

  return (
    <div className="container">
      <h4 className="departureTitle">{props.title || 'Cidade de partida'}</h4>
      <select>
        { printCities() }
      </select>
    </div>
  );
}