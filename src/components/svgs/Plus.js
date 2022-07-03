export const Plus = (props) => {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="plus">
        <rect
          id="vertical"
          x="62"
          width="16"
          height="140"
          rx="5"
          fill="#363E44"
        />
        <rect
          id="horizontal"
          y="78"
          width="16"
          height="140"
          rx="5"
          transform="rotate(-90 0 78)"
          fill="#363E44"
        />
      </g>
    </svg>
  );
};
