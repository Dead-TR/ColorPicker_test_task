/* eslint-disable */
import React, { useState } from 'react';
import './SelectColor.css';

export const SelectColor = ({ colors, setRed, setBlue, setGreen }) => {

  return (
    <section className="SelectColor">
      <div className="SelectColor__triangle" />
      {colors.map((color) => (
        <div
          className="SelectColor__item"
          key={color.name}
          onClick={() => {
            setRed(color.RGB.red);
            setBlue(color.RGB.blue);
            setGreen(color.RGB.green);
          }}
        >
          <p className="SelectColor__name">
            {color.name}
          </p>
          <div className={`SelectColor__color SelectColor__color_${color.name}`} />
        </div>
      ))}
    </section>
  );
};
