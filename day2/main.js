//exercise1
let age = 18
const name = "Ahmed"
console.log(age,name);
//exercise2
age = 20
console.log(age);
// constلا يمكننا اعادة تعيين قيمة let الا في نفس مكان التعريف الاول عكس 
// name = "ali"
// console.log(name);
//exercise3  func الا اذا كانت معرفة ب  scope لا يمكننا الوصول الى المتغيرات داخل  
{
    let myname = "ahmed"
    const myBirth = 2005
}
console.log(myname,myBirth);