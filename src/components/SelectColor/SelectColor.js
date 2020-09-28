import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectColor.css';

export const SelectColor = ({ colorTransition, value, setValue, colors }) => {

  const [red, setRed] = useState(
    parseInt(value.substring(1, 3), 16),
  );
  const [green, setGreen] = useState(
    parseInt(value.substring(3, 5), 16),
  );
  const [blue, setBlue] = useState(
    parseInt(value.substring(7, 5), 16),
  );

  useEffect(() => {
    setValue(`#${
      colorTransition(red)
    }${
      colorTransition(green)
    }${
      colorTransition(blue)
    }`);
  }, [red, green, blue]);

  return (
    <section className="SelectColor">
      <div className="SelectColor__triangle" />
      {colors.map((colorData) => (
        <div
          className="SelectColor__item"
          key={colorData.name}
          onClick={() => {
            setRed(colorData.RGB.red);
            setBlue(colorData.RGB.blue);
            setGreen(colorData.RGB.green);
          }}
        >
          <p className="SelectColor__name">
            {colorData.name}
          </p>
          <div
            className={
              `SelectColor__color SelectColor__color_${colorData.name}`
            }
          />
        </div>
      ))}
    </section>
  );
};

SelectColor.propTypes = {
  colorTransition: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};
