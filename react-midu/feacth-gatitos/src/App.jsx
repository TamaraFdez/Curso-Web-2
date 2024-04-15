import './App.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';
import { Otro } from './Components/otro.jsx';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`;

// useEffect(() => {

//   // fetch(CAT_ENDPOINT_RANDOM_FACT)
//   //   .then((res) =>  res.json())
//   //   //Ejemplo tratamiento de error en fetch
//   //   // if(!res.ok) throw new Error("error feching fact")
//   //   //   return res.json()})
//   //   .then((data) => {
//   //     const { fact } = data;
//   //     setFact(fact);
//   //   });
// }, []);

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  //recuperar la imagen cada vez que tenemos una nueva cita

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1> App de gatitos </h1>
      <button onClick={handleClick}>New Fact</button>
      {/* renderizado condicional */}
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
      
      <Otro />
    </main>
  );
}

export default App;
