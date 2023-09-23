const customUseEffect = {
  data: 20,
  setData: function (e) {
    this.data = e;
  },
};

customUseEffect.setData(5);

console.log(customUseEffect.data);
