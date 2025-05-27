import React from "react";

type HeaderProps = {
  title: string;
  onDeposit?: () => void;
  onEditProfile?: () => void;
  onLogout?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  title,
  onDeposit,
  onEditProfile,
  onLogout,
}) => {
  return (
    <div className="md:flex md:items-center md:justify-between bg-white px-4 py-4 shadow-sm sm:px-6">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={onDeposit}
        >
          deposit
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={onEditProfile}
        >
          Edit Profile
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
