import "./CarouselL.css";

export default function CarouselL() {
  return (
    <>
      <div className="sliderL">
        <div className="slidesL">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "10vh", margin: "0" }}>Essential </p>
              <p style={{ fontSize: "6vh", margin: "0" }}> Elegance</p>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide2-text">
              <p style={{ fontSize: "6vh", margin: "0" }}>abc</p>
              <p style={{ fontSize: "12vh", margin: "0" }}>abc </p>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide3-text">
              <p style={{ fontSize: "8vh", margin: "0" }}>NEW LAUNCH </p>
              <p style={{ fontSize: "6vh", margin: "0" }}>...</p>
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
