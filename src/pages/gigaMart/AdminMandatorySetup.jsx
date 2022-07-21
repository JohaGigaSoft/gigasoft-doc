import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';

const AdminMandatorySetup = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Mandatory setup</h1>
      <h3 className="mt-3">Map Configuration</h3>
      <p>
        Client should buy Map API from Google for enabling the maps into the
        panels. Without buying those API’s client cannot load Google map into
        the panels for selecting zones. For generating map api key you can watch
        this video. Now go to your admin panel then “Third party APIs" menu,
        here you will find two inputs for map api key client and map api key
        server. You can restrict the client with admin panel domain and the
        server key with your server ip address. If you don’t want any
        restriction then you can use single api key for both field.
      </p>

      <div className="section">
        <h3>Business Setup</h3>
        <p className="title-des">
          In the admin panel we have a menu called{' '}
          <strong>Business Setup</strong> where you can set your{' '}
          <strong>
            logo, timezone, country, time format, location, currency
          </strong>{' '}
          and many more things.
        </p>
      </div>
      <div className="section">
        <h3>Firebase Configuration (for notification)</h3>
        <p className="title-des">
          The Firebase Push Notification will send messages for every order
          status. If admin turn on the status then with order status change
          customers, store, delivery man will get status notification and if he
          turned off that then no one will get that message. To set up firebase
          notification goto admin panel <strong>Notification settings</strong>{' '}
          menu.
        </p>
      </div>
      <div className="section">
        <h3>Payment Configuration</h3>
        <p className="title-des">
          In this part Admin will introduced with the payment gateways. Cash on
          delivery, Digital Payment like SSLCOMMERZ, Razor pay, Paypal, Stripe,
          Paystack, Senang Pay, Flutterwave, MercadoPago, Payment accept are
          available for payment gateways. He can make the necessary setup of
          making the status active and inactive of those payment gateways as
          well.
        </p>
      </div>
      <div className="section">
        <h3>SMS Module Configuration</h3>
        <p className="title-des">
          SMS Module is used for SMS Gateways for OTP sending in the simplest
          way of user verification. Customer will get OTP when they create their
          own account and for password recovery.
        </p>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-giga-mart/giga_mart-install-on-server-2', {
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
              navigate('/doc-giga-mart/giga_mart-customization-2', {
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
export default AdminMandatorySetup;
