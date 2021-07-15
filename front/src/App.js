import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import CategoriesList from './components/CategoriesList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from './components/Category';

const Home = () => {
  return (
    <div>
      <h2>Accueil</h2>
    </div>
  )
}

function App() {
  // const [msg, setMsg] = useState('');
  const [elements, setElements] = useState([]);
  const [cat, setCat] = useState('');
  const handleClick = async () => {
    const data = await window.fetch('/categories');
    
    const jsonList = await data.json();
    setElements(jsonList);
    console.log(jsonList);
  }

  return (
    <div className="App container">
      <Router>
        <header >
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="nav justify-content-center">
            <li className="nav-item"><Link to="/home" className="nav-link">Accueil</Link></li>
            <li className="nav-item" onClick={handleClick}><Link to="/categories-list" className="nav-link">Liste</Link></li>
          </ul>
        </header>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/categories-list" exact>
            <CategoriesList elements={elements} setElements={setElements} />
          </Route>
          {   elements.map(category => (
                <Route path={"/category/"+category.slug} exact>
                  <Category />
                  <p>test{category.slug}</p>
              </Route>
            ))}
        </Switch>
      </Router>
      
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
