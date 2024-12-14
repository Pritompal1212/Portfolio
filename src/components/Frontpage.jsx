import img from "../assets/p4.png";
function Frontpage() {
  return (
    <>
      <div
        className="container-fluid "
        style={{ background: "0000", height: "auto" }}
      >
        <div
          className="row justify-content-around py-5 flex-column-reverse flex-md-row align-content-center text-center text-md-start"
          style={{ height: "100%" }}
        >
          <div
            style={{
              flexBasis: "50%",
              
            }}
            className="col-12 col-sm-12 py-3 col-md-6 d-flex px-2 px-md-5 align-content-center flex-column justify-content-center"
          >
            <h1>
              HI, I'm <span style={{ color: "green" }}>Pritom Pal</span> <br />
              Software Engineer
            </h1>
            <p>
            Proficient Web and Mobile App Developer with a focus on Data Analytics.
            </p>
            <div>
              <button
                className="download-button"
                style={{
                  width: "fit-content",
                  borderRadius: "10px",
                }}
              >
                Download CV
              </button>
            </div>
          </div>

          <div
            style={{
              flexBasis: "50%",
              display: "flex", // Add flex to center content
              justifyContent: "center", // Horizontally center
              alignItems: "center", // Vertically center
              height: "100%",
            }}
            className="col-12 col-sm-12 col-md-4"
          >
            <div className="border-animation-wrapper ">
              <img src={img} alt="bamboo" className="imageStyle" />
              <div className="moving-border-1 "></div>
              <div className="moving-border-2 "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
