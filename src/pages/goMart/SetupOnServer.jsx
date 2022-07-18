import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import { BlockOfCode } from './MandatorySetup';

const SetupOnServer = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Build code and setup on server</h1>
      <div className="section overview">
        <p className="title-des">
          For building web data for deployment, you have to run command:
        </p>
        <BlockOfCode code={`flutter build web --web-renderer html --release`} />
        <p>
          Build file location:<Mark>&lt;project&gt;/build/web/</Mark>
        </p>

        <p>
          After running the command, Go to <Mark>/build/web/</Mark> and copy all
          files from this folder and upload it to your domain. There are some
          files are hidden, you have to take them them also like{' '}
          <Mark>(.htaccess)</Mark>.
        </p>
        <Info>
          You can not deploy admin and web at same domain. In that case you can
          use subdomain for one. Like you can deploy your admin at
          <Mark> https://admin.your_domain.com</Mark> and web at
          <Mark> https://your_domain.com</Mark>. And in app code you have to use
          base url as <Mark>https://admin.your_domain.com</Mark>.
        </Info>
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/fmQSQGoycB8" /> */}
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-mandatory-setup-4', {
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
              navigate('/doc-go-mart/goMart-admin-Panel-5', {
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
export default SetupOnServer;
