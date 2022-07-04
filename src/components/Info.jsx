import InfoSvg from './svgs/Info';

const Info = ({ children }) => {
  return (
    <div className="info">
      <h5 className="cls">
        <InfoSvg className="me-2" width="20px" height="20px" />
        INFO
      </h5>
      <p className="">{children}</p>
    </div>
  );
};
export default Info;
