import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Next from '../../components/svgs/Next';
import Previous from '../../components/svgs/Previous';
import ImageCard from '../../components/ImageCard';

// images
import cPanel from '../../assets/images/cpanel.png';
import db from '../../assets/images/db.png';
import software from '../../assets/images/software.png';
import Iframe from '../../components/Iframe';

const InstallOnServer = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>Install on server</h1>
      <div className="section overview">
        <p>
          After download the code from codecayon upload the{' '}
          <Mark className="me-1">Admin new install</Mark> zip file in your
          server following your expected directory and extract the zip file.
          Giga Soft admin panel can be installed on a domain or subdomain: For
          Example, yourdomain.com OR xyz.yourdomain.com.
        </p>

        <Info>
          As the admin panel and web app are developed using two different
          technology, If you want the web app in your main domain then you need
          to install the admin panel in a subdomain. For example if you want the
          web app(website) in yourdomain.com then you can install the admin
          panel in admin.yourdomain.com or in any subdomain. Later in web app
          part you will know how you need to install the web app on your server.
        </Info>
      </div>

      <div className="section">
        <h3>Admin Panel Installation</h3>
        <p>
          <Mark>Step 1:</Mark> After download the code from codecayon upload the
          admin install zip in your directory and extract the zip file. Giga
          Soft can be installed on your main domain or subdomain: For Example,
          <Mark className="mx-1">yourdomain.com</Mark>
          OR <Mark>hello.yourdomain.com</Mark> It also CAN be installed in the
          subdirectory path of your domain. For Example,
          <Mark>www.yourdomain.com/my-new-website</Mark>
        </p>

        <p>
          Giga Soft requires an <Mark>SSL certificate</Mark> to be installed on
          your domain to work with all the services. A{' '}
          <Mark>FREE SSL certificate</Mark> can be easily installed on your
          domain using{' '}
          <span style={{ color: '#e3442e', marginLeft: '3px' }}>
            sslforfree.com
          </span>
        </p>
        <p>Create the database properly</p>
        <p>Create a new database from your server MYSQL database</p>
        <ImageCard src={cPanel} />
        <p className="title-des">
          Create a DB user to the database and link that database to the DB user
        </p>
        <ImageCard src={db} />
        <p>
          <Mark>Step 2:</Mark> First hit your site URL and it will automatically
          take you to the installation. You will get the checking required
          information if everything is OK then click on next step.
        </p>
        <ImageCard src={software} />
        <p>
          <Mark>Step 3:</Mark> All the required extensions and permission must
          be enabled
        </p>
        <ImageCard src={cPanel} />
        <p>
          <Mark>Step 4:</Mark> Provide your codecanyon username and purchase
          code and go next
        </p>
        <ImageCard src={cPanel} />
        <p>
          <Mark>Step 5:</Mark> Now you need to set Database host, Database name,
          Database username, Database password and click continue if the
          database in your server then the host is localhost.
        </p>
        <ImageCard src={cPanel} />
        <p>
          <Mark>Step 6:</Mark> Now you need to import the SQL file. For this
          just click on Import Database button
        </p>
        <ImageCard src={cPanel} />
        <p>
          <Mark>Step 7:</Mark> Now fill up the information and click continue
        </p>
        <ImageCard src={cPanel} />

        <hr />
        <br />

        <p>
          <Mark>Step 8:</Mark> All done, your software is ready to run.
        </p>
        <ImageCard src={cPanel} />
        <p>Click on the admin panel or view landing page.</p>
        <ImageCard src={cPanel} />
        <Info>Recommended tutorial is below 👇</Info>
        <Iframe src="https://www.youtube.com/embed/SxAcmwfqz38" />
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-local-server-1', { replace: true });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
          <button
            onClick={() => {
              navigate('/doc-go-mart/goMart-mandatory-setup-2', {
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
export default InstallOnServer;
