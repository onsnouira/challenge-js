
// // problem1
// // methode1:
function UppCase(){
    for(var i=0;i<arr.length;i++){
       arr[i]= arr[i].toUpperCase()
    }
    return arr
 }
 var arr=["ggfj","hgg","jhhl"]
 console.log(UppCase(arr))

// methode2:
const upper = arr.map(element => {
    return element.toUpperCase();
});

console.log(upper)  ;


// // problem2
var Array=["aya","ons","ferdaoues"]
var newarr=[]
function greaterThan5(){
  
    for(let i=0;i<Array.length;i++){
        if (Array[i].length>5) {
             newarr.push(Array[i])
        }
    }
    return newarr
}
console.log(greaterThan5())

// // problem3
var Array=["aya","ons","ferdaoues"]
function sum(){
    var sum=0
    for (let i = 0; i < Array.length; i++) {
        sum+= Array[i].length;
        
    }
    return sum
}
console.log(sum())

// problem4
var Array=["aya","ons","ferdaoues","fedi"]
var newarr=[]
function f(){
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].slice(0,1).toUpperCase()==="F"){
            newarr.push(Array[i])
        }  
    }
    return newarr
}
console.log(f())