import "./CarouselK.css";

export default function CarouselW() {
  return (
    <>
      <div className="sliderK">
        <div className="slidesK">
          <div className="slide-1">
            <div className="slide1-text">
              <p style={{ fontSize: "17vh", margin: "0" }}>35% OFF</p>
              <p style={{ fontSize: "6vh", margin: "0" }}>SUMMER COLLECTION</p>
            </div>
          </div>
          <div className="slide-2">
            <div className="slide2-text">
              <p style={{ fontSize: "16vh", margin: "0" }}>20% OFF</p>
              <p style={{ fontSize: "8vh", margin: "0" }}>ON KIDS FOOTWEAR</p>
            </div>
          </div>
          <div className="slide-3">
            <div className="slide3-text">
              <p style={{ fontSize: "16vh", margin: "0" }}>DISCOVER</p>
              <p style={{ fontSize: "8vh", margin: "0" }}>
                YOUR KIDS PERFECT FIT
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
