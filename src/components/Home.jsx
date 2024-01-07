import React from "react";
import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";
const Home = () => {
  const products = useSelector((state) => state.products);
  return (
    <main className="py-8 max-w-7xl mx-auto px-4">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1">
            {products.length ? (
              products.map((product) => (
                <Porductitem key={product.id} product={product} />
              ))
            ) : (
              <div>No Product</div>
            )}
          </div>
        </div>
        <div>
          <AddProduct />
        </div>
      </div>
    </main>
  );
};

export default Home;
