import React from "react";
import { useCallback, useState } from "react";
import { products } from "../../../staticData";

export default function ProductList() {
       const [search, setSearch] = useState("");
       const [cart, setCart] = useState([])

       // const addToCart = (product) => {
       //        console.log("Added");
       // };

       const addToCart = useCallback((product) => {
              console.log(product.name, "added");
              // setCart((prev) => [...prev, product]);
       }, []);

       console.log("Parent component re-render");
       // console.log(cart);

       return (
              <>
                     <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search..."
                     />

                     {products.map((product) => (
                            <ProductCard
                                   key={product.id}
                                   product={product}
                                   addToCart={addToCart}
                            />
                     ))}
              </>
       );
}


const ProductCard = React.memo(({ product, addToCart }) => {
       console.log(`${product.name} Rendered`);

       return (
              <div>
                     <h2>{product.name}</h2>

                     <button onClick={() => addToCart(product)}>
                            Add To Cart
                     </button>
              </div>
       );
});
