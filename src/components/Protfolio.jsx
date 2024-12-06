
import img2 from "../assets/gui.png";

export default function Protfolio() {
  return (
    <div className="container px-3">
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={img2} alt="" />
              <div className="layer">
                <h3>My Portfolio</h3>
                <p>This is My Portfolio in HTML, CSS, JavaScript. </p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={img2} alt="" />
              <div className="layer">
                <h3>GUI Calculator</h3>
                <p>
                  This is Graphic User Interface Advance Calculator. In Python
                  tkinter library.{" "}
                </p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={img2} alt="" />
              <div className="layer">
                <h3>WordPress Web site</h3>
                <p>This is wordpress web site. Content Management System. </p>
                <a href="#">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}
