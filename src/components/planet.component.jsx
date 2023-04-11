
import React from 'react';


const Planet = ( { planet } ) => (

    <div className="card">

        <h3>{ planet.name }</h3>
        <p>Popluation - { planet.population }</p>
        <p>Terrain - { planet.terrain }</p>

    </div>

);

export default Planet;