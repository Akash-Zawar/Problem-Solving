const customUseEffect = {
  data: 20,
  setData: function (e) {
    this.data = e;
  },
};

const [data = 25, setData] = customUseEffect;

setData(5);

console.log(newData);
