import React from 'react';

export default function EnterpriseList({ data = {} }) {
  return (
      <div>
        <section>
          <div className="container">
            <h4 className="enterpriseTitle">Empresa</h4>
            <select>
              <option>Socaltur</option>
              <option>Wendling</option>
            </select>
          </div>
        </section>
      </div>
  );
}