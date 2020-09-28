import React, { useState, useEffect } from 'react';
import './ColorPicker.css';

import { ColorChangeWindow } from '../ColorChangeWindow/ColorChangeWindow';

export const ColorPicker = () => {
  const [isColorSelect, setIsColorSelect] = useState(false);
  const [isColorEdit, setIsColorEdit] = useState(false);

  const [value, setValue] = useState(
    localStorage.getItem('colorValue') || '#000000',
  );
  const [intermediateColor, setIntermediateColor] = useState(value);
  const [color, setColor] = useState(value);

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
    },
  ];

  useEffect(() => {
    if (!isColorEdit) {
      setColor(value);
    } else {
      setColor(intermediateColor);
    }
  }, [intermediateColor, value]);

  useEffect(() => {
    localStorage.setItem('colorValue', value);
  }, [value]);

  return (
    <section className="ColorPicker">
      <div
        className="ColorPicker__unit"
      >
        <div className="ColorPicker__name">
          {color}
        </div>

        <div className="ColorPicker__line" />

        <div
          className="ColorPicker__color-box"
          onClick={() => {
            setIsColorSelect(false);
            setIsColorEdit(!isColorEdit);
          }}
        >
          <div
            className="ColorPicker__color-item"
            style={{background: color}}
          />
        </div>

        <div className="ColorPicker__line" />

        <div
          className="ColorPicker__triangle-box"
          onClick={() => {
            setIsColorSelect(!isColorSelect);
            setIsColorEdit(false);
          }}
        >
          <div className="ColorPicker__triangle-item" />
        </div>
      </div>
      <ColorChangeWindow
        value={value}
        setValue={setValue}
        isColorSelect={isColorSelect}
        setIsColorSelect={setIsColorSelect}
        isColorEdit={isColorEdit}
        setIsColorEdit={setIsColorEdit}
        colors={colors}
        setIntermediateColor={setIntermediateColor}
        intermediateColor={intermediateColor}
      />
    </section>
  );
};
