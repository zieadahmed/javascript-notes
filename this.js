////////////////////keyword this////////////////////
//1.1.This refers to global object.
function getproduct(){
    console.log("this =>,this")
}
getproduct()
//output 1.1: this refer = (windows).
//1.2.This refers to global object ("use strict";).
"use strict";
function getproduct(){
    console.log("this =>,this")
}
getproduct()
//output 1.2 : this refer = (undefined).
//2.This inside object.
title:"product1";
getproduct(){
    console.log("this =>,this");
product.getproduct()
//output 2 : this refer = title:"product1"getproduct:{}.
//3.this inside class.
class product{
    title:"product1";
    getproduct(){
        console.log("this =>,this");
    }
}
}
const product = new product();
product.getproduct()
//output 3 : this refer =product{title:'product 1'}.
//4.this issue iside method inside class.
class product{
    title:"product1";
    getproduct(){
        function displayprice(){
            console.log("this =>,this");
        }
        displayprice()
    }
}
const product = new product();
product.getproduct()
//output 4 : this refer = (undefined).
//5.this issue inside callback function (map)
class product{
    title:"product1";
    getproduct(){
        ["test1","test2","test3"].map(function(item){
            console.log("this =>,this");
        })
    }
}
const product = new product();
product.getproduct()
 // output 5 :  this refer = (undefined).
// (solution) first solution : this_.
class product{
    title:"product1";
    getproduct(){
        const this_=this;
        ["test1","test2","test3"].map(function(item){
            console.log("this =>,this_");
        })
    }
}
const product = new product();
//output first solution : this refer=product{title:'product 1'}.
//product{title:'product 1'}.
//product{title:'product 1'}.
// secound solutuon : arow function (=>)
class product{
    title:"product1";
    getproduct(){
        const this_=this;
        ["test1","test2","test3"].map((item)=>{
            console.log("this =>,this");
        })
    }
}
//output secound solution : this refer=product{title:'product 1'}.
//product{title:'product 1'}.
//product{title:'product 1'}.