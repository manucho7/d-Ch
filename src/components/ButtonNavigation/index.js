import React from 'react';
import './index.css'

export const ButtonNavigation = ({onClick}) => {
  return (
    <div onClick={onClick} className="btn-navigation">
      <img src="/static/arrow_back_ios-24px.svg" alt=""/>
    </div>
  );
}
