const UnorderedList = ({ numbers, lists }) => {
  return (
    <ul>
      {numbers &&
        [...Array(numbers).keys()].map((index) => (
          <li key={index}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa in a
            posuere.
          </li>
        ))}
      {lists && lists.map((list) => <li key={list.id}>{list.content}</li>)}
    </ul>
  );
};
export default UnorderedList;
