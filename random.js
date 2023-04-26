// function generateRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
//   }  
//   //self-executing async arrow function.
//   (() => {
//     const num = generateRandom(1, 10);
//     console.log(num)
//   })();

  //----------------------------------------------
  // Function which resolves promise with a random number
function generateRandom(min, max) {
    return new Promise(resolve => {
      // using a timeout to make it wait for it by 1000ms
      setTimeout(() => {
        resolve(Math.ceil(Math.random() * (max - min) + min)); // resolving promise
      }, 1000);
    });
  }  
  //self-executing function
  ( async () => {
    const first = await generateRandom(1, 10);
    console.log(first);
  })();
  console.log('last stmnt')