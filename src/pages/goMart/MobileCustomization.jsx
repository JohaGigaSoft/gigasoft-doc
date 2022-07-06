import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import { countryFilterOne, countryFilterTwo } from '../../data/unorderList/goMart/mobileApp';

const MobileCustomization = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Customization</h1>
      <div className="section overview">
        <h3 className="title-des">Country Filter</h3>
        <UnorderedList lists={countryFilterOne} />

        <Info danger={true}>Recommended setup tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/xQ1WnEFDBtQ" />
        <UnorderedList lists={countryFilterTwo} />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-flutter-sdk-1', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-install-on-server-2', {
                replace: true,
              });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default MobileCustomization;
