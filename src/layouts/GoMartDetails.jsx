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
      <p>{routeLink}</p>
    </div>
  );
};
export default GoMartDetails;
