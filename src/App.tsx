import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import arr from "./Components/Container/Questions/Questions";
import Oprosnik from "./Test/Oprosnik";
import React,{useState,useEffect} from "react";
import ThemeContext from "./Context";
import "./App.css"


function App():React.JSX.Element {
  let [QSarr,setQSarr]=useState<Oprosnik[]>(arr)
  const [theme, setTheme] = useState<string>('light');
  
const toggleTheme = () => {
   setTheme(theme === 'light' ? 'dark' : 'light');
   };
  
  return (<div className={`app ${theme}`}>
             <ThemeContext.Provider value={QSarr}>
                <Header toggleTheme={toggleTheme} theme={theme}/>
                <Container />
             </ThemeContext.Provider>
          </div>
         );
}

export default App;
