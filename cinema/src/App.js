import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MovieCard from './components/MovieCard';

import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch("https://api.example.com/items")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.items
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

  render() {
    return (
      <div>
        <header id="header">
          
        </header>
        <MovieCard />
      </div>
    );
  }
}

export default App;
