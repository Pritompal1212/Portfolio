import img from "../assets/p4.png";
function Frontpage() {
  return (
    <>
      <div
        className="container-fluid "
        style={{ height: "700px", background: "0000" }}
      >
        <div
          className="row py-5 justify-content-around flex-column-reverse flex-md-row align-content-center text-center text-md-start"
          style={{ height: "95vh" }}
        >
          <div className="col-12  col-sm-12 col-md-6 align-self-center">
            <h1 className="fs-1 ">
              <span style={{ color: "#34c759" }}>HI, Im </span>{" "}
              <span style={{ color: "#ffffff" }}>Pritom Pal</span>
            </h1>
            <h3
              className="fs-3"
              style={{ color: "#34c759", marginBottom: "10px" }}
            >
              Software Engineer
            </h3>
            <p
              style={{ fontSize: "1rem", lineHeight: "1.5", color: "#eaeaea" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              blanditiis consequatur possimus nihil error in obcaecati.
            </p>
            <button className="download-button">Download CV</button>
          </div>

          <div className="col-10 col-sm-12 col-md-4 align-self-center d-flex justify-content-center mt-3 position-relative border-animation-wrapper">
            <img
              src={img}
              alt="bamboo"
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto", // Maintain aspect ratio
                objectFit: "cover",
                borderRadius: "50%",
                backgroundColor: "#ffffe0",
                padding: "10px auto",
                animation: "bulbGlow 1s infinite ease-in-out",
                // boxShadow:
                  // "0px /0px 50px rgba(255, 255, 150, 0.8), 0px 0px 100px rgba(255, 255, 200, 0.6), 0px 0px 150px rgba(255, 255, 255, 0.5), 0px 0px 200px rgba(255, 255, 255, 0.4)",
              }}
            />
            <div className="moving-border-1"></div>
            <div className="moving-border-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontpage;
