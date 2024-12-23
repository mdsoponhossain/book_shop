import { IoMdSearch } from "react-icons/io";
const SearchBar = ({ handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex items-center gap-[2px]">
      <input
        type="text"
        name="search"
        placeholder="Search Products"
        className="max-w-md p-[11px] border border-black rounded-l-md"
      />
      <button className="btn btn-secondary rounded-l-none rounded-r-md  ">
        <IoMdSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
