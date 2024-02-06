// CurtainContainer.js
import React, { useEffect, useState } from 'react';
import '../../assets/css/CurtainContainer.css';

const CurtainContainer = ({ curtainsOpened }) => {
  useEffect(() => {
    let timeout;

    if (curtainsOpened) {
      timeout = setTimeout(() => {
        const curtainContainer = document.querySelector('.curtain-container');
        if (curtainContainer) {
          curtainContainer.style.zIndex = '0';
        }
      }, 2000); 

      return () => clearTimeout(timeout);
    }
  }, [curtainsOpened]);

  return (
    <div className={`curtain-container ${curtainsOpened ? 'opened' : ''}`}>
      <div className="curtain-left"></div>
      <div className="curtain-right"></div>
    </div>
  );
};

export default CurtainContainer;
