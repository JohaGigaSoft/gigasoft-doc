import Card from 'react-bootstrap/Card';

const HomeCard = ({ image, title, content }) => {
  return (
    <Card>
      <div className="img-card">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title className="text-capitalize">{title}</Card.Title>
        <Card.Text className="text-center px-2">{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default HomeCard;
