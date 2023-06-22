// operators in js
// arthimatic operators
let a=10;
let b=3;

console.log("a+b:",a+b);
console.log("a-b:",a-b);
console.log("a/b:",a/b);
console.log("a*b:",a*b);
console.log("a power b:",a**b);
console.log("a%b:",a%b);
console.log("++a:",++a);  11
console.log("a++:",a++);  11
console.log("a--:",a--);  12
console.log("--a:",--a);  10
console.log("a",a); 
console.log("a--",a--);
console.log("a",a);

// assigment operators
let d=7;
console.log(d);
d+=7;
console.log(d);

// comparision opertors 
let var1=5;
let var2='5';
console.log(var1!=var2);
console.log(var1===var2);
console.log(var1!==var2);

// ternory operators 
// logical operators

let x=8;
let y=10;
console.log(x<y && x==8);
console.log(x>y || x==8);
console.log(!true);
console.log(!false);


// function in java script 
function kumar(x,y){
    return Math.round((x+y)/3);  
}
let a =4;
let b=8;
let c=9;

console.log("The value is",kumar(a,b));
console.log("The value is",kumar(a,c));
console.log("The value is",kumar(b,c));

// arrow functionn
const sum=(p,q)=>{
    return p+q;
}
console.log(sum(2,5));

function empty(){
    console.log("hii this is mukesh ullo");
    return 'studentii';
}
let v=empty();
console.log(v);



// loops and functions
// using for loops
let marks={
    suneeta: 30,
    aneeeta: 40,
    subham:  20,
    kaninaat:40,
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of",Object.keys(marks)[i],"is: ",marks[Object.keys(marks)[i]]);
}




// for in looops simple program
let marks={
    suneeta: 30,
    aneeeta: 40,
    subham:  20,
    kaninaat:40,
}
for(let key in marks){
    console.log(key,":", marks[key]);
}



// mean of a 5 numbers
const mean=(a,b,c,d,e)=>{
    return Math.round((a+b+c+d+e)/5);
}
console.log("The mean of five numbers is:",mean(4,5,6,7,9));
