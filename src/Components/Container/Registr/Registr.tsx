import React, {ChangeEvent,FormEvent,useState,FC }from "react";
import Anketa from "../ContDocs";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {RegistrDiv,RegistrText,RegistrH1,RegistrButton,RegistrForm,RegistrInput,RegistrSpan} from'./style'


const RegistrLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    border-radius: 50px;
    margin-left: 0px;
`

interface RegistrProps{
  addPerson:(person:Anketa)=>void;
}

let initState={
    name:'',
    surname: '',
    patronymic:'',
    email:''
}

let Registr: FC<RegistrProps>=({addPerson})=>{
 let [person,setPerson]=useState<{name:string,surname:string,patronymic:string,email:string}>(initState)
 let reg=/^[a-zA-Z]+([.-]?\w+){0,1}@[a-z]+([.-]?\w+){0,1}\.\w+$/

 let handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
     let {name,value}=e.target
     setPerson({
      ...person,
      [name]:value
     })
 }

 let handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    let{name,surname,patronymic,email}=person
    if(name&&patronymic&&surname&&email){
       addPerson({
        name,surname,patronymic,email,id:Date.now()
       })
    }
 }

    return (<div>
               <div id='registr'>
                  <RegistrDiv>
                     <RegistrText>
                        <RegistrH1>Давай знакомиться!</RegistrH1>
                        <RegistrForm onSubmit={handleSubmit}>
                        <RegistrSpan>Имя</RegistrSpan>   
                        <RegistrInput  name="name"
                                       type="text"
                                       placeholder="Напишите ваше имя"
                                       onChange={handleChange}
                                       value={person.name}/>
                                <br/>
                        <RegistrSpan>Фамилия</RegistrSpan>  
                        <RegistrInput  name="surname"
                                       type="text"
                                       placeholder="Напишите вашу фамилию"
                                       onChange={handleChange}
                                       value={person.surname}/>
                                 <br/>
                        <RegistrSpan>Отчество</RegistrSpan> 
                        <RegistrInput   name="patronymic"
                                        type="text"
                                        placeholder="Напишите ваше отчество"
                                        onChange={handleChange}
                                        value={person.patronymic}/>
                                 <br/>
                        <RegistrSpan>Почта</RegistrSpan> 
                        <RegistrInput   name="email" 
                                        type="text"
                                        placeholder="Напишите ваш email"
                                        onChange={handleChange}
                                        value={person.email}/>
                        </RegistrForm>
                      </RegistrText>
                      <RegistrLink to='/Test'>{reg.test(person.email) && 
                                        person.name && 
                                        person.surname && 
                                        person.patronymic && 
                                        person.email?
                                       <RegistrButton>Далее</RegistrButton>:<RegistrButton disabled>Далее</RegistrButton>}
                      </RegistrLink>
                  </RegistrDiv>
                </div>
            </div>
          )}
  
  export default Registr;
  