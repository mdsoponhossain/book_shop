const SortByPrice = ({ setSort }) => {
  return (
    <select
      onChange={(e) => setSort(e.target.value)}
      name="sort"
      className="p-[11px] max-w-md w-40 rounded-md border border-black"
    >
      <option value="asc">Low to high</option>
      <option value="dsc">High to low</option>
    </select>
  );
};

export default SortByPrice;
