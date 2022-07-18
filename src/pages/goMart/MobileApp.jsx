import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import { mobileApp } from '../../data/unorderList/goMart/mobileApp';

const MobileApp = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Mobile App</h1>
      <div className="section overview">
        <UnorderedList lists={[{ id: 1, content: 'Android studio' }]} />

        <Info>
          You can download android studio from here:
          <a
            href="https://developer.android.com/studio?gclid=CjwKCAiAiKuOBhBQEiwAId_sK4X0PLQrES_2pG_S8nPflALgWSOCUEqRRAFpbS4AmR5mXmU6hIhvHxoCfBgQAvD_BwE&gclsrc=aw.ds"
            className="mt-3 text-break text-black text-decoration-underline text-decoration-color d-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developer.android.com/studio?gclid=CjwKCAiAiKuOBhBQEiwAId_sK4X0PLQrES_2pG_S8nPflALgWSOCUEqRRAFpbS4AmR5mXmU6hIhvHxoCfBgQAvD_BwE&gclsrc=aw.ds
          </a>
        </Info>
        <UnorderedList lists={mobileApp} />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-server-0', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-flutter-sdk-1', { replace: true });
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default MobileApp;
