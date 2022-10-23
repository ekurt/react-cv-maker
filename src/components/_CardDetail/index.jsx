import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import styles from "./index.module.css";

export const CardDetail = ({ data, setter, print }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(setter(data.filter((item) => item._id !== id)));
  };

  if (data.length !== 0) {
    return (
      <div className={styles.cardDetail}>
        <hr className={styles.hr} />
        {React.Children.toArray(
          data.map((item) => {
            let result = "";

            return (
              <div className={styles.item}>
                <div className={styles.title}>
                  {React.Children.toArray(
                    print.map((it) => {
                      return <span>{item[it]}</span>;
                    })
                  )}
                </div>
                <FaTimes
                  className={styles.icon}
                  onClick={() => {
                    handleRemoveItem(item._id);
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    );
  }
};
