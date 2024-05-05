import { useRouteError } from "react-router-dom";

const Error = () => {
  const { statusText } = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{statusText}</p>
    </div>
  );
};

export default Error;
