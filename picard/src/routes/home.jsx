import React, { useState, useEffect } from "react";
import ExperimentCard from "../components/experimentcard/experimentcard";
import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/header";
import Button from "react-bootstrap/Button";

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
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    }
  }, [token]);

  let experiments = [
    {
      name: "Boston Housing Experiment",
      link: "/experiment?experimentId=1",
      state: "Completed",
    },
    {
      name: "ICS Power Experiment",
      link: "/experiment?experimentId=2",
      state: "In Progress",
    },
    {
      name: "NOAA Weather Experiment",
      link: "/experiment?experimentId=3",
      state: "Not Started",
    },
    {
      name: "Pulsar Classification Experiment",
      link: "/experiment?experimentId=4",
      state: "Not Started",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center overflow-auto ">
        <div className="w-3/4 h-3/4 max-h-screen p-4">
          <div className="mb-4">
            <h2 style={{ fontSize: "25px" }}>
              Welcome, {firstName} {lastName}!
            </h2>
          </div>
          {experiments.map((experiment, index) => (
            <ExperimentCard
              key={index}
              experimentName={experiment.name}
              link={experiment.link}
              experimentState={experiment.state}
            />
          ))}
          <Button href="/experimentSetup" variant="dark">
            {" "}
            + New Experiment
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
