import { Container } from 'react-bootstrap';
import Info from './Info';
import UnorderedList from './UnorderedList';

const Introduction = ({ title }) => {
  return (
    <Container className="introduction">
      <h1>Introduction {title}</h1>
      <div className="overview section">
        <h3>Overview</h3>

        <p className="overview-des">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A a varius
          amet, quisque leo massa vitae. Tincidunt volutpat quis dignissim quis
          mauris sed at. Vulputate hendrerit sit consequat egestas ut tellus
          massa viverra. Feugiat fermentum arcu libero enim a hac feugiat.
          Placerat ac nunc ut porttitor enim. Non orci malesuada consecte
        </p>
      </div>
      <Info />
      <div className="section">
        <h3>Cash flow</h3>
        <UnorderedList numbers={3} />
      </div>
    </Container>
  );
};
export default Introduction;
