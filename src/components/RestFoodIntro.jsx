import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import Next from './svgs/Next';
import UnorderedList from './UnorderedList';

const RestFoodIntro = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Introduction</h1>
      <div className="overview section">
        <h3>Overview</h3>
        <p className="title-des">
          Thank you you interest in <span className="giga-food">Giga food</span>
        </p>
        <p className="overview-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A a varius
          amet, quisque leo massa vitae. Tincidunt volutpat quis dignissim quis
          mauris sed at. Vulputate hendrerit sit consequat egestas ut tellus
          massa viverra. Feugiat fermentum arcu libero enim a hac feugiat.
          Placerat ac nunc ut porttitor enim. Non orci malesuada consecte
        </p>
        <p className="list">
          stackfood comprise of 3 mobile applications, 2 web panel, 1 website
          and 1 landing page
        </p>
        <UnorderedList numbers={7} />
      </div>
      <Info />
      <div className="happy-flow section">
        <h3>The happy flow</h3>
        <p className="happy-flow-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          vitae eu dui tellus et, quisque. Vitae eget id egestas tellus porta ut
          tincidunt pretium in. Neque orci, donec luctus lorem. Placerat nibh
          sapien dictum et cursus semper sed velit, elit. Turpis sit pharetra
          malesuada eget egestas. Aliquam faucibus ligula iaculis lorem id et et
          pharetra. Nunc donec proin mattis justo, at varius nibh arcu,
          curabitur. Tortor mauris blandit tincidunt arcu in in ornare sit vel.
          Ultricies augue sollicitudin amet mi. Bibendum aliquet amet morbi
          adipiscing libero lobortis.
        </p>
        <h3>Order flow</h3>
        <UnorderedList numbers={7} />
        <h3>Dispatch now</h3>
        <UnorderedList numbers={2} />
      </div>
      <div className="transaction-flow section">
        <h3>Transaction Flow</h3>
        <p className="title-des">
          Stackfood comprise of 3 mobile applications, 2 web panel, 1 website
          and 1 landing page
        </p>
        <UnorderedList numbers={4} />
      </div>
      <Info />
      <div className="section">
        <h3>Admin commission</h3>
        <UnorderedList numbers={3} />
      </div>
      <div className="section">
        <h3>Restaurant earning</h3>
        <UnorderedList numbers={2} />
      </div>
      <div className="section">
        <h3>Delivery boy Earning</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A a varius
          amet, quisque leo massa vitae. Tincidunt volutpat quis dignissim quis
          mauris sed at. Vulputate hendrerit{' '}
        </p>
        <UnorderedList numbers={3} />
      </div>
      <div className="section">
        <h3>Cash flow</h3>
        <UnorderedList numbers={3} />
      </div>
      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('install-on-server');
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default RestFoodIntro;
