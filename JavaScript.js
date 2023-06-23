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


// template literals 
// template literals use backtics instead of double quote or single quote in string
//  what is backtics ?? 
// ` ` this is called backticks 
// syntyx  for backtics in string ${string variable}
// string interpolation ${variable name}
let girl1 = 'Mira Morati';
let girl2 = 'Kamla Haris';
let sentence =`${girl1} is a Co-member of ${girl2}`;
console.log(sentence);

// Escap sequence characters

let fruit='ora\'nge';
console.log(fruit);
let fruits='app\"le';
console.log(fruits);

let mk='Engi\nneer'
console.log(mk);
let mk2='English\rbook'
console.log(mk2)




// string methods 
let boy ='Mukesh';
console.log(boy.length);
// .length is properties not a method 
console.log(boy.slice(2));
console.log(boy.slice(1,4)); //it will skip 4 index and upto but not skip 1 index
console.log(boy.replace('Muk','rake'));
console.log(boy.toLocaleLowerCase())
console.log(boy.toUpperCase())
let boy1='   kumar  ';
console.log(boy1)
console.log(boy1.trim());
console.log(boy.concat(' kumar', ' utmani'));
console.log(boy.indexOf('h'));



// problems solving 
// Ques No1
let str ='mukes\"';
console.log(str.length);

/*Ques No2
  Include string function |use template literal| */
let sentence ='I have hp company laptop';
let word ='hp';
console.log(`The word ${word} ${sentence.includes(word)? 'is':'is not'} 'include in this senctence'`)

let sentence2='Is ocean gate ship  will be find in future';
let find='ocean'
let find2='ship';
console.log(sentence2.includes(find2))
console.log(`The words ${find} 'and' ${find2} ${sentence2.includes(find)?'is':'is not'} 'include in this sentences'`);

//  using starts with and ends with function in string 
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// Expected output: true
console.log(str1.startsWith('Sat', 0));
// Expected output: false
console.log(str1.endsWith('ans',20));

// problem #3
let str3='KUNAL VASHODEV';
console.log(str3.toLowerCase());


// problem no #4
// remove the string and print a number by using slice string function
let str4='please gives me 2000';
let amount=str4.slice(16);
console.log(amount);
console.log(typeof amount)

let str5='please gives me 2000';
let amount1= Number.parseInt(str4.slice(16));
console.log(amount1);
console.log(typeof amount1)


// problem no#5
let friend ='Katrina kaif';
friend[6]='y';
console.log(friend);   // we cant change exiting string that we declare beacuse its immuetable 


// array is muteable beacuse it can be changed 
let arr=[91,83,67,56,99];
console.log(arr);
console.log("The kength of array is:"+arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
arr[5]=98;
arr[6]=0;
arr[7]='null';
arr[8]='mukesh'
console.log(arr[5]);
console.log(arr)

// by using looop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// for(let a in arr[6]){
//     console.log(a)
// }





// lecture no 17
//  convert object type array into string
let arr=[33,5, 6,7,90];
let b=arr.toString();
console.log(arr, typeof arr);
console.log(b , typeof b);
let c=console.log( arr.join('___'));
// console.log(c)
let pop =console.log(arr, arr.pop());

let push =arr.push(78,98);
console.log(arr,push);

// shift method remove value first index of array
let shift= arr.shift();
console.log(arr , shift);

// unshift method add value first index of array
let unshift= arr.unshift(900)
console.log(arr)


// concatenation in array
let a1=[3,4,5]
let a2=[56,78]
let a3=[100,200,300]
console.log(a1.concat(a2,a3))




// by using delete operator
let num=[1,2,34,5,56,7,8,9];
delete num[3];
console.log(num.length, num);

// sort method 
let arr=[34,5,6,23,87,900,45,789];
// this method sort out the arrays elements with string
arr.sort();
console.log(arr)


let compare=(a,b)=>{
    // b-a for decending
    // a-b for assending
    return b-a
}
let arr1=[34,5,6,23,87,900,45,789];

// this method sort out the arrays elements with string
arr.sort(compare);
console.log(arr)
console.log(arr1.reverse());


// splice method is very important

let arr2=[34,5,6,23,87,900,4,789];
console.log(arr2.splice(3,4,456,78,877,90))
console.log(arr2)


let arr3=[34,5,6,23,87,900,4,789];
let num5=arr3.slice(2,5);
console.log(num5)
 console.log(arr3.slice(2,7))


