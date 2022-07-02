import { useParams } from 'react-router-dom';

const Details = () => {
  let params = useParams();
  return (
    <div>
      <p className="fs-3 ms-4">User {params.docGigaFood} detail</p>
    </div>
  );
};
export default Details;
