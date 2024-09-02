
type Oprosnik={
    id:number,
    title:string,
    name:string,
    otvet:string,
    click:number,
    variants:[
        {title:string, flag:boolean},
        {title:string, flag:boolean},
        {title:string, flag:boolean},     
    ]
}
export default Oprosnik