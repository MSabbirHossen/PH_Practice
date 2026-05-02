import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Phone = () => {
  const phoneData = useLoaderData();
  const { name, brand, price, image, description, storage, color } = phoneData;

  const styles = {
    card: {
      border: "1px solid #eee",
      borderRadius: "12px",
      overflow: "hidden",
      width: "300px",
      transition: "0.3s",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "16px",
    },
    title: {
      fontSize: "18px",
      margin: "0 0 4px",
    },
    brand: {
      color: "#777",
      fontSize: "14px",
    },
    price: {
      fontWeight: "bold",
      margin: "8px 0",
    },
    desc: {
      fontSize: "14px",
      color: "#555",
    },
    meta: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "13px",
      margin: "10px 0",
    },
    button: {
      display: "inline-block",
      marginTop: "10px",
      padding: "8px 12px",
      background: "#007bff",
      color: "#fff",
      borderRadius: "6px",
      textDecoration: "none",
    },
  };

  return (
    <div className="phone-card" style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <div style={styles.content}>
        <h2 style={styles.title}>{name}</h2>
        <p style={styles.brand}>{brand}</p>

        <p style={styles.price}>${price}</p>

        <p style={styles.desc}>
          {description.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        <div style={styles.meta}>
          <span>💾 {storage}</span>
          <span>🎨 {color}</span>
        </div>
        <Link to="/phones" style={styles.button}>
          Back to Phones
        </Link>
      </div>
    </div>
  );
};

export default Phone;
