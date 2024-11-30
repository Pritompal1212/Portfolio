import React, { useEffect, useState } from "react";
import img from "../assets/p4.png";
import "./App.css";

function Frontpage() {
    const [imageSize, setImageSize] = useState({ width: "310px", height: "300px" });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 576) {
                setImageSize({ width: "250px", height: "250px" });
            } else {
                setImageSize({ width: "310px", height: "300px" });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="container-fluid " style={{ height: "700px", background: "0000" }}>
                <div className="row h-100 justify-content-around align-content-center">
                    <div className="col-12 col-sm-12 col-md-6 align-self-center">
                        <h1 className="fs-1" style={{ marginBottom: "10px" }}>
                            <span style={{ color: "#34c759" }}>HI, I'm </span>{" "}
                            <span style={{ color: "#ffffff" }}>Pritom Pal</span>
                        </h1>
                        <h3 className="fs-3" style={{ color: "#34c759", marginBottom: "15px" }}>
                            Software Engineer
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#eaeaea" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis blanditiis consequatur
                            possimus nihil error in obcaecati.
                        </p>
                        <button className="download-button">Download CV</button>
                    </div>
                    <div
                        className="col-11 col-sm-12 col-md-3 d-flex justify-content-center mt-4 position-relative border-animation-wrapper"
                    >

                        <img

                            src={img}
                            alt="bamboo"
                            style={{
                                width: "350px",
                                height: "350px", // Matches wrapper
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}


                        />
                        <div className="moving-border-1"></div>
                        {/* Second Circular moving border */}
                        <div className="moving-border-2"></div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Frontpage;
