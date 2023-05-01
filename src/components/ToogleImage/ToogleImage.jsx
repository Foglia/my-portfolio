import React from "react";
import avatar from "../../assets/images/foto2.jpeg"
import avatar2 from "../../assets/images/3.jpeg"
import './ToggleImage.css'


function ToggleImage({ active, handleChangeActive }) {
    return (
      <>
        <div className="toggle-wrapper">
          {active ? (
            <img
              className="active avatar"
              alt="mac avatar"
              src={avatar}
              onClick={() => handleChangeActive()}
            />
          ) : (
            <img
              className="inactive avatar"
              alt='laughing avatar'
              src={avatar2}
              onClick={() => handleChangeActive()}
            />
          )}
        </div>
      </>
    );
  }

export default ToggleImage;