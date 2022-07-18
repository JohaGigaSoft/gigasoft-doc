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

import PrismCode from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-okaidia.css';

export const BlockOfCode = ({ code, link }) => {
  return (
    <div className="code-with-link">
      <div className="para">
        <p>{link}</p>
      </div>
      <pre>
        <PrismCode className="language-jsx" children={code} />
      </pre>
    </div>
  );
};

const MandatorySetup = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Mandatory setup</h1>

      <Info>
        Same documentation for all related projects like{' '}
        <strong>Delivery</strong> & <strong>Store</strong>
      </Info>
      {/* <div className="section">
        <h3>Run an existing flutter project on IDE</h3>
        <Iframe src="https://www.youtube.com/embed/a-BywlH_DcM" />
      </div> */}

      <div className="section">
        <h3>Change App Logo</h3>
        <p className="title-des">
          You can generate app icon from this website https://app icon.co.
        </p>
        <UnorderedList lists={mobileMandatorySetup} />
        {/* <Info>
          <span className="mt-3 d-block">Recommended tutorial is below 👇</span>
        </Info>
        <Iframe src="https://www.youtube.com/embed/P2xhoFwNIz8" /> */}
      </div>

      <div className="section">
        <h3>Change App Name</h3>
        <ol>
          <li>
            You need to set your app name in three different place. Open <br />{' '}
            <Mark>&lt;project&gt;/lib/util/app_constrants.dart</Mark> and set
            the value of <Mark>APP_NAME</Mark>
          </li>
          <BlockOfCode
            link="/lib/util/app_constrants.dart"
            code={`static const String APP_NAME = ‘My App’;`}
          />
          <li>
            Change the value of label from{' '}
            <Mark>
              &lt;project&gt;/android/app/src/main/AndroidManifest.xml
            </Mark>
          </li>
          <BlockOfCode
            link="/android/app/src/main/AndroidManifest.xml"
            code={`android:label="My App"`}
          />
          <li>
            Change the value of CFBundleName from{' '}
            <Mark>&lt;project&gt;/iOS/Runner/info.plist</Mark>
          </li>
          <BlockOfCode
            link="/iOS/Runner/info.plist"
            code={`<key>CFBundleName</key>
<string>My App</string>`}
          />
        </ol>
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/2fgCgYrXwJ0" /> */}
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
        <BlockOfCode
          link="/lib/util/app_constrants.dart"
          code={`static const String BASE_URL = 'https://your_domain.com';`}
        />

        {/* <Iframe src="https://www.youtube.com/embed/2fgCgYrXwJ0" /> */}
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
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/4M0LmTjBuKk" /> */}
      </div>

      <div className="section">
        <h3>Setup Firebase for Push Notification</h3>
        <p>
          First you have to change your package name. If you didn’t then follow
          this.
        </p>
        <UnorderedList lists={firebaseSetupOne} />
        <Info danger={true}>
          Do not create multiple project if you have multiple app like User App,
          Delivery App. Create only one project and add multiple app under
          project.
        </Info>
        <UnorderedList lists={firebaseSetupTwo} />
        <p>
          After your setup please restart your IDE and uninstall your previously
          installed app then run it. Also don’t try to test it on emulator or
          simulator. Emulator and simulators are unable to get push. Use real
          device in this case.
        </p>
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/4M0LmTjBuKk" /> */}
      </div>
      <div className="section">
        <h3>Add Google Map API Key</h3>

        <UnorderedList lists={mapApiSetup} />

        <p>
          For android, open{' '}
          <Mark>&lt;project&gt;/android/app/src/main/AndroidManifest.xml</Mark>
          and place the value of <Mark>com.google.android.geo.API_KEY</Mark>
        </p>
        <BlockOfCode
          link="/android/app/src/main/AndroidManifest.xml"
          code={`<meta-data android:name="com.google.android.geo.API_KEY" android:value=“YOUR_MAP_API_KEY_HERE”/>`}
        />
        <p>
          For iOS: open{' '}
          <Mark>&lt;project&gt;/iOS/Runner/AppDelegate.swift</Mark> and place
          the value of <Mark>GMSServices.provideAPIKey</Mark>
        </p>
        <BlockOfCode
          link="/iOS/Runner/AppDelegate.swift"
          code={`GMSServices.provideAPIKey(“YOUR_MAP_API_KEY_HERE")`}
        />
        <p>
          For web: open <Mark>&lt;project&gt;/web/index.html</Mark> and place
          the value of <Mark>https://maps.googleapis.com/maps/api/js?key</Mark>
        </p>
        <BlockOfCode
          link="/web/index.html"
          code={`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_MAP_API_KEY_HERE"></script>`}
        />
        {/* <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/kfHNfPEzSLs" /> */}
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
