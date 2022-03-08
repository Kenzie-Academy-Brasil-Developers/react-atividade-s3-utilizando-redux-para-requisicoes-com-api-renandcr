import Container from "./styled";

const Card = ({ data }) => {
  const { name, level, img } = data;
  return (
    <Container>
      <img src={img} alt={name}></img>
      <h1>
        <span>Name:</span> {name}
      </h1>
      <h2>
        <span>Level:</span> {level}
      </h2>
    </Container>
  );
};

export default Card;
