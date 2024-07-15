import { Link } from "react-router-dom";
import "./HomeMen.css";
import CarouselM from "./CarouselMen/CarouselM";

export default function HomeMen() {
  return (
    <>
      <CarouselM />
      <br />
      <div className="banner1M">
        <div className="container1">
          <p>TOP DROPS</p>
        </div>
        <div className="container2">
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>DISCOVER</p>
          </Link>
        </div>
      </div>
      <br />
      <div className="banner2M">
        <div className="container1">
          <p>
            NEW <br /> LAUNCHES
          </p>
        </div>
        <div className="container2">
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>DISCOVER</p>
          </Link>
        </div>
      </div>
      <br />
      <div className="categoriesM">
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1526632503813-6f479409d7bf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLXRpZXx8fHx8fDE2OTA3MDA1Mzg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>ACCESSORIES</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1523381294911-8d3cead13475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNzAwODU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>TOPS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLWplYW5zfHx8fHx8MTY5MDcwMDk5NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BOTTOMS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1596767136869-df3232db23d2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLWplYW5zfHx8fHx8MTY5MDcwMTAyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>FOOTWEAR</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1574968699009-6426913fce69?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLXN1aXRzfHx8fHx8MTY5MDcwMTEzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>SUITS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d3813ad3ab19337aeb1700_project-02-gallery-02-p-1080.webp"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>OTHER</p>
        </div>
      </div>
    </>
  );
}
