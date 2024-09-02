
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
let arr:Array<Oprosnik>=[{
    id:1,
    title:"Назовите годы Великой французской революции.",
    name:"Question1",
    otvet:"1789 — 1799 годы",
    click:0,
    variants:[
        {title:"1789 — 1790 годы", flag:false},
        {title:"1789 — 1792 годы", flag:false},
        {title:"1789 — 1799 годы", flag:false},
        
    ]
},
{
    id:2,
    title:"Площадь какой геометрической фигуры вычисляется путём умножения длины на ширину?",
    name:"Question2",
    otvet:"Прямоугольника",
    click:0,
    variants:[
        {title:"Прямоугольника", flag:false},
        {title:"Прямоугольного треугольника", flag:false},
        {title:"Трапеции", flag:false},
     
    ]
},
{
    id:3,
    title:"Единицей измерения энергии является ...",
    name:"Question3",
    otvet:"Джоуль",
    click:0,
    variants:[
        {title:"Джоуль", flag:false},
        {title:"Ньютон", flag:false},
        {title:"Ампер", flag:false},
       
    ]
},
{
    
    id:4,
    title:"Какой пролив отделяет Великобританию от Франции?",
    name:"Question4",
    otvet:"Ла-Манш",
    click:0,
    variants:[
        {title:"Ла-Манш", flag:false},
        {title:"Гудзонов пролив", flag:false},
        {title:"Пролив Дрейка", flag:false},
       
    ]
},
{
    id:5,
    title:"В периодической системе химических элементов свинец обозначается как ..",
    name:"Question5",
    otvet:"Плюмбум",
    click:0,
    variants:[
        {title:"Плюмбум", flag:false},
        {title:"Силициум", flag:false},
        {title:"Аргентум", flag:false},
        
    ]
},
{
    id:6,
    title:"Какой материк самый удалённый от северного полюса?",
    name:"Question6",
    otvet:"Антарктида",
    click:0,
    variants:[
        {title:"Австралия", flag:false},
        {title:"Антарктида", flag:false},
        {title:"Южная Америка", flag:false},
       
    ]
},
{
    id:7,
    title:"Кто автор стихотворения, в котором есть слова: «Послушайте! Ведь, если звезды зажигают, значит это кому-нибудь нужно?»?",
    name:"Question7",
    otvet:"Владимир Маяковский",
    click:0,
    variants:[
        {title:"Шарль Бодлер", flag:false},
        {title:"Владимир Маяковский", flag:false},
        {title:"Уолт Уитмен", flag:false},
       
    ]
},

]
export default arr