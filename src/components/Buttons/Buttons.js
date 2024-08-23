import React from 'react'
import {Link} from "react-router-dom";




const GlitchButton = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="button-53" data-text={text}>
        {text}
      </button>
      </Link>
   
  );
}

export { GlitchButton}