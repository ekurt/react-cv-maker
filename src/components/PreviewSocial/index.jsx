import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "../../hooks";
import styles from "./index.module.css";

export const PreviewSocial = () => {
  const { social } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (social.length !== 0) {
    items = React.Children.toArray(
      social.map((item) => {
        let prefix = "";

        if (item.name === "Twitter") prefix = "https://twitter.com/";
        else if (item.name === "Github") prefix = "https://github.com/";
        else if (item.name === "LinkedIn")
          prefix = "https://www.linkedin.com/in/";
        else {
          if (!item.link.includes("https://") && !item.link.includes("http://"))
            prefix = "https://";
          else prefix = "";
        }

        return (
          <>
            <div className={styles.item}>
              <strong>{item.name}</strong>
            </div>
            <div>
              <a href={prefix + item.link} target="_blank">
                {prefix !== "https://" && prefix !== "http://" && prefix !== ""
                  ? "@"
                  : ""}
                {item.link}
              </a>
            </div>
          </>
        );
      })
    );
  }

  return (
    <div className={styles.container}>
      {social.length !== 0 && (
        <>
          <div
            className={styles.title}
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.social_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
};
