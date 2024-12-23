import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [book, setBook] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/books/book/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    }
  }, [id]);

  // updating the data:

  const onSubmit = (data) => {
    const name = data?.name;
    const author = data?.author;
    const brand = data?.brand;
    const price = parseFloat(data?.price);
    const stock = parseFloat(data?.stock);
    const category = data?.category;
    const image = data?.image;
    const description = data?.description;
    const sellerEmail = user?.email;
    const product = {
      name,
      author,
      brand,
      price,
      stock,
      category,
      image,
      description,
      sellerEmail,
    };

    const token = localStorage.getItem("token");

    if (sellerEmail && id) {
      axios
        .patch(`http://localhost:4000/update-product/${id}`, product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.modifiedCount) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/my-books");
          }
        });
    }
  };

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-2xl text-center">আপডেট করুন</h1>
      <div className="w-full h-full border">
        <form onSubmit={handleSubmit(onSubmit)} className="md:card-body">
          {/* parent div  1*/}
          <div className="lg:flex gap-8">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder={book?.name}
                className="w-full rounded-md border border-black p-2"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-light">
                  name is required
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Author</span>
              </label>
              <input
                type="text"
                placeholder={book?.author}
                className="w-full rounded-md border border-black p-2"
                {...register("author", { required: true })}
              />
              {errors.author && (
                <p className="text-red-500 text-sm font-light">
                  Author is required
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder={book?.brand}
                className="w-full rounded-md border border-black p-2"
                {...register("brand", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm font-light">
                  Brand is required
                </p>
              )}
            </div>
          </div>

          {/* parent div 2 */}
          <div className="lg:flex gap-8">
            <div className="w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder={book?.price}
                className="w-full rounded-md border border-black p-2"
                {...register("price", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm font-light">
                  Price is required
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder={book?.stock}
                className="w-full rounded-md border border-black p-2"
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className="text-red-500 text-sm font-light">
                  Stock is required
                </p>
              )}
            </div>

            <div className="w-full">
              <label className="label">
                <span className="label-text">Product category</span>
              </label>
              <input
                type="text"
                placeholder={book?.category}
                className="w-full rounded-md border border-black p-2"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <p className="text-red-500 text-sm font-light">
                  Category is required
                </p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder={book?.image}
              className="w-full rounded-md border border-black p-2"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <p className="text-red-500 text-sm font-light">
                Image url is required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Product description</span>
            </label>
            <textarea
              type="text"
              placeholder={book?.description}
              className="w-full rounded-md border border-black p-2"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm font-light">
                Description is required
              </p>
            )}
          </div>

          <div className="my-8 ">
            <button type="submit" className="btn btn-secondary w-full">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
