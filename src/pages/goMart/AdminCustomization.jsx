import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';

const Customization = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Customization</h1>
      <div className="section overview">
        <h3>Translate admin panel:</h3>
        <p>
          For translating your admin and vendor panel go to this file:
          <Mark className="mx-1">resources/lang/en/messages.php</Mark> and
          change all the value of each key (
          <Mark className="mx-1">'key'=&gt;':variable value'</Mark>). Please
          don't change any key or variable. A variable is word which starts with
          a ":", it can be placed after the value or inside a value like
          <Mark className="mx-1">
            'config\your\account'=&gt;'Config your :method account'
          </Mark>
          , here :method is a variable and{' '}
          <Mark className="mx-1">config\your\account</Mark> is a key. You can
          change the position of variable inside a value but you can't remove
          it.
        </p>

        <Info>
          Please note: ":" after a word is not a variable like:{' '}
          <Mark className="mx-1">
            '(Ex: Test Label)' =&gt; '(Ex: Test Label)’
          </Mark>{' '}
          here "Ex:" not a variable
        </Info>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/go_mart-mandatory-setup-2', {
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
              navigate('/doc-go-mart/go_mart-mandatory-setup-3', {
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
export default Customization;
