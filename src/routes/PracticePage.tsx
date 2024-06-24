import { useState } from 'react';
import { PageTitle } from '../components/PageTitle';

export const PracticePage = () => {
  const [startTime, setStartTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('00:05'); // hh-mm
  const [remainingTime, setRemainingTime] = useState('00:00:00');

  return (
    <div className="flex-colborder flex h-full min-h-full w-full flex-col gap-16 border-purple-900">
      <PageTitle pageTitle="Practice" />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-72 w-72 items-center justify-center rounded-full border-4 border-violet-500">
          <p className="text-4xl text-violet-300">{remainingTime}</p>
        </div>
      </div>
    </div>
  );
};
