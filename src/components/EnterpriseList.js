import React from 'react';

export default function EnterpriseList(props) {
  const printItems = () => {
    if (props.items)
      return props.items.map( (a) => { return <option key={a}>{a}</option> } );
  };

  return (
      <div>
        <section>
          <div className="container">
            <h4 className="enterpriseTitle">{props.title || 'Lista de Empresas'}</h4>
            <select>
              { printItems() }
            </select>
          </div>
        </section>
      </div>
  );
}