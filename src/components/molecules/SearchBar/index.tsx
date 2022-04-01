import React from 'react';

export interface ISearchBar extends JasesCommon.BaseProps {
  /**
   * Value of input text
   */
  value: string;

  /**
   * Placeholder of input text
   */
  placeholder: string;
  /**
   * on submit of input text
   */
  onSubmit: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;

  /**
   * click on input field
   */
  onClick: (e: any) => void;

  /**
   * on change of input text
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ placeholder, value, onSubmit, onChange, onClick }: ISearchBar) {
  return (
    <div className="mt-3 flex rounded-md">
      <div className="relative flex items-stretch flex-grow focus-within:z-10">
        <input
          autoComplete="on"
          type="text"
          name="walletAddr"
          id="walletAddr"
          className="focus:ring-indigo-500  bg-app-background-plain focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-2 sm:text-sm border-plain-contrast-light text-primary-dark"
          placeholder={placeholder}
          onKeyDown={(e) => e.key === "Enter" && onSubmit(e)}
          onChange={onChange}
          value={value}
          onClick={onClick}
        />
      </div>
      <button
        onClick={(e) => onSubmit(e)}
        type="submit"
        className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border-1 border-plain-contrast-light text-sm font-medium rounded-r-md  text-plain bg-app-background-plain hover:bg-app-background focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
