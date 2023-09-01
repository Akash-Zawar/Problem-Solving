const runLoopInReverse = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
};

const runLoopInReverseUsingRecusrion = (num) => {
  const iterateNumer = (i) => {
    console.log(i);
    if (i !== 0) {
      i--;
      iterateNumer(i);
    }
  };

  iterateNumer(num);
};

runLoopInReverseUsingRecusrion(10);
