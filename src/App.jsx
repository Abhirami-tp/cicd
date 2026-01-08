import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* CSS INSIDE COMPONENT */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Inter, Arial, sans-serif;
        }

        body {
          background: #ffffff;
          color: #111;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 4rem;
          border-bottom: 1px solid #eee;
        }

        .logo {
          color: #2563eb;
          font-size: 1.4rem;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          font-weight: 500;
        }

        /* HERO SECTION */
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5rem 4rem;
          gap: 4rem;
        }

        .hero-text {
          max-width: 500px;
        }

        .hero-text h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero-text p {
          color: #555;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .primary-btn {
          background: #2563eb;
          color: white;
          padding: 0.8rem 1.8rem;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
        }

        .primary-btn:hover {
          background: #1d4ed8;
        }

        /* CARD */
        .hero-
