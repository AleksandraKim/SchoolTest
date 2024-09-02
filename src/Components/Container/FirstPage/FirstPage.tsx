import React,{FC} from "react";
import {FirstPageDiv,FirstPageText,FirstPageH1,FirstPageH2,FirstPageH3,FirstPageButton} from './style'

interface Click{
    setShow:(value:boolean)=>void;
}

let FirstPage: FC<Click>=({setShow})=>{

    return ( 
                <FirstPageDiv>
                   <FirstPageText>
                     <FirstPageH1>Здравствуй!</FirstPageH1>
                     <FirstPageH2>Это мой простенький опросник на знание школьной программы</FirstPageH2>
                   </FirstPageText>
                   <FirstPageH3>Сам тест займёт у тебя всего 5 минут! Проверь на каком ты уровне</FirstPageH3>
                   <FirstPageButton type="submit" onClick={()=>{setShow(true)}}>ПРОЙТИ ТЕСТ</FirstPageButton>
                </FirstPageDiv>
           
    );
  }
  
  export default FirstPage;
  