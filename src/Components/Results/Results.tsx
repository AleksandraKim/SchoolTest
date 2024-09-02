import React,{useState,useEffect, CSSProperties } from "react";
import ThemeContext from "../../Context";
import {ResultsMain,ResultsText,ResultsMainDiv,ResultsH1,ResultsH2,ResultsImage,ResultsAll} from "./style"
import resultsText from "./TextOfRes";
import ClockLoader from "react-spinners/ClockLoader";

const override: CSSProperties = {
  position:"absolute",
  left: "46vw",
  top:"49vh",
  borderColor: "white",
};

interface Ball {
	1: string;
	2: string;
  3: string;
}

let user: Ball = {
  1: "балл",
	2: "балла",
  3: "баллов"
}

function Results():React.JSX.Element {
   const QSarr = React.useContext(ThemeContext);
   let [sum,setSum]=useState<number>(0)
   let [ball,setBall]=useState<string>("")
   let str:string=""
   let[showImg,setShowImg]=useState<boolean>(true)

   useEffect(()=>{
     setTimeout(()=>{
        setShowImg(false)
     },1500)
   },[])

  for (let elem of QSarr){
     sum+=elem.click
  }
if(sum===1){
  ball=user[1]
  str=resultsText[0].Otvet3
}else if(sum>1 && sum<5){
  ball=user[2]
  str=resultsText[0].Otvet2
}else if(sum>4){
  ball=user[3]
  str=resultsText[0].Otvet1
}else if(sum===0){
  ball=user[3]
  str=resultsText[0].Otvet3
}
  
  return ( <ResultsAll>{showImg?( <ClockLoader
    cssOverride={override}
    size={120}
    aria-label="Loading Spinner"
    data-testid="loader"
  />):<ResultsMain>
             <ResultsMainDiv>
                <ResultsText>
                   <ResultsH1>Вы набрали {sum} {ball}</ResultsH1>
                   <ResultsH2>{str}</ResultsH2>
                </ResultsText>
             </ResultsMainDiv>
          </ResultsMain>}
          </ResultsAll>
 
  )
}

export default Results;
