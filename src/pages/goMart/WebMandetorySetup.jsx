import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import { BlockOfCode } from './MandatorySetup';
import {
  appSetupOne,
  appSetupOneTwo,
} from '../../data/unorderList/goMart/webAppMandetory';

const WebMandetorySetup = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Mandatory setup</h1>
      <Info danger={true}>
        You must have to complete all the setups of the user app before starting
        the web app setup because both these systems belong to the same
        codebase.
      </Info>
      <div className="section overview">
        <h3 className="title-des">Web App Setup</h3>
        <p>For debug build you can run command:</p>
        <UnorderedList lists={appSetupOne} />
        <BlockOfCode
          link="/web/index.html"
          code={`<title>APP_NAME_HERE</title>`}
        />
        <UnorderedList lists={appSetupOneTwo} />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-app-build-release-3', {
                replace: true,
              });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-build-code-and-setup-on-server-4', {
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
export default WebMandetorySetup;
