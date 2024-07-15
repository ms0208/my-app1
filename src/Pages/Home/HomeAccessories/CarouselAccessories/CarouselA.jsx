import "./CarouselA.css";

export default function CarouselA() {
  return (
    <>
      <div className="sliderA">
        <div className="slidesA">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "10vh", margin: "0" }}>Accessorize</p>
              <p style={{ fontSize: "6vh", margin: "0" }}>Your Life</p>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide2-text">
              <p style={{ fontSize: "6vh", margin: "0" }}>Dive into</p>
              <p style={{ fontSize: "12vh", margin: "0" }}>GLAMOUR </p>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide3-text">
              <p style={{ fontSize: "8vh", margin: "0" }}>NEW LAUNCH </p>
              <p style={{ fontSize: "6vh", margin: "0" }}>...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
