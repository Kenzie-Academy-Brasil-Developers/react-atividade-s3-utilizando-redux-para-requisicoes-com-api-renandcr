import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import { ContainerSearch } from "./styled";

const Search = () => {
  const [input, setInput] = useState("");
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = () => {
    // setError(false);
    dispatch(addDigimonsThunk(input));
    // setInput("")
  };

  return (
    <ContainerSearch>
      <h2>Procure pelo seu Digimon</h2>
      <div>
        <input
          placeholder="Procure seu Digimon"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
    </ContainerSearch>
  );
};

export default Search;
