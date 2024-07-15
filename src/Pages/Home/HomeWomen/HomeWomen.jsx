import { Link } from "react-router-dom";
import CarouselW from "../HomeWomen/CarouselWomen/CarouselW";
import "./HomeWomen.css";

export default function HomeWomen() {
  return (
    <>
      {/* /https://source.unsplash.com/random/1600x500/?women-fashion */}
      <CarouselW />
      <br />
      <div className="banner1W">
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
      <div className="banner2W">
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
      <div className="categoriesW">
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1564139615082-01535600057f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFuZGJhZ3x8fHx8fDE2OTA2OTM4ODI&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BAGS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNjk0MDA0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>TOPS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1598911527323-ad9835b7dd47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tZmFzaGlvbnx8fHx8fDE2OTA2OTI4OTY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BOTTOMS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/flagged/photo-1553802922-5609062365b9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNjkzOTg1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>FOOTWEAR</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1591375372156-542495912da9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNjk0MTkw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BEAUTY</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d3f8b24ad0e43d683d7f0c_dropdown.webp"})`,
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
