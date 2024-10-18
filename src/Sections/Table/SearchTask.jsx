
import { Label, TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';


function SearchTask() {
  return (
    <div className="flex justify-between items-center p-2 px-4">
      <h2 className="text-2xl font-bold">Your Task</h2>
      <div>
        <div className="max-w-md">
          <TextInput id="email4" type="email" rightIcon={FaSearch} required />
        </div>
      </div>
    </div>
  );
}

export default SearchTask