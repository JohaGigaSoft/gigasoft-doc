import { Col, Row } from 'react-bootstrap';

const Iframe = ({ src }) => {
  return (
    <Row
      className="d-flex justify-content-center align-items-center my-3"
      style={{ height: '35vh', marginBottom: '15px' }}
    >
      <Col md={10} lg={8} style={{ height: '100%' }}>
        <iframe
          src={src}
          title="A youtube video link"
          style={{ height: '100%', width: '100%' }}
        ></iframe>
      </Col>
    </Row>
  );
};
export default Iframe;
