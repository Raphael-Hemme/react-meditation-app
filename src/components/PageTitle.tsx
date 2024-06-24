export const PageTitle = ({
  pageTitle = 'No Title',
}: {
  pageTitle: string;
}) => {
  return (
    <h1 className="mt-3 bg-gradient-to-b from-violet-400 to-violet-700 bg-clip-text py-2 text-center text-3xl text-transparent">
      {pageTitle}
    </h1>
  );
};
