//const username="anaskhan1126"
const url="https://dummyjson.com/users";
const pr=fetch(url);
pr.then(function(res){
    return res.json();
})
.then((data)=>{
    console.log("Data:",data);
})
.catch((err)=>{
    console.log("Error=",err)
})
.finally(()=>{
    console.log("inside finally")
})
