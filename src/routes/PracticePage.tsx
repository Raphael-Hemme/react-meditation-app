import { useState } from 'react';

export const PracticePage = () => {
  const [startTime, setStartTime] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('00:05'); // hh-mm
  const [remainingTime, setRemainingTime] = useState('00:00:00');

  return (
    <div className="flex-colborder flex h-full min-h-full w-full flex-col gap-16 border-purple-900">
      <h1 className="mt-3 bg-gradient-to-b from-emerald-500 to-blue-600 bg-clip-text py-2 text-center text-3xl text-transparent">
        Practice
      </h1>

      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-72 w-72 items-center justify-center rounded-full border-4 border-violet-500">
          <p className="text-4xl text-violet-300">{remainingTime}</p>
        </div>
      </div>
    </div>
  );
};
