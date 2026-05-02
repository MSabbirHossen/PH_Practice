import React from "react";
import { Link, useLoaderData } from "react-router";

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

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      Phones Component
      {phones && phones.length > 0 && <h2>Available Phones:</h2>}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr",
          display: "grid",
        }}
      >
        {phones.length === 0 ? (
          <p>No phones available.</p>
        ) : (
          phones.map((phone) => (
            <div
              key={phone.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "12px",
                overflow: "hidden",
                width: "300px",
                transition: "0.3s",
                padding: "16px",
              }}
            >
              <img
                src={phone.image}
                alt={phone.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "16px" }}>
                  <h2 style={{ fontSize: "18px", margin: "0 0 4px" }}>
                    {phone.name}
                  </h2>
                <p style={{ color: "#777", fontSize: "14px" }}>{phone.brand}</p>
                <p style={{ fontWeight: "bold", margin: "8px 0" }}>
                  ${phone.price}
                </p>
              </div>
                <Link to={`/phones/${phone.id}`} style={styles.button}>
          View Details →
        </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Phones;
