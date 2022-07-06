import InfoSvg from './svgs/Info';

const Info = ({ children, danger }) => {
  return (
    <div
      className="info"
      style={{
        background: danger ? '#ffebec' : '#f5ffed',
        borderLeft: danger ? '4px solid #e13238' : '4px solid #baf88a',
      }}
    >
      {danger ? (
        <>
          <h5 className="danger">
            <i
              className="fa-solid fa-skull-crossbones me-2"
              style={{ color: '#e3442e' }}
            ></i>
            Danger
          </h5>
          <p className="danger">{children}</p>
        </>
      ) : (
        <>
          <h5 className="info">
            <InfoSvg className="me-2" width="20px" height="20px" /> Info
          </h5>
          <p className="info">{children}</p>
        </>
      )}
    </div>
  );
};
export default Info;
