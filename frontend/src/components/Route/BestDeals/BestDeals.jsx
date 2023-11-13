import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    // const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    // const firstFive = allProductsData && allProductsData.slice(0, 5);
    setData(allProductsData);
  }, [allProducts]);

  return (
    <div>
      {console.log(data, "data")}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality Topis</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Topi")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>

      {/* Ajrak Section */}

      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality Ajrak</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Ajrak")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>

      {/* Waistcoat Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality Waistcoat</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Waistcoat")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>

      {/* bag Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality bag</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Bag")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>

      {/* shawl Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality Shawl</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Shawl")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
      {/* dress Section */}
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Finest Quality Dress</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data
                  .filter((i) => i.category === "Dress")
                  .slice(0, 5)
                  .map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
