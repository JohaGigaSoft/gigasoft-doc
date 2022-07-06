import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Iframe from '../../components/Iframe';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import UnorderedList from '../../components/UnorderedList';
import {
  firebaseSetupOne,
  firebaseSetupTwo,
  mapApiSetup,
  mobileMandatorySetup,
} from '../../data/unorderList/goMart/mandetorySetup';

const MandatorySetup = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Mandatory setup</h1>
      <Info>
        Same documentation for all related projects like Delivery & Store
      </Info>
      <div className="section">
        <h3>Run an existing flutter project on IDE</h3>
        <Iframe src="https://www.youtube.com/embed/a-BywlH_DcM" />
      </div>

      <div className="section">
        <h3>Change App Logo</h3>
        <p className="title-des">
          You can generate app icon from this website https://app icon.co.
        </p>
        <UnorderedList lists={mobileMandatorySetup} />
        <Info>
          <span className="mt-3 d-block">Recommended tutorial is below 👇</span>
        </Info>
        <Iframe src="https://www.youtube.com/embed/P2xhoFwNIz8" />
      </div>

      <div className="section">
        <h3>Change App Name</h3>
        <p>
          1. You need to set your app name in three different place. Open <br />{' '}
          <Mark>&lt;project&gt;/lib/util/app_constrants.dart</Mark> and set the
          value of <Mark>APP_NAME</Mark>
        </p>
        <p>
          2. Change the value of label from{' '}
          <Mark>&lt;project&gt;/android/app/src/main/AndroidManifest.xml</Mark>
        </p>
        <p>
          3. Change the value of CFBundleName from{' '}
          <Mark>&lt;project&gt;/iOS/Runner/info.plist</Mark>
        </p>
        <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/2fgCgYrXwJ0" />
      </div>
      <div className="section">
        <h3>Change Base URL</h3>
        <p>
          Must remember that don’t put slash(/) at the end of your base url. Use
          your admin url as base url. First you have to install your admin
          panel. For example: If your admin url is{' '}
          <Mark>https://your_domain.com/admin</Mark>
          then base url will be <Mark>https://your_domain.com</Mark>. Open
          <Mark>/lib/util/app_constrants.dart</Mark> and replace{' '}
          <Mark>BASE_URL</Mark>
          variable value with your own URL.
        </p>

        <Iframe src="https://www.youtube.com/embed/2fgCgYrXwJ0" />
      </div>
      <div className="section">
        <h3>Change App Package</h3>
        <p>
          First you have to find out the existing package name. You can find it
          out from top of <Mark>/app/src/main/AndroidManifest.xml</Mark> file.
          Now right click on project folder from android studio and click on
          <Mark>replace in path</Mark>. You will get a popup window with two
          input box. In first box you have to put existing package name that you
          saw in <Mark>AndroidManifest.xml</Mark> file previously and write down
          your preferred package name in second box and then click on{' '}
          <Mark>Replace All</Mark> button.
        </p>
        <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/4M0LmTjBuKk" />
      </div>

      <div className="section">
        <h3>Setup Firebase for Push Notification</h3>
        <p>
          First you have to change your package name. If you didn’t then follow
          this.
        </p>
        <UnorderedList lists={firebaseSetupOne} />
        <Info>Recommended tutorial is below 👇</Info>
        <UnorderedList lists={firebaseSetupTwo} />
        <p>
          After your setup please restart your IDE and uninstall your previously
          installed app then run it. Also don’t try to test it on emulator or
          simulator. Emulator and simulators are unable to get push. Use real
          device in this case.
        </p>
        <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/4M0LmTjBuKk" />
      </div>
      <div className="section">
        <h3>Add Google Map API Key</h3>

        <UnorderedList lists={mapApiSetup} />

        <p>
          For android, open{' '}
          <Mark>&lt;project&gt;/android/app/src/main/AndroidManifest.xml</Mark>
          and place the value of <Mark>com.google.android.geo.API_KEY</Mark>
        </p>
        <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/kfHNfPEzSLs" />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-customization-2', {
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
              navigate('/doc-go-mart/goMart-customization-3', {
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
export default MandatorySetup;
