import { Link } from "react-router-dom";
import "./HomeLifestyle.css";
import CarouselL from "./CarouselLifestyle/CarouselL";

export default function HomeMen() {
  return (
    <>
      <CarouselL />
      <br />
      <div className="banner1L">
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
      <div className="banner2L">
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
      <div className="categoriesL">
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1612817288484-6f916006741a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNzAwODU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>ACCESSORIES</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1547887537-6158d64c35b3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tc3R5bGV8fHx8fHwxNjkwNzAwODU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>PERFUMES</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1555820585-c5ae44394b79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLWplYW5zfHx8fHx8MTY5MDcwMDk5NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>SKINCARE</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1587045525473-4861b1f9b5b2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLWplYW5zfHx8fHx8MTY5MDcwMTAyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>HAIR</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?crop=entropy&cs=tinysrgb&fit=crop&fp-y=.15&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLXN1aXRzfHx8fHx8MTY5MDcwMTEzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BATH & BODY</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1567721913486-6585f069b332?crop=entropy&cs=tinysrgb&fit=crop&fp-y=.15&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLXN1aXRzfHx8fHx8MTY5MDcwMTEzNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
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
