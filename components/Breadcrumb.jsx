import styles from "../styles/Order.module.scss";
const Breadcrumb = () => {
  return (
    <div className="bg-[#F6F6F6] flex justify-center p-14 w-full">
      <div className={styles.crumb}>
        <span className={styles.active}>
          <a>Select Shipping Info</a>
        </span>
        <span className={styles.active}>
          <a>Select Delivery Info</a>
        </span>
        <span>
          <a>Payment Option</a>
        </span>
        <span>
          <a>Confirmation</a>
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
