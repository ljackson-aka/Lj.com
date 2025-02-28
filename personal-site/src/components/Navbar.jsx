import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [position, setPosition] = useState(40); // Start slightly above content

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY + 40); // Moves down dynamically as user scrolls
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{ ...styles.navbar, top: `${position}px` }}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.link} className="nav-link">Home</Link>
        <Link to="/resume" style={styles.link} className="nav-link">Resume</Link>
        <Link to="/appstore" style={styles.link} className="nav-link">AppStore</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(20, 20, 20, 0.85)",
    padding: "12px 30px",
    borderRadius: "10px",
    zIndex: 1000,
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    transition: "top 0.2s ease-out",
  },
  navContainer: {
    display: "flex",
    gap: "25px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    position: "relative",
    transition: "all 0.3s ease-in-out",
  },
};

// Add this CSS in your global styles or index.css for the hover effect
const hoverStyle = `
  .nav-link::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: #4caf50;
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover::after {
    width: 100%;
    left: 0;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }
`;

// Injecting the CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverStyle;
document.head.appendChild(styleSheet);

export default Navbar;
