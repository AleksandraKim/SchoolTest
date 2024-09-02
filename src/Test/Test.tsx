import React,{FC,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import ThemeContext from "../Context";
import styled from "styled-components";
import uuid from 'react-uuid';
import {TestDiv,TestText,FirstText ,TestMain} from "./style";

const TestLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    border: 1px solid rgb(255, 255, 255);
    padding: 9px 20px;
    border-radius: 50px;
    margin-left: 780px;
    margin-top: 60px;
    &:hover{color: #00000057;}
`

let Test: FC=()=>{
  const QSarr = React.useContext(ThemeContext);
  let[showImg,setShowImg]=useState<boolean>(true)

 useEffect(()=>{
   setTimeout(()=>{
      setShowImg(false)
   },1500)
 },[])
  let res=QSarr.map(function(elem){
    let variants=elem.variants.map(function(el){
       return <div>
       <input
           key={uuid()}
           type="radio"
            name={elem.name}
           value={el.title} 
         onClick={(e: React.FormEvent<HTMLInputElement>)=>{
            if(e.currentTarget.value===elem.otvet && elem.click===0){
                elem.click=1
                console.log(elem.click)
            }else if(e.currentTarget.value!==elem.otvet && elem.click!==0){
                elem.click=0;
                console.log(elem.click)
            }
         }}
       />
       <label>{el.title}</label>
      
   </div>
    })
  

    return <ul><li key={uuid()}>{elem.title} </li>
    {variants}
    </ul>
  })
    

    return (<TestMain>
               <TestDiv>
                 <TestText>
                    <FirstText>Тест</FirstText>
                    {res}
                 </TestText>
               <TestLink to='/Results'>ГОТОВО</TestLink>
               </TestDiv>
           </TestMain>
    
    );
  }
  
  export default Test;