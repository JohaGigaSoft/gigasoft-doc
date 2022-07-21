import { useParams } from 'react-router-dom';
import Basic from '../pages/gigaMart/Basic';
import Customization from '../pages/gigaMart/AdminCustomization';
import FlutterSdk from '../pages/gigaMart/FlutterSdk';
import InstallOnServer from '../pages/gigaMart/InstallOnServer';
import LocalServer from '../pages/gigaMart/LocalServer';
import MandatorySetup from '../pages/gigaMart/MandatorySetup';
import MobileApp from '../pages/gigaMart/MobileApp';
import Server from '../pages/gigaMart/Server';
import MobileCustomization from '../pages/gigaMart/MobileCustomization';
import AppBuildRelease from '../pages/gigaMart/AppBuildRelease';
import WebMandetorySetup from '../pages/gigaMart/WebMandetorySetup';
import SetupOnServer from '../pages/gigaMart/SetupOnServer';
import AdminPanel from '../pages/gigaMart/AdminPanel';
import AppAndWeb from '../pages/gigaMart/AppAndWeb';
import AdminMandatorySetup from '../pages/gigaMart/AdminMandatorySetup';

const GigaMartDetails = () => {
  let params = useParams();
  const routeLink = params.docGigaFood;
  return (
    <div>
      {routeLink === 'giga_mart-basic-0' && <Basic />}
      {routeLink === 'giga_mart-server-0' && <Server />}
      {routeLink === 'giga_mart-mobile-app-0' && <MobileApp />}
      {routeLink === 'giga_mart-flutter-sdk-1' && <FlutterSdk />}
      {routeLink === 'giga_mart-local-server-1' && <LocalServer />}
      {routeLink === 'giga_mart-install-on-server-2' && <InstallOnServer />}
      {routeLink === 'giga_mart-mandatory-setup-2' && <AdminMandatorySetup />}
      {routeLink === 'giga_mart-customization-2' && <Customization />}
      {routeLink === 'giga_mart-mandatory-setup-3' && <MandatorySetup />}
      {routeLink === 'giga_mart-customization-3' && <MobileCustomization />}
      {routeLink === 'giga_mart-app-build-release-3' && <AppBuildRelease />}
      {routeLink === 'giga_mart-mandatory-setup-4' && <WebMandetorySetup />}
      {routeLink === 'giga_mart-build-code-and-setup-on-server-4' && (
        <SetupOnServer />
      )}
      {routeLink === 'giga_mart-admin-Panel-5' && <AdminPanel />}
      {routeLink === 'giga_mart-app-web-5' && <AppAndWeb />}

      <p>{routeLink}</p>
    </div>
  );
};
export default GigaMartDetails;
