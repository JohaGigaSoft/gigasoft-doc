import { useParams } from 'react-router-dom';
import Basic from '../pages/goMart/Basic';
import Customization from '../pages/goMart/AdminCustomization';
import FlutterSdk from '../pages/goMart/FlutterSdk';
import InstallOnServer from '../pages/goMart/InstallOnServer';
import LocalServer from '../pages/goMart/LocalServer';
import MandatorySetup from '../pages/goMart/MandatorySetup';
import MobileApp from '../pages/goMart/MobileApp';
import Server from '../pages/goMart/Server';
import MobileCustomization from '../pages/goMart/MobileCustomization';
import AppBuildRelease from '../pages/goMart/AppBuildRelease';
import WebMandetorySetup from '../pages/goMart/WebMandetorySetup';
import SetupOnServer from '../pages/goMart/SetupOnServer';
import AdminPanel from '../pages/goMart/AdminPanel';
import AppAndWeb from '../pages/goMart/AppAndWeb';

const GoMartDetails = () => {
  let params = useParams();
  const routeLink = params.docGigaFood;
  return (
    <div>
      {routeLink === 'goMart-basic-0' && <Basic />}
      {routeLink === 'goMart-server-0' && <Server />}
      {routeLink === 'goMart-mobile-app-0' && <MobileApp />}
      {routeLink === 'goMart-flutter-sdk-1' && <FlutterSdk />}
      {routeLink === 'goMart-local-server-1' && <LocalServer />}
      {routeLink === 'goMart-install-on-server-2' && <InstallOnServer />}
      {routeLink === 'goMart-mandatory-setup-2' && <MandatorySetup />}
      {routeLink === 'goMart-customization-2' && <Customization />}
      {routeLink === 'goMart-mandatory-setup-3' && <MandatorySetup />}
      {routeLink === 'goMart-customization-3' && <MobileCustomization />}
      {routeLink === 'goMart-app-build-release-3' && <AppBuildRelease />}
      {routeLink === 'goMart-mandatory-setup-4' && <WebMandetorySetup />}
      {routeLink === 'goMart-build-code-and-setup-on-server-4' && (
        <SetupOnServer />
      )}
      {routeLink === 'goMart-admin-Panel-5' && <AdminPanel />}
      {routeLink === 'goMart-app-web-5' && <AppAndWeb />}

      {/* <p>{routeLink}</p> */}
    </div>
  );
};
export default GoMartDetails;
