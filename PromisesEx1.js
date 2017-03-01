var myPromise = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve('Success !');
  }, 1000);
});

myPromise.then(function(successMessage){
  console.log(successMessage);
  myPromise.then(function(successMessage){
    console.log('inner' + successMessage);
    myPromise.then(function(successMessage){
      console.log('innermost' + successMessage);
    });
  });
}).catch(function(failureMessage){
  console.log(failureMessage);
});
