import InfoSvg from './svgs/Info';

const Info = () => {
  return (
    <div className="info">
      <h5 className="cls">
        <InfoSvg className="me-2" width="17px" height="17px" />
        INFO
      </h5>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit est
        quis leo eros, mauris sed. Sed tortor, vel morbi mauris pellentesque
        nibh scelerisque ipsum. Integer vitae, leo aenean odio curabitur.
        Consectetur fringilla faucibus aliquam at nec. Tellus risus vel.
      </p>
    </div>
  );
};
export default Info;
