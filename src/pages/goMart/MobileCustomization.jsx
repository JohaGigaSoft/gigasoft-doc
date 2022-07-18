import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import {
  countryFilterOne,
  countryFilterTwo,
} from '../../data/unorderList/goMart/mobileApp';
import {
  appColor,
  appFont,
  localLanguage,
} from '../../data/unorderList/goMart/mobileCustomization';
import { BlockOfCode } from './MandatorySetup';

const MobileCustomization = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Customization</h1>
      <div className="section overview">
        <h3 className="title-des">Country Filter</h3>
        <UnorderedList lists={countryFilterOne} />
        <BlockOfCode
          link="/lib/view/screens/auth/sign_in_screen.dart"
          code={`countryFilter: [_countryDialCode]`}
        />
        {/* <Info >Recommended setup tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/xQ1WnEFDBtQ" /> */}
        <UnorderedList lists={countryFilterTwo} />
        <BlockOfCode
          link="/lib/view/screens/auth/sign_in_screen.dart"
          code={`enabled: false`}
        />
      </div>
      <div className="section">
        <h3 className="title-des">Change onboarding text and graphics</h3>
        <p>
          I) Text: If you want to change onboarding text, open
          <Mark>&lt;project&gt;/assets/language/en.json</Mark> and you will
          found some texts with key named “on_boarding_1_title”. You just need
          to change the values. Do not change key.    Also do same things for
          <Mark>&lt;project&gt;/assets/language/ar.json</Mark> file also.
        </p>
        <BlockOfCode
          link="/assets/language/en.json"
          code={`"on_boarding_1_title": “YOUR_PREFERRED_TEXT”,`}
        />
        <p>
          ii) Graphics: If you want to change graphics of on boarding page then
          go to <Mark>&lt;project&gt;/assets/image/</Mark> and replace
          <Mark>onboard_1.png</Mark> with your preferred image. Must use same
          name and extension for your graphics.
        </p>
      </div>

      <div className="section">
        <h3 className="title-des">Add New Local Language</h3>
        <UnorderedList lists={localLanguage} />
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/_jGQav1WSHk" /> */}
      </div>
      <div className="section">
        <h3 className="title-des">Change App Color</h3>
        <UnorderedList lists={appColor} />
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/_jGQav1WSHk" /> */}
      </div>
      <div className="section">
        <h3 className="title-des">Change App Font</h3>
        <UnorderedList lists={appFont} />
      </div>
      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-mandatory-setup-3', {
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
              navigate('/doc-go-mart/goMart-app-build-release-3', {
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
export default MobileCustomization;
