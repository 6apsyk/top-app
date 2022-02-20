import React from "react";
import { Htag, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponentProps";
import styles from "./TopPageComponent.module.css";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={"h1"} children={page.title} />
        {products && <Tag color={"gray"} size="m" children={products.length} />}
        <span>Сортировка</span>
      </div>
    </div>
  );
};
