import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Info from '../../components/Info';
import Mark from '../../components/Mark';
import Previous from '../../components/svgs/Previous';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AppAndWeb = () => {
  const navigate = useNavigate();
  return (
    <Container className="introduction">
      <h1>App & Web</h1>
      <div className="section overview">
        <h3>Update</h3>
        <p>
          If you want to update with the latest version from the previous
          version then find out the changed files that are attached with every
          update. The name of the folder like:{' '}
          <Mark>App changes from V1.0 to V1.1</Mark>. In this folder, you will
          get files directory-wise. Just replace them in those directories.
        </p>
        <Info>
          You can not switch from very older version to newer version. You can
          switch from previous version to new version
        </Info>
      </div>
      <div className="section overview">
        <h3>Update after Customization</h3>
        <p>
          If you customized something on the code and want to update to our
          latest version follow any option given below:
        </p>
        <Info>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Way 1">
              First, push your code on a git branch. Then download our project
              code from codecanyon and push it to another branch. At last merge
              both branches. It is possible to get conflicts on branch. Resolve
              it carefully.
            </Tab>
            <Tab eventKey="profile" title="Way 2">
              We provided changed files directory-wise with our every update.
              You have to replace them with your code. Remember that it may
              conflict with your customization. If you customize something on a
              file, and we changed something on the same file then merge those
              codes carefully.
            </Tab>
            <Tab eventKey="contact" title="Way 3">
              Download updated files from codecanyon and do your customization
              again.
            </Tab>
          </Tabs>
        </Info>
        <Info danger={true}>
          You have to be a developer in that case. If something goes wrong, we
          won't be responsible for that.
        </Info>
      </div>

      <div className="d-flex justify-content-end">
        <div className="btn-pre-next">
          <button
            onClick={() => {
              navigate('/doc-rest-food/rest_food-admin-Panel-5', {
                replace: true,
              });
            }}
            className="me-3"
          >
            <Previous width="16px" className="me-1" />
            Previous
          </button>
        </div>
      </div>
    </Container>
  );
};
export default AppAndWeb;
