//create counter function which has increment and get value .
//Closures in JS
//A closure is the combination of a function bundled together (enclosed) 
//with references to its surrounding state (the lexical environment).
const privateCounter=()=>{
    let count = 0;
    return{
        increment:(value=1)=>{
            count+=value
        },
        getValue:() =>{
            return count;
        }
    }
}
const counter= privateCounter();
console.log(counter.getValue());
counter.increment();

/////Example/////

const PrivateNumber =()=>{
    const SecretNumber=27;
    return() => SecretNumber;
}
const number =PrivateNumber();
console.log(number());