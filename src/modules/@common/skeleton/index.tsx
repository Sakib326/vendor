import React from "react";
import styles from "./skeleton.module.scss";

export const Skeleton = ({
  width,
  height,
  className,
  style,
  variant = "rectangular",
  ...props
}: any) => {
  return (
    <div
      className={`${styles.skeleton} ${className ? className : ""}`}
      style={{
        width: width,
        height: height,
        ...(variant == "circle" && { borderRadius: "50%" }),
        ...style,
      }}
      {...props}
    ></div>
  );
};

export default Skeleton;
