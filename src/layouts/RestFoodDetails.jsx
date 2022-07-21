import { useParams } from 'react-router-dom';
import Basic from '../pages/restFood/Basic';
import Customization from '../pages/restFood/AdminCustomization';
import FlutterSdk from '../pages/restFood/FlutterSdk';
import InstallOnServer from '../pages/restFood/InstallOnServer';
import LocalServer from '../pages/restFood/LocalServer';
import MandatorySetup from '../pages/restFood/MandatorySetup';
import MobileApp from '../pages/restFood/MobileApp';
import Server from '../pages/restFood/Server';
import MobileCustomization from '../pages/restFood/MobileCustomization';
import AppBuildRelease from '../pages/restFood/AppBuildRelease';
import WebMandetorySetup from '../pages/restFood/WebMandetorySetup';
import SetupOnServer from '../pages/restFood/SetupOnServer';
import AdminPanel from '../pages/restFood/AdminPanel';
import AppAndWeb from '../pages/restFood/AppAndWeb';
import AdminMandatorySetup from '../pages/restFood/AdminMandatorySetup';

const RestFoodDetails = () => {
  let params = useParams();
  const routeLink = params.docGigaFood;
  return (
    <div>
      {routeLink === 'rest_food-basic-0' && <Basic />}
      {routeLink === 'rest_food-server-0' && <Server />}
      {routeLink === 'rest_food-mobile-app-0' && <MobileApp />}
      {routeLink === 'rest_food-flutter-sdk-1' && <FlutterSdk />}
      {routeLink === 'rest_food-local-server-1' && <LocalServer />}
      {routeLink === 'rest_food-install-on-server-2' && <InstallOnServer />}
      {routeLink === 'rest_food-mandatory-setup-2' && <AdminMandatorySetup />}
      {routeLink === 'rest_food-customization-2' && <Customization />}
      {routeLink === 'rest_food-mandatory-setup-3' && <MandatorySetup />}
      {routeLink === 'rest_food-customization-3' && <MobileCustomization />}
      {routeLink === 'rest_food-app-build-release-3' && <AppBuildRelease />}
      {routeLink === 'rest_food-mandatory-setup-4' && <WebMandetorySetup />}
      {routeLink === 'rest_food-build-code-and-setup-on-server-4' && (
        <SetupOnServer />
      )}
      {routeLink === 'rest_food-admin-Panel-5' && <AdminPanel />}
      {routeLink === 'rest_food-app-web-5' && <AppAndWeb />}
    </div>
  );
};
export default RestFoodDetails;
