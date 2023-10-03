let p = { name: "Joe Brown", goals: 0, assists: 0, points: 0 };

let k = {};
k[p.name] = p;
delete k[p.name].name;
console.log(k);
