import React, { useEffect, useState } from 'react';
import ArticleForm from './ArticleForm';

// function getArticlesByCat(){
//       fetch('http://localhost:5000/articles/')
//       .then(response => response.json())
//       .then(console.log(response.json()));
// }

function ArticlesListByCat({ elements, category }) {

  // const [cat, setCat] = useState([]);

  // var url = window.location.href
  // var array = url.split("/");
  // var slug = array.pop()

  // useEffect(() => {
  //   getCategory();
  // }, []);

  // const getCategory = async () => {
  //   var response = await fetch('http://localhost:5000/categories/');
  //   var data = await response.json();
  //   data.forEach(element => {
  //     if (element.slug == slug) {
  //       setCat(element);
  //     }
  //   });
  // };
console.log(category)
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    var response = await fetch('/articles/'+category._id);
    var data = await response.json();
    data = data.reverse();
    setArticles(data)
  };

  return (
    <div>
      <h2>{category.name}</h2>
      <figure key={category.id}  >
        <img className="catImage" src={category.image} alt={category.name} />
      </figure>
      <div>
        {(elements.length > 0) ?
          articles.map(article => (
            <p>{article.title}</p>
          ))
          : <p>Il n'y a pas encore d'article dans cette catégorie</p>
        }

        <h4>Ajouter un article</h4>
        <ArticleForm category={category} articles={articles} setArticles={setArticles} />

      </div>


    </div>

  )
};

// class ArticlesListByCat extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://localhost:5000/articles/';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h2>my Component has Mounted, Check the browser 'console' </h2>;
//   }
// }

export default ArticlesListByCat;
