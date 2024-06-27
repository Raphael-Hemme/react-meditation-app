import { useState } from 'react';
import { PageTitle } from '../components/PageTitle';

export const SettingsPage = () => {
  // Time in full minutes since sub-minute adjustment should not be necessary-> default is 5 minutes
  const [minuteDuration, setMinuteDuration] = useState(5);

  const handleDurationChange = (val: number) => {
    setMinuteDuration(val);
    // Todo: dispatch action to set app state
  };

  return (
    <div className="h-full w-full">
      <PageTitle pageTitle="Settings" />
      <section className="flex flex-col">
        <div className="flex justify-center gap-5">
          <label htmlFor="durationRange">Duration</label>

          <input
            type="range"
            id="durationRange"
            name="durationRange"
            min="1"
            max="600"
            value={minuteDuration}
            onChange={(e) => handleDurationChange(+e.target.value)}
            className="w-2/3 accent-violet-500"
          />
          <p>{minuteDuration} minutes</p>
        </div>
        <p>How long do you want to meditate?</p>
      </section>
    </div>
  );
};
