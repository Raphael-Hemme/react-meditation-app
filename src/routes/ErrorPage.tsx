import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
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

  const handleHomeBtnClick = () => {
    navigate('/');
  };

  return (
    <div
      id="error-page"
      className="h-100 flex min-h-screen w-screen flex-col items-center justify-between gap-5 bg-gradient-to-b from-green-100 to-blue-200 px-10 pb-5"
    >
      <h1 className="mt-3 bg-gradient-to-b from-emerald-500 to-blue-600 bg-clip-text py-2 text-center text-3xl text-transparent">
        Error
      </h1>
      <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-100 p-5">
        <p className="mb-10 flex flex-col items-center bg-gradient-to-b from-emerald-500 to-blue-700 bg-clip-text text-2xl font-bold text-transparent">
          <span>Inhale</span>
          <span>...</span>
          <span>..</span>
          <span>.</span>
          <span>
            <br />
          </span>
          <span>Exhale</span>
        </p>
        <p className="text-center">
          Sorry, there has been an unexpected error.
        </p>

        <p className="h-20 w-full rounded-l bg-gray-700 p-3 font-mono text-base text-yellow-500">
          {errorMessage}
          <span className="animate-text-flash"> _</span>
        </p>

        <p className="text-center">
          Click the button below to go back to the start screen.
        </p>

        <button
          onClick={handleHomeBtnClick}
          type="button"
          className="flex w-full cursor-pointer justify-center rounded-xl bg-emerald-500 p-4"
        >
          <img src="src/assets/home_icon.svg" alt="home icon" />
        </button>
      </div>
    </div>
  );
};
