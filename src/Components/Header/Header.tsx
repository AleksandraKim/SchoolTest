import React,{FC} from "react";
import './Header.css'

interface Toggle{
  toggleTheme:()=>void;
  theme:string;
}


let Header: FC<Toggle>=({toggleTheme,theme})=>{

  return (
   <header className={`header ${theme}`}>
       <button onClick={toggleTheme}>
            TOGGLETHEME
       </button>
  </header>
  )
}

export default Header;
