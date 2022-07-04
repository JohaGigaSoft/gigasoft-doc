import { Container } from 'react-bootstrap';
import CircleSvg from './svgs/Circle';
import RectangleSvg from './svgs/Rectangle';
import { useNavigate } from 'react-router-dom';

// images
import logo from '../assets/images/rest-food-white.png';
import youtube from '../assets/images/youtube.png';
import portfolio from '../assets/images/portfolio.png';
import faq from '../assets/images/faq.png';
import HomeCard from './HomeCard';

const cardData = [
  {
    id: 1,
    image: youtube,
    title: 'check on youTube',
    content:
      'Check our youTube videos for easy installation, setup and get website, apps up and running quickly.',
  },
  {
    id: 2,
    image: portfolio,
    title: 'explore our portfolio',
    content:
      'We are exclusive seller in codecanyon,explore our products and purchase.',
  },
  {
    id: 3,
    image: faq,
    title: 'frequently asked questions (FAQ)',
    content:
      'If you have any question related to our system or you are facing any problem before opening a ticket please check our fAQ section',
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-div">
      <div className="icon-div d-flex flex-column align-items-center position-relative">
        <CircleSvg className="circle big" />
        <CircleSvg className="circle small" />
        <RectangleSvg className="rectangle one" />
        <RectangleSvg className="rectangle two" />
        <RectangleSvg className="rectangle three" />
        <img src={logo} alt="Rest Food" />
        <button onClick={() => navigate('/doc-rest-food')}>
          Start with documentation
        </button>
      </div>
      <Container className="card-box d-flex flex-column flex-lg-row">
        {cardData.map((data, ind) => (
          <HomeCard
            image={data.image}
            title={data.title}
            content={data.content}
            key={ind}
          />
        ))}
      </Container>
    </div>
  );
};
export default Home;
