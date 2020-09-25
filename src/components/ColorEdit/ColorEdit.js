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
}) => {

  return (
    <section className="ColorEdit">
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
    </section>
  )
}