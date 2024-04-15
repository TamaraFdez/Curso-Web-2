import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';
import { Movies } from './Components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import debounce from 'just-debounce-it';

function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    //para saber si es la primera vez del input
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }
    if (search === '') {
      setError('No se puede buscar una película vacia');
      return;
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número');
      return;
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSumbit = (event) => {
    event.preventDefault();
    getMovies({ search });
    // const value = inputRef.current.value  <--
    //  //En react siempre qeu se hace una referencia se accede mediante "current"

    // const fields = new FormData(event.target)
    // const query = fields.get('query') <-- de esta manera no dependes tanto de react y es lo mismo que lo de abajo|| Forma no controlada.
    // const fields = Object.fromEntries(new window.FormData(event.target)
  };
  //
  const handleChange = (event) => {
    // const newQuery = event.target.value;
    // if (newQuery.startsWith(' ')) return; <--- para que si empieza con un espacio no le deje.
    const newSearch = event.target.value;
    updateSearch(event.target.value);
    debounceGetMovies(newSearch);
  };
  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de Películas</h1>
          <form className="form" onSubmit={handleSumbit}>
            <input
              onChange={handleChange}
              value={search}
              name="query"
              type="text"
              placeholder=" Avengers, Star wars, Matrix"
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent',
              }}
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error} </p>}
        </header>
        <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
      </div>
    </>
  );
}

export default App;
