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
console.log(v)

