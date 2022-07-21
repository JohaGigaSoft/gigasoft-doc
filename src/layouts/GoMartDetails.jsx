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
import AdminMandatorySetup from '../pages/goMart/AdminMandatorySetup';

const GoMartDetails = () => {
  let params = useParams();
  const routeLink = params.docGigaFood;
  return (
    <div>
      {routeLink === 'go_mart-basic-0' && <Basic />}
      {routeLink === 'go_mart-server-0' && <Server />}
      {routeLink === 'go_mart-mobile-app-0' && <MobileApp />}
      {routeLink === 'go_mart-flutter-sdk-1' && <FlutterSdk />}
      {routeLink === 'go_mart-local-server-1' && <LocalServer />}
      {routeLink === 'go_mart-install-on-server-2' && <InstallOnServer />}
      {routeLink === 'go_mart-mandatory-setup-2' && <AdminMandatorySetup />}
      {routeLink === 'go_mart-customization-2' && <Customization />}
      {routeLink === 'go_mart-mandatory-setup-3' && <MandatorySetup />}
      {routeLink === 'go_mart-customization-3' && <MobileCustomization />}
      {routeLink === 'go_mart-app-build-release-3' && <AppBuildRelease />}
      {routeLink === 'go_mart-mandatory-setup-4' && <WebMandetorySetup />}
      {routeLink === 'go_mart-build-code-and-setup-on-server-4' && (
        <SetupOnServer />
      )}
      {routeLink === 'go_mart-admin-Panel-5' && <AdminPanel />}
      {routeLink === 'go_mart-app-web-5' && <AppAndWeb />}

      {/* <p>{routeLink}</p> */}
    </div>
  );
};
export default GoMartDetails;
