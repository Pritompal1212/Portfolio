// "#f8f9fa"
function Contact() {
    return (
        <>
            
            <section
                id="contact"
                style={{
                    padding: "40px 0",
                    //backgroundColor: "#000"
                    // #0b1120
                }}
            >
                <div
                    classNameName="container"
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        textAlign: "center"
                    }}
                >
                    <h2
                        style={{
                            fontSize: "2rem",
                            marginBottom: "20px"
                        }}
                    >
                        Contact <span style={{ color: "#007bff" }}>Me!</span>
                    </h2>

                    <form action="#" method="post">
                        <div classNameName="form-group row" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                style={{
                                    flex: "1 1 100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ced4da",
                                    borderRadius: "4px",
                                    maxWidth: "100%",
                                    background:"0000"
                                }}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                style={{
                                    flex: "1 1 100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ced4da",
                                    borderRadius: "4px",
                                    maxWidth: "100%",
                                    background:"0000"
                                }}
                                required
                            />
                        </div>

                        <div classNameName="form-group row" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Mobile Number"
                                style={{
                                    flex: "1 1 100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ced4da",
                                    borderRadius: "4px",
                                    maxWidth: "100%",
                                    background:"0000"
                                }}
                                required
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Email Subject"
                                style={{
                                    flex: "1 1 100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ced4da",
                                    borderRadius: "4px",
                                    maxWidth: "100%",
                                    background:"0000"
                                }}
                                required
                            />
                        </div>

                        <div classNameName="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ced4da",
                                    borderRadius: "4px",
                                    background:"0000",
                                    
                                }}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer"
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            
        </>
    )
};
export default Contact;