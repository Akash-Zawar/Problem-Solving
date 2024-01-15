Array.prototype.groupBy = function (fn) {
  if (typeof fn !== "function") {
    return false;
  }
  let group = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (!group.hasOwnProperty(key)) {
      group[key] = [this[i]];
    } else {
      group[key].push(this[i]);
    }
  }
  return group;
};
