import { useSelector } from "react-redux";
import Card from "../Card";

const DigimonList = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <ul>
      {digimons.length > 0 &&
        digimons.map((current, index) => <Card key={index} data={current} />)}
    </ul>
  );
};

export default DigimonList;
