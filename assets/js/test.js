// setTimeout( () => {
//     console.log('cc RT3');
// },2000);
i = 5;
x = setInterval(() => {
   console.log(i--);
   if (i==0) clearInterval(x);
},1000);


console.log('je viens apres le timeout');
console.log('je viens apres le je viens après');
