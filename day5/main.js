//day1 in javascript
//طريقة الطباعة
console.log("hello ,word");
console.log("Ahmed Magbool");
//day2 in javascript
//المتغيرات
let example = "example"
const example_2 = "example"
console.log(example);
console.log(example_2);
//day3 in javascript

//bool
let bool = true;
console.log(bool);
console.log(typeof bool);
//symbol
const id = Symbol(1141064681);
console.log(id);
console.log(typeof id);
//null
let n = null;
console.log(n);
console.log(typeof n);
//undefined
let un = undefined
console.log(un);
console.log(typeof un);
//num (intger)
let int = 12
console.log(int);
console.log(typeof int);
//num (double)
let dou = 2.30;
console.log(dou);
console.log(typeof dou);
//num (bigint)
let big = 123456n;
console.log(big);
console.log(typeof big);
//string
let str = "web design"
console.log(str);
console.log(typeof str);
//string with num
let mes = "as"-"ds"
console.log(mes);
console.log(typeof mes);
let mad = "ah"+"med"
console.log(mad);
console.log(typeof mad);
let num1 = "30"+"20"
let num2 = "20"-"5"
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);
//iterpolation
let coun = "Riyadh"
let coun2 = "Asia"
console.log(`${coun} located in ${coun2}`);
//string pro
let stri = "java script language"
console.log(stri.length);
console.log("test".length);
console.log(stri.charAt(0));
console.log("abc".charAt(1));
console.log(stri.slice(0,4));
console.log(stri.slice(1,3));
console.log(stri.split(" "));
console.log("192.168.1.1".split("."));
//coversion string
//string to string
const str2 = "text"
const strtostr = String(strtostr)
console.log(`${typeof str2}: ${str2}`);
console.log(`${typeof strtostr}: ${strtostr}`);
//num to string
const num_1 = 20;
const numToStr = String(num_1)
console.log(`${typeof num_1}:${num_1}`);
console.log(`${typeof numToStr}:${numToStr}`);
//boolean to string
const boolean = true;
const boolToStr = String(boolean)
console.log(`${typeof boolean}:${boolean}`);
console.log(`${typeof boolToStr}:${boolToStr}`);
//undefinned to string
const undefined = undefined
const unToStr = String(undefined)
console.log(`${typeof undefined}:${undefined}`);
console.log(`${typeof unToStr}:${unToStr}`);
//null to string
const null_1 = null 
const nulltostr = String(null)
console.log(`${typeof null_1}:${null_1}`);
console.log(`${typeof nulltostr}:${nulltostr}`);
//bigint
const bigint_1 = 10n;
const biginttostr = String(bigint_1)
console.log(`${typeof bigint_1}:${bigint_1}`);
console.log(`${typeof biginttostr}:${biginttostr}`);
//num to num
const n_um = 4;
const numtonum = Number(n_um);
console.log(`${typeof n_um}:${n_um}`);
console.log(`${typeof numtonum}:${numtonum}`);
//string to num
const S_tr = ("10")
const strtonum = Number(S_tr)
console.log(`${typeof S_tr}:${S_tr}`);
console.log(`${typeof strtonum}:${strtonum}`);
const s_tr = ("text")
const strToNUM = Number(s_tr)
console.log(`${typeof s_tr}:${s_tr}`);
console.log(`${typeof strToNUM}:${strToNUM}`);
//bigint to num
const bigin_t = 10;
const biginttonum = Number(bigin_t)
console.log(`${typeof bigin_t}:${bigin_t}`);
console.log(`${typeof biginttonum}:${biginttonum}`);
//bool to num
const boo_l = true;
const booltonum = Number(boo_l)
console.log(`${typeof boo_l}:${boo_l}`);
console.log(`${typeof booltonum}:${booltonum}`);
//bool to bool
const bo_ol = true;
const booltobool = Boolean(bo_ol)
console.log(`${typeof bo_ol}:${bo_ol}`);
console.log(`${typeof booltobool}:${booltobool}`);
//num to bool
const b_ool = 0
const numtobool = Boolean(b_ool);
console.log(`${typeof b_ool}:${b_ool}`);
console.log(`${typeof numtobool}:${numtobool}`);
//undefined to bool 
const und = undefined
const undtobool = Boolean(und)
console.log(`${typeof und}:${und}`);
console.log(`${typeof undtobool}:${undtobool}`);
//null to bool
const n_ll = null
const nulltobool = Boolean(n_ll)
console.log(`${typeof n_ll}:${n_ll}`);
console.log(`${typeof nulltobool}:${nulltobool}`);
//string to bool
const s_t_r = "ahmed"
const strtobool = Boolean(s_t_r)
console.log(`${typeof s_t_r}:${s_t_r}`);
console.log(`${typeof strtobool}:${strtobool}`);
//empty to bool
const empty = ("")
const emptytobool = Boolean(empty)
console.log(`${typeof empty}:${empty}`);
console.log(`${typeof emptytobool}:${emptytobool}`);
//ato
const ato = ("22")+("1")
const ato_ = ("22")-("1")
console.log(`${typeof ato}:${ato}`);
console.log(`${typeof ato_}:${ato_}`);
//day4 in javascript
//scope
{
    let name = "ahmed"
    let age = 18
    console.log(name);
    console.log(age);
}
//objects
let objects0 = {
    name2:"ahmed",
    age:18
}
console.log(name2);
console.log(age);