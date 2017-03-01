setTimeout(cb1, 2000);

function cb1(){
    console.log('1111');
    setTimeout(cb2, 2000);
}

function cb2(){
  console.log('2222');;
}

console.log('test');
