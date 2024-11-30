// import React, { useEffect, useState } from "react";
// import img from "../assets/p4.png";

function Aboutme() {
    

    return (
        <>

            <section
                className="about-section"
                style={{
                    textAlign: "center",
                    padding: "5px 20px",
                    // backgroundColor: "#0b1120",
                    color: "#fff"
                }}
            >
                <h2
                    style={{
                        fontSize: "2.5rem",
                        marginBottom: "20px"
                    }}
                >
                    About <span style={{ color: "#34c759" }}>Me</span>
                </h2>

                <div
                    className="about-content"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: "800px",
                        margin: "0 auto"
                    }}
                >
                    {/* <div
                        className="about-image"
                        style={{
                            position: "relative",
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            marginBottom: "20px",
                            overflow: "hidden",
                            border: "2px solid #4aa8ff"
                            
                        }}
                    >
                        <img
                            
                            src={img}
                            alt="Pritom"
                            style={{
                               
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                // filter: "brightness(0.8)"

                            }}
                            
                            
                        />
                    </div> */}
                    

                    <h3
                        style={{
                            fontSize: "1.8rem",
                            color: "#34c759",
                            marginBottom: "20px"
                        }}
                    >
                        Frontend Developer!
                    </h3>

                    <p
                        style={{
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            maxWidth: "700px",
                            marginBottom: "20px"
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam iure, provident iste quos
                         sequi vero excepturi impedit laboriosam nisi incidunt quisquam.
                    </p>

                    <p
                        style={{
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            maxWidth: "700px",
                            marginBottom: "20px"
                        }}
                    >
                        Quis eum odio ducimus neque quisquam reiciendis. Ut animi accusamus quaerat labore beatae repellat, nisi mollitia voluptatem.
                    </p>

                    <button
                        className="btn read-more"
                        style={{
                            padding: "10px 25px",
                            borderRadius: "30px",   
                            backgroundColor: "#34c759",
                            // #007bff
                            color: "#fff",
                            border: "none",
                            // cursor: "pointer",
                            fontSize: "1rem",
                            // transition: "background-color 0.3s ease"
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                    >
                        Read More
                    </button>
                </div>
            </section>

        </>
    )
};
export default Aboutme;