import Card from "react-bootstrap/Card";

const CardBox = (props) => {
  const { src, title, year} = props
  return (
      <Card>
        <Card.Img
          variant="top"
          src={src}
          width={150}
          height={300}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{year}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default CardBox;
