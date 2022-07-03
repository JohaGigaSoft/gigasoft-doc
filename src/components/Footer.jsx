import { Container } from 'react-bootstrap';

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
import logo from '../assets/images/logo-footer.png';

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

const Footer = () => {
  return (
    <div className="footer">
      <Container className="text-white">
        <div className="d-flex flex-wrap justify-content-center text-center text-sm-start">
          <div className="logo-des  d-flex flex-column align-items-center align-items-sm-start">
            <div className="footer-logo section">
              <img src={logo} alt="" className="w-100" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              pulvinar eu consectetur consequat id pharetra. Turpis massa
              ullamcorper lacus
            </p>
            <div className="d-flex align-items-center footer-logo-icon">
              {logos.map((logo, ind) => (
                <img
                  className="me-1 me-sm-2 w-100"
                  src={logo}
                  alt="social media icon"
                  key={ind}
                />
              ))}
            </div>
          </div>
          {servLink.map((data) => (
            <div className="section" key={data.id}>
              <h3>{data.head}</h3>
              <div className="mt-10">
                {data.list.map((list, ind) => (
                  <div
                    className="d-flex align-items-center list-item"
                    key={ind}
                  >
                    <i className="fa-solid fa-angle-right me-3"></i>
                    <p className="text-lg font-medium ml-3">{list}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="section">
            <h3>Contact Info</h3>
            <p className="contact-p mt-3">
              Lorem ipsunon lacus bibendum orci imperdiet.
            </p>
            <div className="d-flex flex-column align-items-start">
              {contents.map((value, ind) => (
                <div
                  className="d-flex align-items-start contact-items"
                  key={ind}
                >
                  <img src={value.logo} alt="" />
                  <p className="ms-2">{value.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="border-footer"></div>
      <p className="copy-write text-center mt-4 text-capitalize">
        all rights reserved by @RestFood 2022
      </p>
    </div>
  );
};
export default Footer;
