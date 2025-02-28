const Resume = () => {
    return (
      <div style={styles.container}>
        <h1>My Resume</h1>
        <p>Download my resume below.</p>
        <a href="/resume.pdf" download style={styles.button}>Download Resume</a>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      paddingTop: "160px", // Ensures spacing below navbar
    },
    button: {
      background: "#4caf50",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "16px",
      marginTop: "15px",
      transition: "all 0.3s ease-in-out",
      fontWeight: "bold",
    },
  };
  
  export default Resume;
  