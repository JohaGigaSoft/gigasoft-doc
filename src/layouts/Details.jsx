import { useParams } from 'react-router-dom';

const Details = () => {
  let params = useParams();
  const routeLink = params.docGigaFood;

  return (
    <div>
      <p className="fs-3 ms-4">User {routeLink} detail</p>
    </div>
  );
};
export default Details;
