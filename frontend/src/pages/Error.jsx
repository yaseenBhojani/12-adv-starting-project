import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();

  let title = "An Error occurred";
  let message = "Something went wrong";

  switch (error.status) {
    case 500:
      message = error.data.message;
      break;

    case 404:
      title = "Not found!";
      message = "Could not found resource or page.";
      break;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
