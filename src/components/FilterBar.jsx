import { TbFilter } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";

const FilterBar = ({
  handleReset,
  setCategory,
  setBrand,
  uniqueCategory,
  uniqueBrands,
}) => {
  return (
    <div className="bg-gray-200 h-full w-full md:min-h-screen p-4 rounded-md">
      <div className="flex items-center gap-1">
        <TbFilter size={24} />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>

      <div className="mt-8 flex flex-col gap-2 items-center">
        <div className="w-full">
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="p-[11px] max-w-md w-full rounded-md border border-black"
          >
            <option value="">Brands</option>
            {uniqueBrands?.map((brand, index) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="p-[11px] max-w-md w-full rounded-md border border-black"
          >
            <option value="">Categories</option>
            {uniqueCategory?.map((category, index) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleReset}
        className="btn btn-secondary mt-4 w-full btn-primary flex items-center"
      >
        <p>Reset</p>
        <GrPowerReset />
      </button>
    </div>
  );
};

export default FilterBar;
