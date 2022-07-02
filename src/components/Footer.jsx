// import { Container } from '@mui/material';

// images
import insta from '../assets/images/insta-icon.png';
import twitter from '../assets/images/twitter-icon.png';
import linkedin from '../assets/images/linkedin-icon.png';
import facebook from '../assets/images/facebook-icon.png';
import t from '../assets/images/t-icon.png';
import pinterest from '../assets/images/pinterest-icon.png';
import location from '../assets/images/location.png';
import call from '../assets/images/call.png';
import mail from '../assets/images/mail.png';
import { Container } from 'react-bootstrap';

const logos = [insta, twitter, linkedin, facebook, t, pinterest];
const contents = [
  {
    logo: location,
    content: (
      <span>
        15205 North Kierland Blvd <br /> Scottsdale
      </span>
    ),
  },
  {
    logo: call,
    content: '+001-548-159-2491',
  },
  {
    logo: mail,
    content: 'info@digiage.com',
  },
];

const servLink = [
  {
    id: 1,
    head: 'Our Services',
    list: [
      'interface design',
      'SEO optimizer',
      'Digital Marketing',
      'Software Development',
      'Market monitor',
    ],
  },
  {
    id: 2,
    head: 'Important Link',
    list: [
      'About Us',
      'How to work',
      'Privacy policy',
      'DigiAge help line',
      'contact Us ',
    ],
  },
];

const Title = ({ children }) => {
  return (
    <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium">
      {children}
    </h3>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Container className="">
        <div className="flex flex-wrap justify-center pt-16 text-center sm:text-start">
          <div className="max-w-424px mr-0 sm:mr-10 mt-10 flex flex-col items-center sm:items-start">
            <Title>DigiAge</Title>
            <p className="text-base xl:text-lg 2xl:text-xl font-normal mt-10 pr-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              pulvinar eu consectetur consequat id pharetra. Turpis massa
              ullamcorper lacus
            </p>
            <div className="flex items-center mt-12">
              {logos.map((logo, ind) => (
                <img
                  className="mr-4 sm:mr-5"
                  src={logo}
                  alt="socila media icon"
                  key={ind}
                />
              ))}
            </div>
          </div>
          {servLink.map((data) => (
            <div className="mr-0 sm:mr-10 mt-10" key={data.id}>
              <Title>{data.head}</Title>
              <div className="mt-10">
                {data.list.map((list, ind) => (
                  <div className="flex items-center text-lg mt-7" key={ind}>
                    <p className="text-lg font-medium ml-3">{list}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="mr-0 sm:mr-10 mt-10">
            <Title>Contact Info</Title>
            <p className=" text-base xl:text-lg 2xl:text-xl max-w-290px mt-10">
              Lorem ipsunon lacus bibendum orci imperdiet.
            </p>
            <div className="flex flex-col items-start">
              {contents.map((value, ind) => (
                <div className="flex items-start mt-7" key={ind}>
                  <img src={value.logo} alt="" />
                  <p className=" text-base xl:text-lg 2xl:text-xl font-normal ml-5 ">
                    {value.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-sm lg:text-base capitalize mt-32">
          all rights reserved by @DigiAge 2022
        </p>
      </Container>
    </div>
  );
};
export default Footer;
