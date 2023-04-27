import React, { useEffect, useState } from "react";
import styles from "../../../styles/Slider.module.css";
import Card from "../../Card";
import { stores } from "./data";
import classes from "../../../styles/Store.module.css";
const Store = ({ inputValue, searchInput }) => {
  const [end, setEnd] = useState(20);
  const [page, setPage] = useState({ startPoint: 0, endPoint: end });
  const [loading, setLoading] = useState(true);
  const newData = !!inputValue
    ? stores
        .filter((item) => item.merchant.toLowerCase().includes(inputValue))
        .slice(page.startPoint, page.endPoint)
    : stores.slice(page.startPoint, page.endPoint);

  const handleInfiniteScroll = () => {
    if (
      window.scrollY + window.innerHeight + 1>=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setEnd(end + 20);
      setPage({
        startPoint: 0,
        endPoint: end,
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [page]);

  return (
    <section className={styles.sliderContainer}>
      <div>
        <h4>TOP CASHBACK STORES</h4>
        <div className={classes.storeContainer}>
          {newData.length ?
          <>
          {newData.map((item) => {
            return (
              <Card className={classes.storeCard} key={item.id}>
                <img src={item.logo} className={classes.storeImg} />
                <p>{item.merchant}</p>
              </Card>
            );
          })}
          </>
          :<h3>No result found</h3>
        }
        </div>
        {loading && <h5 className={classes.loader}>Loading...</h5>}
      </div>
    </section>
  );
};

export default Store;
