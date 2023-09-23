import { NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center" id="error-page">
      <h1 className="text-4xl font-extrabold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink to='/'><button className="btn btn-primary">Back Home</button></NavLink>
    </div>
  );
}