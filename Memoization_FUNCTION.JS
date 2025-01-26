//Memoization.(coluser)
//Memoization is a smart way to make your functions faster by storing and reusing their past results. 
//In JavaScript, it's like using a memory system: if a function is asked the same question again, 
//it quickly retrieves the answer from its memory instead of recalculating it.
// This saves time and makes your code more efficient.
const MemoizationAdd = ()=>{
let cashed={};
return (value)=>{
if(value in cashed)
{
    console.log("HELLO in Cahced");
    return cashed(value)
}
else{
    console.log("HELLO IN CALCULATED");
    const results=value +27;
    cashed(value) =results;
  return results
} 
  } 
}
const add1=MemoizationAdd()(27)
console.log(add1(20)); 
//output(HELLO IN CALCULATED=47). 
console.log(add1(20));                      
//output(HELLO IN Cahced=47).