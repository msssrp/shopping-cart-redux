import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";
const AddProduct = () => {

    const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data))
    reset()
  }

  return (
    <div className="formContainer">
      <h4 className="fomrTitle">Add new Product</h4>
      <form
        className="space-y-4 text-[#534FAF]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label htmlFor="productName">Product Name</label>
          <input type="text" name="productName" {...register("name", { required: true })} id="productName" className="addProductInput" />
            {errors.name && <span className="text-red-500">This product name is required</span>}

        </div>
        <div className="space-y-2">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" {...register("category", { required: true })}className="addProductInput">
            <option >Select a categoty</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
          </select>
            {errors.category && <span className="text-red-500">This category is required</span>}
        </div>
        <div className="space-y-2">
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="imageUrl" {...register("imageUrl", { required: true })} id="imageUrl" className="addProductInput" />
            {errors.imageUrl && <span className="text-red-500">This image url is required</span>}

        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input type="number" name="price" {...register("price", { required: true , min:0 })} id="price" className="addProductInput" />
          {errors.price && <span className="text-red-500">This price is required</span>}
          </div>
         <div className="space-y-2">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="lws-inputQuantity" {...register("quantity", { required: true , min:0 })} className="addProductInput" />
            {errors.quantity && <span className="text-red-500">This quantity is required</span>}
          </div> 
        </div>
        <button type="submit" className="submit bg-indigo-600 text-white">Add product</button>
      </form>
    </div>
  );
};

export default AddProduct;
