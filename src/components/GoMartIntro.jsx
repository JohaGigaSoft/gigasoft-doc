import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  mobileApplication,
  orderFlow,
  dispatchFlow,
  transactionFlow,
  adminCommission,
  storeEarning,
  deliveryBoyEarning,
  cashFlow,
} from '../data/unorderList/goMart/introductionList';
import Info from './Info';
import Mark from './Mark';
import Next from './svgs/Next';
import UnorderedList from './UnorderedList';

const GoMartIntro = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Introduction</h1>
      <div className="overview section">
        <h3>Overview</h3>
        <p className="title-des">
          Thank you for your interest in{' '}
          <span className="giga-food">Giga Soft</span>
        </p>
        <p>
          Giga Soft is a complete Multi Vendor Food, Grocery, eCommerce, Parcel,
          Pharmacy delivery system developed using Laravel and Flutter
          Framework. Laravel ( PHP Framework for Web Artisans) is a web
          application framework with an expressive, elegant syntax. We’ve
          already laid the foundation — freeing you to create without sweating
          the small things. Flutter framework created by Google is open-source
          mobile application development. It is used to develop applications for
          Android and iOS, as well as being the primary method of creating
          applications.
        </p>
        <p className="list">
          Giga Soft comprises of 3 Mobile Applications, 2 Web Panel, 1 website –
        </p>
        <UnorderedList lists={mobileApplication} />
      </div>
      <Info>
        The delivery boy app is developed using flutter so it will run both in
        Android and iOS but as the delivery boy app fully depends on location we
        suggest don’t use it for iOS. This documentation covers mostly all the
        aspects of setting up Multi Store Item Delivery Application - Giga Soft.
        For any queries pre-sales or tech support, please open a ticket at
        <a
          href="https://support.gigasoft.com/"
          className="ms-2 text-black text-decoration-underline text-decoration-color"
           target="_blank"
            rel="noopener noreferrer"
        >
          {' '}
          https://support.gigasoft.com/
        </a>
      </Info>

      <div className="happy-flow section">
        <h3>The happy flow</h3>
        <p className="happy-flow-des">
          In this section we are going to understand how the full system works.
          This system fully depends on operation zone. So first of all you need
          to create operation zone. You can create multiple zone based on your
          business. You can turn off/on your business operation for a specific
          zone anytime. Stores and delivery boys will operate their operations
          under a specific operation zone. A store or delivery boy can’t operate
          their operations in multiple zone. In customer app customers first
          need to select their delivery address and based on the delivery
          address latitude and longitude system select the operation zone and
          customer can see all the stores, offers, campaigns etc. of that
          specific zone. If the delivery address not inside any operation zone,
          then customer will see service not available in this area that means
          they can’t place order for that delivery address.
        </p>
      </div>
      <div className="section">
        <h3>Order Flow</h3>
        <UnorderedList lists={orderFlow} />
      </div>
      <div className="section">
        <h3>Dispatch Flow</h3>
        <UnorderedList lists={dispatchFlow} />
      </div>
      <div className="section">
        <h3>Transaction Flow</h3>
        <p className="title-des">
          In this section we are going to understand how system calculate the
          admin commission, seller earning and delivery boy earning.
        </p>
        <UnorderedList lists={transactionFlow} />
        <Info>
          Currently system calculate the admin commission and store earning on
          Item Value. That is why admin need to deal the{' '}
          <Mark bg="#d8f2fa">Item discount</Mark> and{' '}
          <Mark bg="#d8f2fa">Coupon discount for item</Mark> with store
          manually.
        </Info>
      </div>
      <div className="section">
        <h3>Admin Commission</h3>

        <UnorderedList lists={adminCommission} />
      </div>
      <div className="section">
        <h3>Store Earning</h3>

        <UnorderedList lists={storeEarning} />
      </div>
      <div className="section">
        <h3>Delivery Boy Earning</h3>
        <p className="title-des">
          There are two types of delivery boy. One is salaried and another
          option is freelancing based. We don’t calculate earning for salaried
          delivery boy. The below calculation is only for freelancing based
          delivery boys.
        </p>
        <UnorderedList lists={deliveryBoyEarning} />
      </div>
      <div className="section">
        <h3>Cash Flow</h3>

        <UnorderedList lists={cashFlow} />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('goMart-basic-0');
            }}
          >
            Next <Next width="16px" />
          </button>
        </div>
      </div>
    </Container>
  );
};
export default GoMartIntro;
