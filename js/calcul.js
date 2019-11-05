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

let obj1 = atom(5,15,7);
let obj2 = atom(8,12,9);
let obj3 = atom(10,0,5);
let obj4 = atom(-2,0,8);

const distance = (coord1, coord2={x:0,y:0,z:0}) => Math.sqrt((coord1['x']-coord2['x'])**2+(coord1['y']-coord2['y'])**2+(coord1['z']-coord2['z'])**2);

const produitvectoriel = (vect1, vect2) =>
{
  let vecteur =
    {
      x:vect1['y']*vect2['z']-vect1['z']*vect2['y'],
      y:vect1['z']*vect2['x']-vect1['x']*vect2['z'],
      z:vect1['x']*vect2['y']-vect1['y']*vect2['x']
    };
    return vecteur;
};

const produitscalaire = (vect1, vect2) =>
{
  return (vect1['x']*vect2['x']+vect1['y']*vect2['y']+vect1['z']*vect2['z']);
};

const norme = (vecteur) =>
{
  return distance(vecteur);
};

const angles_dihedre = (coor1, coor2, coor3, coor4) =>
{
  let vecteur12={x:coor1['x']-coor2['x'],y:coor1['y']-coor2['y'],z:coor1['z']-coor2['z']};
  let vecteur23={x:coor2['x']-coor3['x'],y:coor2['y']-coor3['y'],z:coor2['z']-coor3['z']};
  let vecteur34={x:coor3['x']-coor4['x'],y:coor3['y']-coor4['y'],z:coor3['z']-coor4['z']};

  let vecteur_normal1=produitvectoriel(vecteur12,vecteur23);
  let vecteur_normal2=produitvectoriel(vecteur23,vecteur34);

  if (produitscalaire(vecteur23,produitvectoriel(vecteur_normal1,vecteur_normal2))<0)
    {
        return (Math.acos(produitscalaire(vecteur_normal1,vecteur_normal2)/(norme(vecteur_normal1)*norme(vecteur_normal2)))*180/Math.pi);
    }
    else
    {
      return (-Math.acos(produitscalaire(vecteur_normal1,vecteur_normal2)/(norme(vecteur_normal1)*norme(vecteur_normal2)))*180/Math.PI);
    }
};

console.log(angles_dihedre(obj1,obj2,obj3,obj4));
