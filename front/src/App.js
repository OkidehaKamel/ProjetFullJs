import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';
import CategoriesList from './components/CategoriesList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArticlesListByCat from './components/ArticlesListByCat';
import Home from './components/Home';



function App() {
  // const [msg, setMsg] = useState('');
  const [elements, setElements] = useState([]);
  // const [cat, setCat] = useState('');

  // const handleClick = async () => {
  //   const data = await window.fetch('/categories')
  //   const jsonList = await data.json();
  //   setElements(jsonList);
  // }
  var url = window.location.href;
  var isCategoryPage = url.includes('category');
  var slug = '';
  if (isCategoryPage==true) {
    var array = url.split("/");
    slug = array.pop()
    console.log(slug)
  }
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    var response = await fetch('http://localhost:5000/categories/');
    var data = await response.json();
    setElements(data);
  };


  return (
    <div className="App container">
      <Router>
        <header >
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav justify-content-center">
            <li className="nav-item"><a href="/" className="nav-link">Accueil</a></li>
            <li className="nav-item" ><Link to="/categories-list" className="nav-link">Liste</Link></li>
          </ul>
        </header>
        <Switch>
          {/* <Route path="/home" exact>
            <Home/>
          </Route> */}
          <Route path="/categories-list" exact>
            <CategoriesList elements={elements} setElements={setElements} />
          </Route>
          {elements.map(category => (
            <Route path={"/category/" + category.slug} exact>
            <ArticlesListByCat elements={elements} category={category}/>
            </Route>
          ))}
        </Switch>
      </Router>
      {/* {(slug!="")? <ArticlesListByCat elements={elements} />  : ''} */}

    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = { categories: [] };
//   }

//   componentDidMount() {
//     fetch('http://localhost:5000/categories/')
//     // fetch('https://reqres.in/api/users')
//       .then(response => response.json())
//       .then(json => this.setState({ categories: json.data }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Categories</h1>
//         {
//           this.state.categories.length == 0
//             ? 'Loading users...'
//             : this.state.categories.map(category => (
//               // <figure key={category.id}>
//               //   <img src={category.avatar} />
//               //   <figcaption>
//               //     {user.first_name} {user.last_name}
//               //   </figcaption>
//               // </figure>
//               <p>{category.name}</p>
//             ))
//         }
//       </div>
//     );
//   }
// }

export default App;
