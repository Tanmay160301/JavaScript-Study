//What is object destructuring?
//object chya property la ek variable madhe map karne is what object destructuring is so that we need 
//not have to use obj.propertyname again and again

const course={
    courseName:"JavaScript",
    price:500,
    courseInstructor:"Hitesh Sir"
}

console.log(course);
console.log(course.courseInstructor);//Hitesh Sir

const {courseInstructor}=course;
console.log(courseInstructor);//Hitesh Sir

//You can even rename the property name to be used as a variable
const {courseName:Subject}=course;
console.log(Subject);//JavaScript


//React madhe tyacha use
const navbar= ({company}) => {// hyachya argument madhe object destructuing use kela ahe

}

navbar(company="Tanmay");


//JSON (commonly used in API industry)
// {
//     "name":"Tanmay",
//     "courseName" : "js in Hindi",
//     "price": "free" 
// }


//Idea of JSON : jyaveli pn me URL call karnar tyaveli mala json object receive honar ... tela me 
// object madhe convert karun or observe karun value kadnar one by one

//kadhi kadhi API Array of objects chya form madhe miltat
 
// [

//     {},
//     {},
//     {}
// ]
