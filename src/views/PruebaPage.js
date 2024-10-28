// src/views/PruebaPage.js
import React from 'react';
import imagenPrueba from '../assets/images/ImagenPrueba.gif'; // Importa la imagen

const PruebaPage = () => {
  return (
    <div>
      <h1>PASEN Y VEAN AL ESQUELETO BAILARIN</h1>
      <p>Esta es una página de ejemplo.</p>
      
      {/* Muestra la imagen */}
      <img src={imagenPrueba} alt="Prueba" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
    </div>
  );
};

export default PruebaPage;