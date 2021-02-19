import React, { useEffect, useState } from 'react';
import data from './data';
import Movies from './Movies';
import './App.css';
import MoviesArea from './components/MoviesArea';
import HeaderMovie from './components/HeaderMovie';
import Footer from './components/Footer';

function App() {
  const [moviesList, setMovieList] = useState([]);
  const [headerData, setHeaderData] = useState(null);
  useEffect(() => {
    const loadItems = async() => {
      let listFilms = await Movies.getListFilms();
      setMovieList(listFilms);
      // Pegar o HeaderFilme
      const popularMovies = listFilms.find(movie => movie.name === 'action');
      let randomFilmeNumber = Math.floor(Math.random() * popularMovies.items.results.length - 1);
      let chosenMovie = popularMovies.items.results[randomFilmeNumber];
      let chosenMovieInfos = await Movies.getMovieInfos(chosenMovie.id, 'movie');
      setHeaderData(chosenMovieInfos);
    };


    loadItems();
  }, []);
  return (
    <main className="page">

      {headerData && <HeaderMovie movie={headerData} />}

      <section className="lists">
          {moviesList.map((item, key) => <MoviesArea title={item.title} key={key} movies={item.items} />)}
      </section>
      
      <Footer />
    </main>
  );
}

export default App;