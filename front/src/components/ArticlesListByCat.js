import React, { useEffect, useState } from 'react';
import ArticleForm from './ArticleForm';
import Article from './Article';

function ArticlesListByCat({ elements, category }) {

 const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    var response = await fetch('/articles/' + category._id);
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
        {(articles.length > 0) ?
          articles.map(article => (
            <Article article={article} />
          ))
          : <p>Il n'y a pas encore d'article dans cette catégorie</p>
        }

        <h4>Ajouter un article</h4>
        <ArticleForm category={category} articles={articles} setArticles={setArticles} />
      </div>
    </div>
  )
};


export default ArticlesListByCat;
