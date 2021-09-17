import React from 'react';
import './HeaderMovie.css';

class HeaderMovie extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    const realeasedYear = new Date(movie.release_date);
    let genres = [];
    movie.genres.forEach((genre) => genres.push(genre.name));
    return (
      <section className="header-movie" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
      }}>
        <div className="header-vertical">
          <div className="header-horizontal">
              <div className="header-name">{movie.title}</div>
              <div className="header-infos">
                <div className="header-rating">{movie.vote_average} pontos</div>
                <div className="header-year">{realeasedYear.getFullYear()}</div>
              </div>
                <div className="header-description">{movie.overview}</div>
                <div className="header-buttons">
                  <a href={`/watch/${movie.id}`} className="header-watch-button"> ▷ Assistir</a>
                  <a href={`/list/add/${movie.id}`} className="header-addlist-button">+ Minha Lista</a>
              </div>
              <div className="header-genres"> <strong>Gêneros: </strong>{genres.join(', ')}</div>


            </div>

        </div>
      </section>
    );
  }

}

export default HeaderMovie;