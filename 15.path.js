/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  let p = object;
  path = path.split(".");
  for (let i = 0; i < path.length; i++) {
    if (typeof p === "object") {
      p = p[path[i]];
    } else {
      return undefined;
    }
  }
  return p;
};

/**
 * split the path string into an array
 * run a loop on path
 * if typeof p is object then find value of p.key
 * else return undefined
 * p = p[path[i]]
 * else we should return undefined
 */

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
