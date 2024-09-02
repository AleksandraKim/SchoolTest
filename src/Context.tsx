import { createContext, useContext } from "react"
import arr from "./Components/Container/Questions/Questions"
import Oprosnik from "./Test/Oprosnik"


const ThemeContext = createContext<Oprosnik[]>(arr);

export default ThemeContext