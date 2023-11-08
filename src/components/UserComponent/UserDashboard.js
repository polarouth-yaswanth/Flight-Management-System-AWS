import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Userdashboard() {
    const nav=useNavigate();

  const [SerchFlight, setSerchFlight] = useState({
    departure: null,
    destination: null,
    date: null,
  });
  const [flightData, setFlightData] = useState([]);
  const { departure, destination, date } = SerchFlight;
  const onChange = (e) => {
    setSerchFlight({ ...SerchFlight, [e.target.name]: e.target.value });
  };


  const onClick = async (e) => {
    e.preventDefault();
    setFlightData([]);
    const { data } = await axios.get(
      `http://51.20.35.122:4005/flightdetails/${departure}/${destination}/${date}`
    );
  
    console.log(data);
    if (typeof data === "object" && data.length > 0) {
      setFlightData(data);
     
    }
    if(data.length<=0){
      alert("No flights available!")
    }

  };
  const onBook=async(e)=>{
    nav("/book");

  };

  const Logout=async(e)=>{
    alert("Logged out successfully!")
    nav("/home");

  };


  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#227cd6" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <button type="button" className="btn btn-dark" onClick={Logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ backgroundColor: "#DBF9DB", height: "800px" }}>
        <h1 style={{ color: "#5C3317" }}><b>User Dashboard</b></h1>
        <br />
        <div>
          <form
            style={{
              backgroundColor: "#4C787E",
              width: "500px",
              marginLeft: "500px",
            }}
          >
            <h3>Search For Flight</h3>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="departure"
                placeholder="Departure"
                onChange={(e) => onChange(e)}
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="destination"
                placeholder="Destination"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Date</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputPassword1"
                name="date"
                placeholder="DD-MM-YYYY"
                onChange={(e) => onChange(e)}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary" onClick={onClick}>
              Search
            </button>
          </form>
          <br />
          <br />
          <br />
          <div>
            <table className="table" style={{width:"700px" , marginLeft:"400px"}}>
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">FlightId</th>
                  <th scope="col">Departure</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                  <th scope="col">Book</th>
                </tr>
              </thead>
              <tbody>
                {flightData.map((flight, i) => (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{flight.flightId}</td>
                    <td>{flight.departure}</td>
                    <td>{flight.destination}</td>
                    <td>{flight.price}</td>
                    <td>{flight.date}</td>
                    <td>
                    <button
                    // onClick={() => this.updateFlight(flight.flightId)}
                    className="btn btn-info"
                    onClick={onBook}
                    id={flight.flightId}
                  >
                    Book{" "}
                  </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
