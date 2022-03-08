import axios from "axios";
import { addDigimon } from "./actions";
import { toast } from "react-toastify";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      dispatch(addDigimon(response.data));
    })
    .catch((err) => {
      toast.error("Nome incorreto, tente novamente");
    });
};

export default addDigimonsThunk;
