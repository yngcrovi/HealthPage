import { useState } from 'react';
import styles from "../../CSS/Component/Tag/Input.module.css"

export default function Input(props) { 

  return (
    <>
    <input 
        style={props.style}
        type={props.type} placeholder={props.placeholder} 
        onInput={props.onInput} 
    />
    {props.type == "password" &&
      <>
      {props.icon}
      </>
    }
    </>
  );
}