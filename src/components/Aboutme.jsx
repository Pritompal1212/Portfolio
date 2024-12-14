// import React, { useEffect, useState } from "react";
import img from "../assets/p4.png";

function AboutMe() {
  const styles = {
    aboutMe: {
      backgroundColor: "#1d1d1d",
      color: "white",
      padding: "100px 0",
    },
    heading2: {
      fontSize: "3rem",
      color: "white",
    },
    heading3: {
      fontSize: "1.75rem",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: "30px",
    },
    highlight: {
      color: "#00e0ff",
    },
    aboutImageContainer: {
      position: "relative",
    },
    aboutImageCircle: {
      width: "300px",
      height: "300px",
      backgroundColor: "transparent",
      border: "6px solid #00e0ff",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
    },
    profileImg: {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    btnPrimary: {
      backgroundColor: "#00e0ff",
      borderColor: "#00e0ff",
      boxShadow: "0 5px 15px rgba(0, 224, 255, 0.5)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
    },
    btnPrimaryHover: {
      backgroundColor: "#00c4e0",
      borderColor: "#00c4e0",
      boxShadow: "0 5px 25px rgba(0, 224, 255, 0.7)",
    },
  };

  return (
    <div style={styles.aboutMe} className="about-me d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Image with Circle Background */}
          <div className="col-md-6 text-center">
            <div
              style={styles.aboutImageContainer}
              className="about-image-container"
            >
              <div
                style={styles.aboutImageCircle}
                className="about-image-circle"
              >
                <img
                  src={img}
                  alt="Profile"
                  style={styles.profileImg}
                  className="profile-img-a"
                />
              </div>
            </div>
          </div>

          {/* About Me Text Content */}
          <div className="col-md-6">
            <h2 style={styles.heading2}>
              About{" "}
              <span style={styles.highlight} className="highlight">
                Me
              </span>
            </h2>
            <h3 style={styles.heading3}>Web Developer Extraordinaire!</h3>
            <p style={styles.paragraph}>
              I’m Pritom Pal, and I’m excited to share my journey with you. This
              page is a glimpse into my expertise, showcasing the skills and
              knowledge I’ve cultivated in technology and development. Whether
              you're here to explore potential collaborations, learn more about
              my projects, or simply connect, you’re in the right place.
            </p>

            {/* Read More Button */}
            <a
              href="#"
              style={styles.btnPrimary}
              className="btn btn-primary btn-shadow"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
