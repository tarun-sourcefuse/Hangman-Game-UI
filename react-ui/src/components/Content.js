import React from 'react';

export const H1 = ({ children, style = {}, className }) => {
  return (
    <div style={style} className="game-content">
      <h1 className={className}>{children}</h1>
    </div>
  );
};

export const H2 = ({ children, style = {}, className }) => {
  return (
    <div style={style} className="game-content">
      <h2 className={className}>{children}</h2>
    </div>
  );
};
