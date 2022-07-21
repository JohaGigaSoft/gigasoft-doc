import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Atag from '../../components/Atag';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import { BlockOfCode } from './MandatorySetup';

const AppBuildRelease = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>App build & release</h1>
      <div className="section overview">
        <h3 className="title-des">Build for Android</h3>
        <p>For debug build you can run command:</p>
        <BlockOfCode code={`<title>APP_NAME_HERE</title>`} />
        <p>
          You will get a larger merged apk with this. But you can split them
          with this command:
        </p>
        <BlockOfCode
          code={`flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi`}
        />
        <p className="info">
          Build file location:{' '}
          <Mark>&lt;project&gt;/build/app/outputs/flutter-apk/</Mark>
          For deploying it please follow this documentation:
          <Atag href="https://docs.flutter.dev/deployment/android" />
        </p>
        
      </div>

      <div className="section">
        <h3 className="title-des">Build for iOS</h3>
        <p className="info">
          There are no general way to generate app for iOS. Apple doesn’t allow
          to install app like this debug way. If you want to install it on your
          iOS device then you have to deploy it on TestFlight or AppStore. For
          deploying it please follow this documentation:
          <Atag href="https://docs.flutter.dev/deployment/ios" />
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-customization-3', {
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
              navigate('/doc-go-mart/go_mart-mandatory-setup-4', {
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
export default AppBuildRelease;
