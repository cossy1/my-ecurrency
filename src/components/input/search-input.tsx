import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({placeholder}) => {
  return (
    <div className="relative mx-auto w-full">
      <div className="absolute inset-y-0 left-0 lg:pl-14 pl-8 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full lg:pl-24 pl-16 pr-3 py-7 border border-gray-300 rounded-[10px] leading-5 bg-white focus:outline-none sm:text-sm"
      />
    </div>
  );
};

export default SearchInput;