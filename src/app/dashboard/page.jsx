import React from "react";
import Card from "../../component/dashboard/card/card";
import styles from "./../../component/dashboard/dashboard.module.css";
import RightBar from "../../component/dashboard/rightbar/rightbar";
import Transactions from "../../component/dashboard/transactions/transaction";
import Chart from "../../component/dashboard/chart/chart";

export default function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}
