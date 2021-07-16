import React, { useState } from 'react';
import CategoryForm from './CategoryForm';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function CategoriesList({ elements, setElements }) {
  const [catUrl, setCatUrl] = useState("");
  // const getPage=(slug)=>{
  //     // e.preventDefault();
  //     // setCatUrl(e.target.to)
  //     // console.log(slug)
  //     // if(slug!=''){
  //     //     window.location("/"+slug);
  //     // }

  // }

  return (
    <div>
      <h2 className="mb-5" >Liste des catégories :</h2>
      <div className="d-flex flex-wrap bg-light rounded p-5">

        {(elements.length > 0) ?

          elements.map(category => (
            <a href={"/category/" + category.slug} className="linkCat"   >
              <figure className="cat" key={category.id}  >
                <img src={category.image} alt={category.name} />
                <figcaption>
                  {category.name}
                </figcaption>
              </figure>
            </a>
          ))
          : <p>Il n'y a pas encore de catégories</p>
        }

      </div>

      <h4 className="mb-5">Ajouter une catégorie</h4>
      <CategoryForm elements={elements} setElements={setElements} />
    </div>

  );
}

export default CategoriesList;