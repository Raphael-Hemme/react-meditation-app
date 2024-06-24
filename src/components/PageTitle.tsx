import React from 'react';

export const PageTitle = ({
  pageTitle = 'No Title',
}: {
  pageTitle: string;
}) => {
  return (
    <h1 className="mt-3 bg-gradient-to-b from-emerald-500 to-blue-600 bg-clip-text py-2 text-center text-3xl text-transparent">
      {pageTitle}
    </h1>
  );
};
