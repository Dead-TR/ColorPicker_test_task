import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ColorEdit.css';

export const ColorEdit = ({
  setValue,
  value,
  setIsColorEdit,
  colorTransition,
  setIntermediateColor,
  intermediateColor,
}) => {

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
    setIntermediateColor(`#${
      colorTransition(red)
    }${
      colorTransition(green)
    }${
      colorTransition(blue)
    }`);
  }, [red, green, blue]);

  return (
    <section className="ColorEdit">
      <div className="ColorEdit__triangle" />

      <input
        className="ColorEdit__range ColorEdit__range_red"
        type="range"
        min="0"
        max="255"
        step="1"
        onChange={(event) => {
          setRed(Number(event.target.value))
        }}
        value={red}
      />
      <input
        className="ColorEdit__range ColorEdit__range_green"
        type="range"
        min="0"
        max="255"
        step="1"
        onChange={(event) => {
          setGreen(Number(event.target.value))
        }}
        value={green}
      />
      <input
        className="ColorEdit__range ColorEdit__range_blue"
        type="range"
        min="0"
        max="255"
        step="1"
        onChange={(event) => {
          setBlue(Number(event.target.value))
        }}
        value={blue}
      />

      <div className="ColorEdit__buttons">
        <button
          className="ColorEdit__button ColorEdit__button_cancel"
          onClick={() => {
            setIntermediateColor(value)
            setIsColorEdit(false);
          }}
        >
          cancel
        </button>

        <button
          className="ColorEdit__button ColorEdit__button_ok"
          onClick={() => {
            setValue(intermediateColor);
            setIsColorEdit(false);
          }}
        >
          ok
        </button>
      </div>
    </section>
  )
}

ColorEdit.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setIsColorEdit: PropTypes.func.isRequired,
  colorTransition: PropTypes.func.isRequired,
  setIntermediateColor: PropTypes.func.isRequired,
  intermediateColor: PropTypes.string.isRequired,
};
