import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Card from "../../sharedComponents/card/Card";
import FilterBar from "../../components/FilterBar";
import SearchBar from "../../components/SearchBar";
import SortByPrice from "../../components/SortByPrice";
import Loading from "../../sharedComponents/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(false);
    fetch(
      `http://localhost:4000/books?name=${search}&page=${page}&limit=${9}&category=${category}&brand=${brand}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setUniqueBrands(data?.brands);
        setUniqueCategory(data?.categories);
        setTotalPage(Math.ceil(data.totalProducts / 9));
      });
  }, [search, page, category, brand, sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-1 md:px-0">
      <h1 className="font-semibold text-2xl text-center my-12">All Products</h1>
      {/* searching */}
      <div className="lg:flex justify-between items-center w-full mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* content */}
      <div className="md:grid grid-cols-12 gap-2">
        <div className="col-span-2">
          <FilterBar
            uniqueBrands={uniqueBrands}
            uniqueCategory={uniqueCategory}
            handleReset={handleReset}
            setBrand={setBrand}
            setCategory={setCategory}
          />
        </div>
        <div className="col-span-10 border">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products?.length != 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 min-h-screen">
                  {products?.map((product) => (
                    <Card
                      key={product?._id}
                      product={product}
                      styles={"h-[450px]"}
                      iconsStyles={"text-2xl"}
                    ></Card>
                  ))}
                </div>
              ) : (
                <div className="flex w-full h-full justify-center items-center">
                  <h1 className="text-3xl font-bold"> No products Found!</h1>
                </div>
              )}
            </>
          )}

          {/* pagination */}
          <div className="flex justify-center items-center gap-2 my-8">
            <button
              className="p-4 btn border rounded-full border-black"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <p>
              Page
              {page} of {totalPage}
            </p>
            <button
              className="p-4 btn border rounded-full border-black"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPage}
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
