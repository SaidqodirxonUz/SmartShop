import React from "react";
import useProducts from "../Hooks/useProducts";
import More from "../Components/More";
import LoadMore from "../Components/LoadMore";

const MoreInfo = () => {
  const [products, loading] = useProducts();

  return (
    <>
      <div className="cardsArea">
        {loading ? <LoadMore /> : <More product={products} />}
      </div>
    </>
  );
};

export default MoreInfo;
