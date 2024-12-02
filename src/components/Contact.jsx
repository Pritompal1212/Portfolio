
export default function Contact() {
  return (
    <div className="container px-3 mt-5">
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fas fa-paper-plane"></i>huncyoms@gmail.com
              </p>
              <p>
                <i className="fas fa-phone-square-alt"></i>8986983491
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/wzzg.gzzw" target="_blank">
                  <i className="fa-brands fa-facebook"></i>{" "}
                </a>
                <a href="https://twitter.com/OMSAH_84?s=08" target="_blank">
                  <i className="fab fa-twitter-square"></i>
                </a>
                <a
                  href="https://instagram.com/omsah_84?igshid=ZDdkNTZiNTM="
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/omsah84" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/omsah84" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <a href="image/OMSAH.pdf" download className="btn btn2">
                {" "}
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your message"
                  required
                >
                  {" "}
                </textarea>
                <button type="submit" className="btn btn2">
                  {" "}
                  Submit
                </button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
