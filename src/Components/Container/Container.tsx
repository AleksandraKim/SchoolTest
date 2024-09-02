import React, {useState }from "react";
import Anketa from "./ContDocs";
import FirstPage from "./FirstPage/FirstPage";
import Registr from "./Registr/Registr";
import './Container.css'

function Container():React.JSX.Element  {
  let [show,setShow]=useState<boolean>(false)
  let [personList,setPersonList]=useState<Anketa[]>([])
  
  
  let addPerson=(person:Anketa)=>{
   setPersonList([...personList,person])
  }

    return (<main>
                {show?<Registr addPerson={addPerson}/>:<FirstPage setShow={setShow}/>}
            </main>
    )
  }
  
  export default Container;
  