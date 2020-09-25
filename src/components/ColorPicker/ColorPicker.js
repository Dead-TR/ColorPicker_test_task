/* eslint-disable */
import React, { useState } from 'react';
import './ColorPicker.css';

import { SelectColor } from '../SelectColor/SelectColor';
import { ColorEdit } from '../ColorEdit/ColorEdit';

export const ColorPicker = () => {
  const [value, setValue] = useState(0xffffff);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(255);
  const [green, setGreen] = useState(255);

  const [isColorSelect, setisColorSelect] = useState(false);
  const [isColorEdit, setIsColorEdit] = useState(false);

  const colorTransition = (color) => {
    if (color.toString(16).length === 1) {
      return `0${color.toString(16)}`
    }
    else {
      return `${color.toString(16)}`
    }
  }

  const color = `#${
    colorTransition(red)
  }${
    colorTransition(green)
  }${
    colorTransition(blue)
  }`;

  return (
    <section className="ColorPicker">
      <div
        className="ColorPicker__unit"
      >
        {
          isColorSelect && (
            <SelectColor
              setRed={setRed}
              setBlue={setBlue}
              setGreen={setGreen}
            />
          )
        }

        {
          isColorEdit && (
            <ColorEdit
              activeRed={red}
              activeBlue={blue}
              activeGreen={green}
              setActiveRed={setRed}
              setActiveBlue={setBlue}
              setActiveGreen={setGreen}
            />
          )
        }

        <div className="ColorPicker__name">
          {color}
        </div>

        <div className="ColorPicker__line" />

        <div
          className="ColorPicker__color-box"
          onClick={() => {
            setisColorSelect(false);
            setIsColorEdit(!isColorEdit);
          }}
        >
          <div
            className="ColorPicker__color-item"
            style={{
              background: color,
            }}
          />
        </div>

        <div className="ColorPicker__line" />

        <div
          className="ColorPicker__triangle-box"
          onClick={() => {
            setisColorSelect(!isColorSelect);
            setIsColorEdit(false);
          }}
        >
          <div className="ColorPicker__triangle-item" />
        </div>
      </div>
    </section>
  );
};
