
import Header from './components/Header/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage';
import PokemonListPage from './Pages/PokemonList/PokemonListPage';

function App() {
  return (
    <div>
      <Header></Header>
      <PokemonCard></PokemonCard>
      <PokedexPage></PokedexPage>
      <PokemonDetailPage></PokemonDetailPage>
      <PokemonListPage></PokemonListPage>
    </div>
  );
}

export default App;
