import React from "react";
import './css/Product.css'; 


export const formation = {
  nom: "fullstack js ",
  prix: 540000,
  description: "vs aurez un stage apres la formation",
  image:'./images/PHOTO-2023-12-29-02-52-09.jpg',
};
console.log(formation);

const Product = () => {
 
  return (
    <>
      <div className="cars">
      <img  className="image"  src={require(`${formation.image}`)} alt="monImage" />
        <h2>{formation.nom}</h2>
        <h3>
        {formation.description}
        </h3>
        <p>{formation.prix}</p>
        </div>
     
    </>
  );
};
export default Product;
