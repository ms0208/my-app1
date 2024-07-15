import "./pp.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faChevronDown } from "@fortawesome/free-regular-svg-icons";
export default function PP() {
  return (
    <>
      <div className="product-listing-head">MEN'S T-SHIRT</div>

      <div className="product-filter-container">
        <ul>
          <li>Sort By</li>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: "#ffffff" }}
            className="sort-icon"
          />
          <li>Size</li>
          <li>Colour</li>
          <li>Fit</li>
        </ul>
      </div>

      <div className="product-listing-container">
        <ul className="product-listing">
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://static.zara.net/photos///2023/I/0/2/p/4087/325/527/2/w/1920/4087325527_2_1_1.jpg?ts=1691571266595"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>H&M Oversized Fit T-shirt</h2>
                <p class="rate">Rs. 1,499</p>
                <p class="colour"> Green, Blue, Cream</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2Ff8%2F4ff8c52af78f53cd04ee95b3fa87befabd574f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>H&M Long-sleeved polo shirt</h2>
                <p class="rate">Rs. 1,699</p>
                <p class="colour"> Black</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://static.zara.net/photos///2023/I/0/2/p/0962/322/615/2/w/750/0962322615_2_1_1.jpg?ts=1688718276217"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>ZARA printed t-shirt</h2>
                <p class="rate">Rs. 1,899</p>
                <p class="colour"> Orange, White </p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://static.zara.net/photos///2023/I/0/2/p/4092/301/800/2/w/750/4092301800_2_1_1.jpg?ts=1688552338355"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>ZARA T-shirt with contrast patch</h2>
                <p class="rate">Rs. 2,299</p>
                <p class="colour"> Black, Khaki green</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://static.zara.net/photos///2023/I/0/2/p/3665/301/022/2/w/750/3665301022_2_1_1.jpg?ts=1692359829670"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>ZARA Tulle t-shirt with abstract print</h2>
                <p class="rate">Rs. 2,199</p>
                <p class="colour"> Black</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://static.zara.net/photos///2023/I/0/2/p/4087/322/707/2/w/750/4087322707_2_1_1.jpg?ts=1690970056644"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>ZARA striped textured t-shirt</h2>
                <p class="rate">Rs. 2,599</p>
                <p class="colour"> Camel</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F9e%2Fc19e540d64097516c48bb3776bcdf4038413f941.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>COOLMAX® Loose Fit T-shirt</h2>
                <p class="rate">Rs. 1,499</p>
                <p class="colour"> Burgundy</p>
              </div>
            </Link>
          </li>
          <li className="product-item">
            <Link to="/product" className="product-link">
              <div className="image-container">
                <img
                  src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2Ff8%2F4ff8c52af78f53cd04ee95b3fa87befabd574f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                  alt="product"
                ></img>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: "#6e6e6e" }}
                  className="heart-icon"
                />
              </div>

              <div class="item-details">
                <h2>H&M Long-sleeved polo shirt</h2>
                <p class="rate">Rs. 1,699</p>
                <p class="colour"> Black</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
