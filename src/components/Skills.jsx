function Skills() {

    const containerStyle = {
        color: "",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
    };

    const skillsContainerStyle = {
        width: "100%",
        maxWidth: "800px",
        textAlign: "center",
    };

    const titleStyle = {
        color: "#00aaff",
        fontSize: "28px",
        marginBottom: "30px",
    };

    const skillsSectionStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
    };

    const sectionStyle = {
        backgroundColor: "#16213e",
        borderRadius: "8px",
        padding: "20px",
        width: "100%",
        maxWidth: "370px",
        boxSizing: "border-box",
        marginBottom: "20px",
    };

    const sectionTitleStyle = {
        color: "#00aaff",
        fontSize: "20px",
        marginBottom: "15px",
    };

    const skillStyle = {
        marginBottom: "20px",
    };

    const skillLabelStyle = {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        marginBottom: "5px",
    };

    const progressBarStyle = {
        backgroundColor: "#333",
        borderRadius: "5px",
        overflow: "hidden",
        height: "10px",
    };

    const progressStyle = (width) => ({
        width: `${width}%`,
        height: "100%",
        background: "linear-gradient(90deg, #00aaff, #0066cc)",
    });

    return (
        <div style={containerStyle}>
            <div style={skillsContainerStyle}>
                <h1 
                 style={titleStyle}>
                    <span style={{color:"#0000"}} ></span>
                    My 
                    <span style={{ color: "#34c759" }}>Skills</span>
                 </h1>
                <div style={skillsSectionStyle}>
                    {/* Coding Skills Section */}
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>Coding Skills</h2>
                        {[
                            { name: "HTML", level: 80 },
                            { name: "CSS", level: 80 },
                            { name: "JavaScript", level: 65 },
                            { name: "Python", level: 75 },
                            // { name: "C++", level: 75 },
                            { name: "C", level: 75 },
                            { name: "Java", level: 75 },
                        ].map((skill, index) => (
                            <div key={index} style={skillStyle}>
                                <div style={skillLabelStyle}>
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div style={progressBarStyle}>
                                    <div style={progressStyle(skill.level)}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Professional Skills Section */}
                    <div style={sectionStyle}>
                        <h2 style={sectionTitleStyle}>Professional Skills</h2>
                        {[
                            { name: "bootstrap", level: 60 },
                            { name: "React", level: 60 },
                            { name: "Web Design", level: 85 },
                            { name: "Web Development", level: 67 },
                            { name: "Graphic Design", level: 85 },
                            { name: "SEO Marketing", level: 60 },
                        ].map((skill, index) => (
                            <div key={index} style={skillStyle}>
                                <div style={skillLabelStyle}>
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div style={progressBarStyle}>
                                    <div style={progressStyle(skill.level)}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Skills;
