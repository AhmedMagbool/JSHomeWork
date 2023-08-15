//task1
let username = prompt("اكتب اسمك");
let userage = prompt("اكتب عمرك");

if (userage >= 18) {
    alert("Hello "+username+" Welcome to our website ");
}else{
 alert("Sorry "+username+" But your age under 18");
}
//task2
let name_1 = "احمد";
let username_2 = prompt("اكتب اسمك");
if (name_1 == username_2) {
    alert("الاسمان متطابقان");
}else{
    alert("الاسمان غير متطابقان");
}