import React, {useState} from 'react';
import './MovieArea.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


export default ({ title, movies }) => {
    
    const [ scrollX, setScrollX ] = useState(0);

    const handleWithLeftArrowClick = () => {
      let x = scrollX + Math.round(window.innerWidth / 2);
      if (x > 0) {
        x = 0;
      }
      setScrollX(x);
    }
    const handleWithRightArrowClick = () => {
      let x = scrollX - Math.round(window.innerWidth / 2);
      let listWidh = movies.results.length * 150;
      if ((window.innerWidth - listWidh) > x) {
        x = window.innerWidth - listWidh - 60;
      }
      setScrollX(x);
    }
    return (
      <section className="movieArea">
        <h2>{title}</h2>
        <div className="movieArea-left" onClick={handleWithLeftArrowClick}>
          <NavigateBeforeIcon style={{fontSize: 50}} />
          </div>
        <div className="movieArea-right" onClick={handleWithRightArrowClick}>
          <NavigateNextIcon style={{fontSize: 50}} />
        </div>    

        <div className="movieArea-listarea">
          <div className="movieArea-list" style={{
            marginLeft: scrollX,
            width: movies.results.length * 150
          }}>
            {movies.results.length > 0 && movies.results.map((movie, key) => (
              <div className="item" key={key}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title}  />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};
