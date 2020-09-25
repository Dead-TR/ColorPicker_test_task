/* eslint-disable */

import React, { useState } from 'react';
import './SelectColor.css';

export const SelectColor = ({ setRed, setBlue, setGreen}) => {

  const colors = [
    {
      name: 'red',
      RGB: {
        red: 255,
        blue: 0,
        green: 0,
      },
    },
    {
      name: 'yellow',
      RGB: {
        red: 255,
        blue: 0,
        green: 255,
      },
    },
    {
      name: 'blue',
      RGB: {
        red: 0,
        blue: 255,
        green: 0,
      },
    },
    {
      name: 'green',
      RGB: {
        red: 0,
        blue: 0,
        green: 255,
      },
    }
  ]

  return (
    <section className="SelectColor">
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
