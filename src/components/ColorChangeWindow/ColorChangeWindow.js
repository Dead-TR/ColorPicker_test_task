import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ColorChangeWindow.css';

import { SelectColor } from '../SelectColor/SelectColor';
import { ColorEdit } from '../ColorEdit/ColorEdit';

export const ColorChangeWindow = ({
  value,
  setValue,
  isColorSelect,
  setIsColorSelect,
  isColorEdit,
  setIsColorEdit,
  colors,
  setIntermediateColor,
  intermediateColor,
}) => {
  const [hider, setHider] = useState(false);
  const colorTransition = (color) => {
    if (color.toString(16).length === 1) {
      return `0${color.toString(16)}`;
    }

    return `${color.toString(16)}`;
  };

  const closeChoiceColor = (event) => {
    if (
      !(event.target.closest('.SelectColor'))
        && !(event.target.closest('.ColorPicker__triangle-box'))
        && !(event.target.closest('.ColorPicker__color-item'))
        && !(event.target.closest('.ColorEdit'))
    ) {
      setIntermediateColor(localStorage.getItem('colorValue'))
      setIsColorSelect(false);
      setIsColorEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeChoiceColor);

    return () => {
      document.removeEventListener('click', closeChoiceColor);
    };
  }, []);

  useEffect(() => {
    if (isColorEdit) {
      setHider(true);
    } else {
      setTimeout(() => {
        setHider(false);
      }, 1000);
    }
  }, [isColorEdit]);

  return (
    <section className="ColorChangeWindow">

      <div
        className={`ColorChangeWindow__SelectColor ${
          isColorSelect && ('ColorChangeWindow__SelectColor_active')
        }`}
      >
        <SelectColor
          colorTransition={colorTransition}
          value={value}
          colors={colors}
          setValue={setValue}
        />
      </div>

      <div
        className={`ColorChangeWindow__ColorEdit ${
          isColorEdit && ('ColorChangeWindow__ColorEdit_active')
        }`}
      >
        {hider && (
          <ColorEdit
            colorTransition={colorTransition}
            setValue={setValue}
            value={value}
            setIsColorEdit={setIsColorEdit}
            setIntermediateColor={setIntermediateColor}
            intermediateColor={intermediateColor}
          />
        )}
      </div>
    </section>
  );
};

ColorChangeWindow.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isColorSelect: PropTypes.bool.isRequired,
  setIsColorSelect: PropTypes.func.isRequired,
  isColorEdit: PropTypes.bool.isRequired,
  setIsColorEdit: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setIntermediateColor: PropTypes.func.isRequired,
  intermediateColor: PropTypes.string.isRequired,
};
