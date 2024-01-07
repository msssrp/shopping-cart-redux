import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { removeQuantity } from "../redux/products/actions";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, imageURL, name, quantity, price, category } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
  };

  return (
    <div className="card md:w-96 bg-base-100 shadow-sm shadow-orange-200 border border-[#ffaa00] p-5 ">
      <figure className="relative">
        <img src={`${imageURL}`} alt="" className="h-80 w-full" />
        <div className="badge badge-secodary absolute top-3 right-3">
          {category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
          voluptate tenetur ducimus sunt recusandae omnis consequatur obcaecati,
          voluptatum aspernatur quasi? Veniam, aliquid. Expedita nostrum
          consequatur autem architecto deserunt iste a!
        </p>
      </div>
      <div className="flex justify-between">
        <p className="w-full">Available {quantity}</p>
        <p className="text-left text-yellow-500">${price}</p>
      </div>
      <div className="card-action mt-2 text-center ">
        <button
          className="btn btn-xl mt-4 btn-primary "
          disabled={quantity === 0}
          onClick={handleAddToCart}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
