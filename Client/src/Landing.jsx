import React, { useState, useEffect } from "react";
import landingImage from "./assets/landing.jpg";
import buyimg from "./assets/buy.png";
import "./landing.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

function Landing() {
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [listings, setListings] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false); // New state to trigger fetch

  const fetchListings = () => {
    if (!area || !status || !propertyType) return; // Ensure all filters are selected

    const url = `https://api.rentcast.io/v1/listings/rental/long-term?city=${area}&propertyType=${propertyType}&status=${status}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-Api-Key": "8a605d11d50d4ab58244111dde959e93",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setListings(json.data.slice(0, 10))) // Get top 10 listings
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    if (fetchTrigger) {
      fetchListings();
    }
  }, [fetchTrigger]); // Depend on fetchTrigger state

  const handleFindNowClick = () => {
    setFetchTrigger(prev => !prev); // Toggle fetchTrigger to re-trigger fetch
  };

  return (
    <div className="task-manager">
      <Header />
      <div className="landing_image">
        <img src={landingImage} alt="Landing" />
        <div className="landing_image_text">
          <h3>HomiWise Agency</h3>
          <h1>Find Your Dream House By Us</h1>
          <button>
            <Link
              to="/Listing"
              style={{ color: "white", textDecoration: "none" }}
            >
              House Listing
            </Link>
          </button>
        </div>
        <div className="landing_image_form">
          <form>
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="" disabled>
                Choose Area
              </option>
              <option value="Austin">Austin</option>
              <option value="Dallas">Dallas</option>
            </select>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="" disabled>
                Property Status
              </option>
              <option value="Active">Active</option>
              <option value="Sold">Sold</option>
            </select>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="" disabled>
                Property Type
              </option>
              <option value="Single Family">Single Family</option>
              <option value="Condo">Condo</option>
            </select>
            <button type="button" onClick={handleFindNowClick}>
              Find Now
            </button>
          </form>
        </div>
      </div>

      <div className="listing-results">
        <h2>Top Listings</h2>
        <table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing, index) => (
              <tr key={index}>
                <td>{listing.name}</td>
                <td>{listing.location}</td>
                <td>{listing.price}</td>
                <td>{listing.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="landing_services">
        <h1 className="services_title">Our Services</h1>
        <p className="services_focus">Our Main Focus</p>
        <section className="container">
          <div className="card">
            <div className="card-image">
              <img src={buyimg} alt="Buy a home" />
            </div>
            <div className="content">
              <h3>Buy a Home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                delectus quo, accusantium nobis sit blanditiis.
              </p>
            </div>
            <div className="icons">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={buyimg} alt="Rent a home" />
            </div>
            <div className="content">
              <h3>Rent a Home</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum doloribus aspernatur quasi eaque reprehenderit
                exercitationem.
              </p>
            </div>
            <div className="icons">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src={buyimg} alt="Sell a home" />
            </div>
            <div className="content">
              <h3>Sell a Home</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                inventore impedit expedita, obcaecati quod fugiat?
              </p>
            </div>
            <div className="icons">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
