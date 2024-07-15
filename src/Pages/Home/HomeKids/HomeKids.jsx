import { Link } from "react-router-dom";
import "./HomeKids.css";
import CarouselK from "./CarouselKids/CarouselK";
export default function HomeKids() {
  return (
    <>
      {/* /https://source.unsplash.com/random/1600x500/?women-fashion */}
      {/* <CarouselK /> */}
      <CarouselK />
      <br />
      <div className="banner1K">
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
      <div className="banner2K">
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
      <div className="categoriesK">
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>COSTUMES</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>TOPS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1540479859555-17af45c78602?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>BOTTOMS</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1636130748629-655be0c60041?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>FOOTWEAR</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1620774760711-caa4c94d683a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p>DRESSES</p>
        </div>
        <div
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1526834527924-83a042ea7711?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"})`,
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
