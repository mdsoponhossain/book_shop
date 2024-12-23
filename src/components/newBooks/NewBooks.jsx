import { useEffect, useState } from "react";
import Card from "../../sharedComponents/card/Card";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
const NewBooks = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://boi-bazar-server-five.vercel.app/new-books")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        titleText={"নতুন বই সমূহ"}
        style={"text-center "}
      ></SectionTitle>
      <div className="max-w-7xl mx-auto h-fit mt-5 grid sm:grid-cols-2 md:grid-cols-3 px-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products?.map((product) => (
          <Card
            key={product?._id}
            product={product}
            styles={"h-[450px]"}
            iconsStyles={"text-2xl"}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
