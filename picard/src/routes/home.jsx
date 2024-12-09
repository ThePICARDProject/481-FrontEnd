import React, { useState, useEffect } from "react";
import ExperimentCard from "../components/experimentcard/experimentcard";
import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Home() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useAuth();

  const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [experiments, setExperiments] = useState([]);

  // Parsing token and setting user information
  useEffect(() => {
    if (token) {
      try {
        const parts = token.split("?");
        const userId = parts[0].split(" ")[2];
        const userEmail = parts[1].split("=")[1];
        const firstName = parts[2].split("=")[1];
        const lastName = parts[3].split("=")[1];

        setUserInfo({ userId, userEmail, firstName, lastName });
        setFirstName(firstName);
        setLastName(lastName);
        setUserEmail(userEmail);
        setUserId(userId);

        axios
          .get(`http://localhost:5080/api/experiment/user/getUserExperiments`, {
            withCredentials: true,
          })
          .then((response) => {
            const fetchedExperiments = response.data;
            setExperiments(fetchedExperiments);
            console.log("Fetched experiments:", fetchedExperiments); // Now this will log the correct data
          })
          .catch((error) => {
            console.error("Error fetching experiments:", error);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }
  }, [token]);

  return (
    <>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center overflow-auto">
        <div className="w-3/4 h-3/4 max-h-screen p-4 mt-10">
          <div className="mb-4">
            <h2 style={{ fontSize: "25px" }}>
              Welcome, {firstName} {lastName}!
            </h2>
          </div>
          {experiments.length > 0 ? (
            experiments.map((experiment, index) => (
              <ExperimentCard
                key={index}
                experimentName={experiment.experimentName}
                link={`/experiment?algorithmId=${experiment.algorithmID}`}
                experimentState={experiment.status}
              />
              // <div> {experiment.experimentID} </div>
            ))
          ) : (
            <p>No experiments found.</p>
          )}
        </div>
      </div>
      <div className="m-10"></div>
    </>
  );
}

export default Home;
