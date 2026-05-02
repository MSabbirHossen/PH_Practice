import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a", // dark blue
    color: "#fff",
    textAlign: "center",
  },
  code: {
    fontSize: "120px",
    margin: "0",
    fontWeight: "bold",
    color: "#3b82f6", // neon blue vibe
  },
  title: {
    fontSize: "28px",
    margin: "10px 0",
  },
  text: {
    fontSize: "16px",
    color: "#cbd5e1",
    maxWidth: "400px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 16px",
    background: "#3b82f6",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>

      <h2 style={styles.title}>Page Not Found</h2>

      <p style={styles.text}>
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;