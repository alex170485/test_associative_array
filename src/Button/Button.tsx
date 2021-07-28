import React from "react";
import { VARIANT, SIZE } from "./const";
import styles from "./styles.module.scss";

interface IButton {
  variant?: VARIANT;
  size?: SIZE;
}

const VARIANT_CLASS_MAP = {
  [VARIANT.RED]: styles.testClass,
  [VARIANT.BLUE]: styles.testClassUpd,
  [VARIANT.GREEN]: styles.testClassGreen
};

const SIZE_CLASS_MAP = {
  [SIZE.SMALL]: styles.sizeSmall,
  [SIZE.MEDIUM]: styles.sizeMedium,
  [SIZE.BIG]: styles.sizeBig
};

const MyButton: React.FC<IButton> = ({ variant, size }) => {

  return (
    <button
      type="button"
      className={`${VARIANT_CLASS_MAP[variant]} ${SIZE_CLASS_MAP[size]}`}
    >
      button
    </button>
  );
};

MyButton.defaultProps = {
  variant: VARIANT.RED,
  size: SIZE.MEDIUM
};

export default MyButton;
