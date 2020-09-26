/* eslint-disable */
import React, { useState, useEffect } from 'react';
import './ColorPicker.css';

import { SelectColor } from '../SelectColor/SelectColor';
import { ColorEdit } from '../ColorEdit/ColorEdit';

export const ColorPicker = () => {
  const [red, setRed] = useState(
    Number(localStorage.getItem('red'))
      || 0
  );
  const [blue, setBlue] = useState(
    Number(localStorage.getItem('blue'))
      || 0
  );
  const [green, setGreen] = useState(
    Number(localStorage.getItem('green'))
      || 0
  );

  const [isColorSelect, setIsColorSelect] = useState(false);
  const [isColorEdit, setIsColorEdit] = useState(false);

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

  const colorTransition = (color) => {
    if (color.toString(16).length === 1) {
      return `0${color.toString(16)}`
    }
    else {
      return `${color.toString(16)}`
    }
  }

  const [color, setColor] = useState( localStorage.getItem('value') || `#${
    colorTransition(red)
  }${
    colorTransition(green)
  }${
    colorTransition(blue)
  }`);

  const [value, setValue] = useState(color);

  const closeChoiceColor = (event) => {
    if (
      !(event.target.closest('.SelectColor'))
        && !(event.target.closest('.ColorPicker__triangle-box'))
        && !(event.target.closest('.ColorPicker__color-item'))
        && !(event.target.closest('.ColorEdit'))
      ) {
        setIsColorSelect(false);
        setIsColorEdit(false);
        setColor(localStorage.getItem('value'))
      }
    }

  useEffect(() => {
    document.addEventListener('click', closeChoiceColor)

    return () => {
      document.removeEventListener('click', closeChoiceColor)
    }
  }, [])

  useEffect(() => {
    setColor(`#${
      colorTransition(red)
    }${
      colorTransition(green)
    }${
      colorTransition(blue)
    }`);
    localStorage.setItem('red', red);
    localStorage.setItem('green', green);
    localStorage.setItem('blue', blue);
  }, [red, green, blue]);

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

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
              colors={colors}
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
              setColor={setColor}
              color={color}
              setValue={setValue}
              value={value}
              setIsColorEdit={setIsColorEdit}
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
            setIsColorSelect(false);
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
            setIsColorSelect(!isColorSelect);
            setIsColorEdit(false);
          }}
        >
          <div className="ColorPicker__triangle-item" />
        </div>
      </div>
    </section>
  );
};
