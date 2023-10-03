for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("base: ", { i });
  }, 0);
}

// First
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log("first: ", { i });
  }, 0);
}

// Second
for (var i = 0; i < 5; i++) {
  function run(i) {
    setTimeout(() => {
      console.log("second: ", { i });
    }, 0);
  }

  run(i);
}

// Second
for (var i = 0; i < 5; i++) {
  ((i) => {
    setTimeout(() => {
      console.log("third: ", { i });
    }, 0);
  })(i);
}

for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(() => {
    console.log("fourth: ", { j });
  }, 0);
}
