import React from "react";
import { Link } from "react-router-dom";

const AllProductDetails = ({ product }) => {
  return (
    <div>
      <div
        key={product.id}
        className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500"
      >
        <img
          src={product.image_url}
          alt=""
          className="h-80 w-72 object-cover"
        />
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <p className="text-base  text-black truncate block capitalize">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              $ {product.price}
            </p>

            <div className="py-3">
              <Link to="/order">
                <button className="bg-orange-400 shadow-md hover:bg-orange-500 text-white font-bold rounded-full px-5 py-2">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
