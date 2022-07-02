const UnorderedList = ({ numbers }) => {
  return (
    <ul>
      {[...Array(numbers).keys()].map((index) => (
        <li key={index}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a
          posuere.
        </li>
      ))}
    </ul>
  );
};
export default UnorderedList;
