import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies.js';

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);
  //guardar busqueda anterior (con useref no se cambia por renderizados)

  //useMemo para cualquier cosa, usecallbacks para funciones
  const getMovies = useCallback( async ({ search }) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        //finally= pase una cosa u otra va a pasar esto
        setLoading(false);
      }
    
  }, []);
  // const sortedMovies = sort
  //   ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //   : movies;
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]); //<--Guarda el valor en useMemo hasta que cambian las dependencias. UseMemo: evitar la computacion a no ser que cambien las dependencias.
  return { movies: sortedMovies, getMovies, loading };
}
