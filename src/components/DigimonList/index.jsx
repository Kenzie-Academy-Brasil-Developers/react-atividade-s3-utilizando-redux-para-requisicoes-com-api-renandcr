import { useSelector } from "react-redux";
import Card from "../Card";

const DigimonList = () => {
  const { digimons } = useSelector((state) => state);
  console.log(digimons);
  console.log(digimons.length);
  console.log(digimons.length);
  // console.log(digimons.digimon.length);

  return (
    <div>
      <ul>
        {digimons.length > 0 &&
          digimons.map((current, index) => <Card key={index} data={current} />)}
      </ul>
    </div>
  );
};

export default DigimonList;
