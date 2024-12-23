import { useForm } from "react-hook-form";
// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);

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

    if (sellerEmail) {
      axios
        .post("http://localhost:4000/add-product", product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product added successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="w-full h-full">
      <h1 className="font-bold text-2xl text-center">একটি বই যোগ করুন</h1>
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
                placeholder="Name"
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
                placeholder="Author"
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
                placeholder="Brand"
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
                placeholder="Price"
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
                placeholder="Stock"
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
                placeholder="category"
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
              placeholder="Image url"
              className="w-full rounded-md border border-black p-2"
              {...register("image", { required: true })}
            />
            {errors.imageURL && (
              <p className="text-red-500 text-sm font-light">
                ImageURL is required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Product description</span>
            </label>
            <textarea
              type="text"
              placeholder="Product description"
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
              জমা দিন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
