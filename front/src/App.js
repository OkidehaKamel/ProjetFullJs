import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import CategoriesList from './components/CategoriesList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArticlesListByCat from './components/ArticlesListByCat';
import Home from './components/Home';
import EditArticleForm from './components/EditArticleForm';

function App() {
  const [elements, setElements] = useState([]);
  const [articles, setArticles] = useState([]);
  var url = window.location.href;
  var isCategoryPage = url.includes('category');
  var isArticlePage = url.includes('article/edit');
  var slug = '';
  var articleToEdit = '';
  var array = url.split("/");
  if (isCategoryPage == true) {
    slug = array.pop();
  } else if (isArticlePage == true) {
    articleToEdit = array.pop();
  }
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    var response = await fetch('http://localhost:5000/categories/');
    var data = await response.json();
    setElements(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    var response = await fetch('http://localhost:5000/articles/');
    var data = await response.json();
    setArticles(data);
  };


  return (
    <div className="App container">
      <Router>
        <header >
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav justify-content-center">
            <li className="nav-item"><a href="/home" className="nav-link">Accueil</a></li>
            <li className="nav-item" ><Link to="/categories-list" className="nav-link">Liste</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/categories-list" exact>
            <CategoriesList elements={elements} setElements={setElements} />
          </Route>
          {elements.map(category => (
            <Route path={"/category/" + category.slug} exact>
              <ArticlesListByCat elements={elements} category={category} />
            </Route>
          ))}

          {articles.map(article => (
            <Route path={"/article/edit/" + article._id} exact>
              <h2>Modifier Article</h2>
              <EditArticleForm article={article} />
            </Route>
          ))}


        </Switch>
      </Router>

    </div>
  );
}


export default App;
