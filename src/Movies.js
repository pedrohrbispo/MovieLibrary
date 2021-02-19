const apiKey = 'api_key=4d29239b186e1ac79aefc3af4efe599a';
const endpointBase = 'https://api.themoviedb.org/3';
/*
Recomendados - trending
Em alta - toprated
Séries mais vistas
Ação
Ficção cientifica
Romance
Fantasia
Aventura
*/

const fetchBase = async (endpoint) => {
  const req = await fetch(`${endpointBase}${endpoint}`);
  const json = await req.json();
  // console.log(json);
  return json;
  
}

export default {
  getListFilms: async () => {
    return [
      {
        name: 'trending',
        title: 'Mais Populares',
        items: await fetchBase(`/trending/all/week?language=pt-BR&${apiKey}`)
      },
      {
        name: 'toprated',
        title: 'Filmes mais vistos pela galera',
        items: await fetchBase(`/movie/top_rated?language=pt-BR&${apiKey}`)
      },
      {
        name: 'toprated-series',
        title: 'Series mais vistas',
        items: await fetchBase(`/tv/top_rated?language=pt-BR&${apiKey}`)
      },
      {
        name: 'action',
        title: 'Ação',
        items: await fetchBase(`/discover/movie?language=pt-BR&${apiKey}&with_genres=28`)
      },
      {
        name: 'science=fiction',
        title: 'Fição Científica',
        items: await fetchBase(`/discover/movie?language=pt-BR&${apiKey}&with_genres=878`)
      },
      {
        name: 'romance',
        title: 'Romance',
        items: await fetchBase(`/discover/movie?language=pt-BR&${apiKey}&with_genres=10749`)
      },
      {
        name: 'horror',
        title: 'Terror',
        items: await fetchBase(`/discover/movie?language=pt-BR&${apiKey}&with_genres=27`)
      },
    ];
  }, 
  getMovieInfos: async (movieId, type) => {
    let infos = {};

    if (movieId) {
      switch(type) {
        case 'movie':
          infos = await fetchBase(`/movie/${movieId}?language=pt-BR&${apiKey}`);
        break;
        case 'tv':
          infos = await fetchBase(`/tv/${movieId}?language=pt-BR&${apiKey}`);
        break
      }
    }
  return infos;
  }
}