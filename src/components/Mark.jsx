const styles = {
  border: '0.1rem solid rgba(0,0,0,.1)',
  padding: '1px 3px',
  borderRadius: '5px',
};

const Mark = ({ children, bg, color, ...rest }) => {
  return (
    <code style={{ ...styles, background: bg, color: color }} {...rest}>
      {children}
    </code>
  );
};
export default Mark;
