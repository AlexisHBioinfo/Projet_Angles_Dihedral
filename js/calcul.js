/*
 *
 *
 * 04/11/2019
 * Alexis Hucteau
 */

const atom = (a,b,c) =>
{
  let coordonees= {x:a,y:b,z:c}
  return coordonees;
};

obj1 = atom(5,15,7);
obj2 = atom(8,12,9);
obj3 = atom(10,0,5);

console.log(obj1);
console.log(obj2);
console.log(obj3);

const distance = (coord1, coord2) =>
{
  let dist = Math.sqrt((coord1['x']-coord2['x'])**2+(coord1['y']-coord2['y'])**2+(coord1['z']-coord2['z'])**2);
  return dist;
}
