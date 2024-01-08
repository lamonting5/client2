import "./Widget.scss";
import { IoIosArrowUp } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoShirt, IoReceipt } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";

function Widget({ type }) {
  const [datas, setDatas] = useState([]);
  let data;

  console.log(datas);
  useEffect(() => {
    async function getDatas() {
      const res = await axiosClient.get(
        type !== "profit" ? `${type}/${type}s` : ""
      );
      setDatas(res.data);
    }

    getDatas();
  }, []);

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "View all users",
        route: "/admin/users",
        icon: (
          <FaUserFriends
            className="icon"
            style={{
              backgroundColor: "rgba(255, 0,0,0.2)",
              color: "crimson",
            }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View all products",
        route: "/admin/products",
        icon: (
          <IoShirt
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0,128,0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all order",
        route: "/admin/orders",
        icon: (
          <IoReceipt
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165,32,0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;

    case "profit":
      data = {
        title: "PROFIT",
        isMoney: true,
        link: "View net profit",
        route: "/admin/profit",
        icon: (
          <GiReceiveMoney
            className="icon"
            style={{
              backgroundColor: "rgba(0, 128,0,0.2)",
              color: "green",
            }}
          />
        ),
      };
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {datas.length}
          {data.isMoney ? "$" : ""}
        </span>
        <Link to={data.route}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <IoIosArrowUp className="icon" />
          34 %
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
