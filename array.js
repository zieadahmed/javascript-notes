//code to get array of names from a given products array.
// array product ..on_sale.
// sort.
const products =[
{
id:1,
name:"Laptop",
price:52000,
on_sale:true,
},
{
    id:2,
    name:"tv",
    price:45000,
    on_sale:false,
    },
    {
        id:3,
        name:"mobile",
        price:60000,
        on_sale:true,
        },
       {
        id:4,
        name:"washing machine",
        price:40000,
        on_sale:false, 
       },
]
    
//1.for loop.
const names =[];
for(let i=0;i<products.length;i++){
    names.push(products[i].name)
}
console.log("names=>",names);
//2.use for each method.
const names =[]
products.forEach(product =>{
    names.push(products.name)
})
console.log("names=>",names);
//3.Map method.
const names =products.map(product=>product.name)
console.log("names=>",names);
//4.for loop (array product on_sale).
const names =[];
for(let i=0;i<products.length;i++){
    if(products[i].on_sale){
        names.push(products[i].name)
    }
}
console.log("names=>",names);
//4.filter method.
const names =products.filter(product=>product.on_sale)
console.log("names=>",names);
//5.sort methoud.
const names =products.sort((product1,product2)=>product1.price<product2.price?-1:1)
console.log("names=>",names);














