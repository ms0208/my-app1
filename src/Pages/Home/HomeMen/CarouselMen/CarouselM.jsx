import "./CarouselM.css";

// https://source.unsplash.com/random/1600x500/?men-fashion

export default function CarouselM() {
  return (
    <>
      <div className="sliderM">
        <div className="slidesM">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "6vh", margin: "0" }}>LOOK SHARP</p>
              <p style={{ fontSize: "10vh", margin: "0" }}>FEEL GREAT</p>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide2-text">
              <p style={{ fontSize: "16vh", margin: "0" }}>STEP</p>
              <p style={{ fontSize: "6vh", margin: "0" }}>into style </p>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide3-text">
              <p style={{ fontSize: "8vh", margin: "0" }}>CONFIDENCE</p>
              <p style={{ fontSize: "8vh", margin: "0" }}>MEETS FASHION</p>
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
