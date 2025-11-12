function sum(){
const number=[1,2,3,4,5,6,7,8,9];
 const newnumber=number.filter((num)=>(num>5))
 const newnumber1=number.filter((num)=>(num%2==0))
 const number1=number.map((num)=>(num*5));
 const sum=number.reduce((num,count)=>num+count,11)
 console.log(sum);
}