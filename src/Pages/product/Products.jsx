// import { Link } from "react-router-dom";
import "./Products.css";
import ProductInfo from "./ProductInfo";
import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <ProductInfo />

      <div className="like">
        <h3>You may also like</h3>
        <div className="list-container">
          <ul className="product-list">
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2Ff8%2F4ff8c52af78f53cd04ee95b3fa87befabd574f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>H&M Long-sleeved polo shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/0962/322/615/2/w/750/0962322615_2_1_1.jpg?ts=1688718276217"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA printed t-shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/4092/301/800/2/w/750/4092301800_2_1_1.jpg?ts=1688552338355"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA T-shirt with contrast patch</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/3665/301/022/2/w/750/3665301022_2_1_1.jpg?ts=1692359829670"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA Tulle t-shirt with abstract print</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/4087/322/707/2/w/750/4087322707_2_1_1.jpg?ts=1690970056644"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA striped textured t-shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F9e%2Fc19e540d64097516c48bb3776bcdf4038413f941.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>COOLMAX® Loose Fit T-shirt</h2>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="recent">
        <h3>Recently visited</h3>
        <div className="list-container">
          <ul className="product-list">
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/3665/301/022/2/w/750/3665301022_2_1_1.jpg?ts=1692359829670"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA Tulle t-shirt with abstract print</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/4087/322/707/2/w/750/4087322707_2_1_1.jpg?ts=1690970056644"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA striped textured t-shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F9e%2Fc19e540d64097516c48bb3776bcdf4038413f941.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>COOLMAX® Loose Fit T-shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2Ff8%2F4ff8c52af78f53cd04ee95b3fa87befabd574f53.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>H&M Long-sleeved polo shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/0962/322/615/2/w/750/0962322615_2_1_1.jpg?ts=1688718276217"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA printed t-shirt</h2>
                </div>
              </Link>
            </li>
            <li className="list-item">
              <Link to="/product" className="product-link">
                <div className="img-container">
                  <img
                    src="https://static.zara.net/photos///2023/I/0/2/p/4092/301/800/2/w/750/4092301800_2_1_1.jpg?ts=1688552338355"
                    alt="product"
                  ></img>
                </div>

                <div class="list-item-details">
                  <h2>ZARA T-shirt with contrast patch</h2>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
