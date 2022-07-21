import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import { BlockOfCode } from './MandatorySetup';

const FlutterSdk = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Flutter SDK</h1>
      <div className="section overview">
        <p>
          You have to download and setup flutter from flutter.dev. You can
          follow documentation with your own device.
        </p>
        <div className="links">
          <p>
            {' '}
            Windows:{' '}
            <a
              href="https://docs.flutter.dev/get-started/install/windows"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.flutter.dev/get-started/install/windows
            </a>
          </p>
          <p>
            {' '}
            Mac:{' '}
            <a
              href="https://docs.flutter.dev/get-started/install/windows"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.flutter.dev/get-started/install/windows
            </a>
          </p>
          <p>
            {' '}
            Linux:{' '}
            <a
              href="https://docs.flutter.dev/get-started/install/windows"
              target="_blank"
              rel="noreferrer noopener"
            >
              https://docs.flutter.dev/get-started/install/windows
            </a>
          </p>
        </div>
        <Info>
          <p className="mt-4">Recommended setup tutorial is below 👇</p>
        </Info>
        <Iframe src="https://www.youtube.com/embed/hfz_AraTk_k" />
        <div className="section">
          <p>Now run a command:</p>
          <BlockOfCode code={`flutter doctor`} />
          <p>
            Then check that every setup is okay. If not then check documentation
            again and set up flutter sdk properly.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-mobile-app-0', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-local-server-1', { replace: true });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default FlutterSdk;
