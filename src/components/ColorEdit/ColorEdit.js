/* eslint-disable */
import React, { useState } from 'react';
import './ColorEdit.css';

export const ColorEdit = ({
  activeRed,
  activeBlue,
  activeGreen,
  setActiveRed,
  setActiveBlue,
  setActiveGreen,
  setColor,
  color,
  setValue,
  value,
  setIsColorEdit,
}) => {
  console.log("value", value)

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
          setActiveRed(Number(event.target.value))
        }}
        value={activeRed}
      />
      <input
        className="ColorEdit__range ColorEdit__range_green"
        type="range"
        min="0"
        max="255"
        step="1"
        onChange={(event) => {
          setActiveGreen(Number(event.target.value))
        }}
        value={activeGreen}
      />
      <input
        className="ColorEdit__range ColorEdit__range_blue"
        type="range"
        min="0"
        max="255"
        step="1"
        onChange={(event) => {
          setActiveBlue(Number(event.target.value))
        }}
        value={activeBlue}
      />
      <div className="ColorEdit__buttons">
        <button
          className="ColorEdit__button ColorEdit__button_cancel"
          onClick={() => {
            setColor(value);
            setIsColorEdit(false);
          }}
        >
          cancel
        </button>
        <button
          className="ColorEdit__button ColorEdit__button_ok"
          onClick={() => {
            setValue(color);
            setIsColorEdit(false);
          }}
        >
          ok
        </button>
      </div>
    </section>
  )
}
