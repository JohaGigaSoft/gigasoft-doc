import { Col, Row } from 'react-bootstrap';

const ImageCard = ({ src }) => {
  return (
    <Row className="d-flex justify-content-center align-items-center my-3">
      <Col sm={9}>
        <img src={src} alt="" className="w-100" />
      </Col>
    </Row>
  );
};
export default ImageCard;
