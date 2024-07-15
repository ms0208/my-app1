import React, { useState } from "react";
import "./ProductInfo.css";

export default function ProductsInfo() {
  const handleAddToCart = () => {};
  const handleBuyNow = () => {};

  const pic = [
    "https://static.zara.net/photos///2023/I/0/2/p/4087/325/527/2/w/1920/4087325527_2_1_1.jpg?ts=1691571266595",
    "https://static.zara.net/photos///2023/I/0/2/p/4087/325/527/2/w/1920/4087325527_2_3_1.jpg?ts=1691571263660",
    "https://static.zara.net/photos///2023/I/0/2/p/4087/325/527/2/w/1920/4087325527_6_1_1.jpg?ts=1691407624543"
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollTop);
  };

  return (
    <>
      <div className="product-info">
        <div className="left">
          <div className="slider-container" onScroll={handleScroll}>
            <div
              className="slider"
              style={{ transform: `translateY(-${scrollPosition}px)` }}
            >
              {pic.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`pic ${index}`}
                  className="image"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="item-name">H&M Oversized Fit T-shirt</div>
          <div className="price"> ₹ 1,499</div>
          <div className="size">
            <li>XL</li>
            <li>L</li>
            <li>M</li>
            <li>S</li>
            <li>XS</li>
          </div>
          <div className="buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            <button className="buy-now" onClick={handleBuyNow}>
              BUY NOW
            </button>
          </div>
          <div class="about-product">
            <div class="headings">
              <h2 class="description-heading">Description</h2>
              <h2 class="reviews-heading">Reviews</h2>
            </div>
            <div class="content">
              <p id="description-text">
                These slim-fit pants are made of soft mohair wool. With their
                angled slash pockets and ironed pleat, they have a sophisticated
                look. The fabric triangle logo decorates the garment on the
                back.
                <ul>
                  <li>Fit: Oversized</li>
                  <li> Neckline: Round neck</li>
                  <li>Length: Regular length</li>
                  <li>Sleeve Length: Short sleeve</li>
                  <li> Material: Cotton, Jersey</li>
                  <li> Composition: Cotton 100%</li>
                </ul>
              </p>
              {/* <p id="reviews-text">This is the reviews text.</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
