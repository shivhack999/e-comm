import images1 from "../../assets/shoes.png";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import "./cardStyle.css";

const card = () => {
  return (
    <>
      <a href="delails" className="card-outer">
        <div
          className="card rounded-0 p-2 pb-0"
          style={{ width: "16rem", height: "24rem" }}
        >
          <img src={images1} className="card-img-top rounded-0" alt="..." />
          <a href="whilist" className="wishlist-icon">
            <FaHeart />
          </a>
          <div className="card-body">
            <h6 className="card-title" style={{ color: "#FF693A" }}>
              <button className="productOff">55% off</button> Limited time
              offers
            </h6>
            <p className="card-text">
              <MdOutlineCurrencyRupee className="rupee" /> 400.00
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default card;
