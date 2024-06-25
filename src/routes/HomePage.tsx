import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center gap-28 pb-36">
      <h1 className="mt-40 bg-gradient-to-t from-emerald-500 to-blue-600 bg-clip-text text-transparent">
        Present
      </h1>
      <p className="text-violet-800">
        Present is a simple app that helps you practice being present in the
        moment.
      </p>

      <NavLink
        to="/practice"
        aria-label="Practice"
        className="rounded-full border-2 border-emerald-400 p-6"
      >
        <img src="/src/assets/self_improvement_icon_l.svg" />
      </NavLink>
    </div>
  );
};
