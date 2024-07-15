import "./CarouselB.css";

export default function CarouselM() {
  return (
    <>
      <div className="sliderB">
        <div className="slidesB">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "10vh", margin: "0" }}>DISCOVER </p>
              <p style={{ fontSize: "6vh", margin: "0" }}>Timeless Elegance</p>
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
              <p style={{ fontSize: "6vh", margin: "0" }}>
                Take the scent-er stage
              </p>
            </div>
          </div>

          {/* <div
            id="slide-4"
            style={{
              backgroundImage: `url(
                ${"https://source.unsplash.com/random/1600x600/?women-fashion"}
              )`
            }}
          ></div>
          <div
            id="slide-5"
            style={{
              backgroundImage: `url(
                ${"https://source.unsplash.com/random/1600x600/?women-fashion"}
              )`
            }}
          ></div> */}
        </div>
      </div>
    </>
  );
}
