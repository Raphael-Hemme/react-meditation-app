import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import React from 'react'

export const ErrorPage = () => {

  const error = useRouteError();
  let errorMessage: string = '';

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page">
      <h1 className="text-3xl font-bold underline text-green-700">Inhale... . &nbsp;. &nbsp;&nbsp;. exhale.</h1>
      <p>Sorry, there has been an unexpected error.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
