import React from "react";

const Resume = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Experience</h1>

        {/* Download Button */}
        <a
          href="/ljfullstack.pdf"  // Direct link to the PDF in the public folder
          download="Landrick_Jackson_Resume.pdf"
          style={styles.downloadButton}
        >
          Download Resume
      </a>


        {/* Scrollable Resume Section */}
        <div style={styles.scrollContainer}>
          {/* Header Section */}
          <header style={styles.header}>
            <h2 style={styles.name}>Landrick Jackson</h2>
            <p style={styles.contact}>
              {" "}
              <a href="mailto:Landrick.jackson@icloud.com" style={styles.link}>
                Landrick.jackson@icloud.com
              </a>{" "}
              |{" "}
              <a href="https://landrickjackson.com" style={styles.link}>
                landrickjackson.com
              </a>
            </p>
          </header>

          {/* Professional Experience */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Professional Experience</h3>

            <div style={styles.job}>
              <h4 style={styles.jobTitle}>Curaleaf – Sarasota, FL</h4>
              <p style={styles.jobPosition}>Lead Store Associate (Dec 2023 – Present)</p>
              <ul style={styles.jobList}>
                <li>Developed data-driven sales techniques that increased total revenue, average transaction value, and transaction efficiency.</li>
                <li>Automated and maintained Key Performance Indicator (KPI) tracking, leveraging data analytics for performance improvements.</li>
                <li>Managed daily operations, inventory audits, and compliance processes, ensuring seamless adherence to state regulations.</li>
                <li>Designed and implemented digital zoning charts to optimize team workflow and efficiency on high-volume sales days.</li>
                <li>Acted as Manager on Duty, leading teams through compliance audits and state inspections.</li>
              </ul>
            </div>

            <div style={styles.job}>
              <h4 style={styles.jobTitle}>Sarasota Memorial Hospital – Sarasota, FL</h4>
              <p style={styles.jobPosition}>IT Associate (Mar 2023 – Dec 2023)</p>
              <ul style={styles.jobList}>
                <li>Provided front-line IT support for a major hospital, troubleshooting complex technical issues across multiple systems.</li>
                <li>Diagnosed and resolved software, hardware, and network issues, ensuring minimal downtime.</li>
                <li>Maintained detailed documentation in a HIPAA-compliant HEAT ticketing system, streamlining IT support processes.</li>
                <li>Assisted with Active Directory administration, user provisioning, and system security updates.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Technical Skills</h3>
            <ul style={styles.skillList}>
              <li>Cloud Computing: AWS (Lambda, S3, DynamoDB, Amplify, EC2, IAM)</li>
              <li>Web Development: React.js, Node.js, JavaScript, HTML, CSS</li>
              <li>Backend & APIs: Python, Flask, RESTful APIs, AWS API Gateway</li>
              <li>Database Management: DynamoDB, PostgreSQL, SQL</li>
              <li>DevOps & Automation: CI/CD Pipelines, GitHub Actions, AWS Amplify</li>
              <li>Data Analytics & Processing: Pandas, NumPy, CSV Data Extraction</li>
            </ul>
          </section>

          {/* Projects */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Projects</h3>
            <div style={styles.job}>
              <h4 style={styles.jobTitle}>C8 (Consumer-based, crowdsourced price tracking app)</h4>
              <ul style={styles.jobList}>
                <li>Tech Stack: React.js, AWS Lambda, DynamoDB, S3, Python, API Gateway, Cognito</li>
                <li>Developed a live price-tracking platform for pricing, including a user-driven pricing submission system with admin approval.</li>
                <li>Built a serverless architecture on AWS using Lambda and DynamoDB for efficient and scalable data handling.</li>
                <li>Implemented a leaderboard and profile system for user engagement, integrating authentication with AWS Cognito.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Certifications</h3>
            <p>AWS Certified Cloud Practitioner</p>
          </section>

          {/* Education */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Education</h3>
            <p>California State University, Long Beach – B.A. English Rhetoric & Composition (May 2020)</p>
            <p>AWS DevOps Bootcamp (640-hour Instructor-led Course) – Skillstorm</p>
          
          </section>
          {/* Military */}
          <section style={styles.section}>
            <h3 style={styles.sectionTitle}>Military</h3>
            <p>United States Marine Corps - Combat Engineer</p>
          </section>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#1a1a1a", // Dark mode background
  },
  container: {
    width: "900px",
    padding: "20px",
    fontFamily: "'Times New Roman', Times, serif",
    textAlign: "center",
    backgroundColor: "#f2f2f2", // Softened white for readability
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000",
  },
  downloadButton: {
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  scrollContainer: {
    maxHeight: "600px",
    overflowY: "auto",
    padding: "15px",
    backgroundColor: "#f2f2f2", // Softened white
    borderRadius: "5px",
    border: "1px solid #ddd",
    textAlign: "left",
    color: "#000",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  name: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  contact: {
    fontSize: "14px",
    color: "#000",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    borderBottom: "2px solid #4CAF50",
    paddingBottom: "5px",
    marginBottom: "10px",
  },
  job: {
    marginBottom: "15px",
  },
  jobTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#4CAF50",
  },
  jobPosition: {
    fontSize: "14px",
    fontStyle: "italic",
    marginBottom: "5px",
  },
  jobList: {
    fontSize: "14px",
    marginLeft: "15px",
  },
  skillList: {
    fontSize: "14px",
    listStyleType: "circle",
    marginLeft: "15px",
  },
};

export default Resume;
