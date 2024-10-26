import React, { useState, useEffect } from "react";
import ExperimentCard from "../components/experimentcard/experimentcard";
import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/header";

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
        // Assuming token is the formatted string you provided
        const parts = token.split("?");
        const userId = parts[0].split(" ")[2]; // Extract UserID
        const userEmail = parts[1].split("=")[1]; // Extract userEmail
        const firstName = parts[2].split("=")[1]; // Extract firstName
        const lastName = parts[3].split("=")[1]; // Extract lastName

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
    { name: "Default", link: "http://example.com/1", state: "Completed" },
    { name: "Default", link: "http://example.com/2", state: "Completed" },
    { name: "Default", link: "http://example.com/3", state: "Completed" },
    { name: "Default", link: "http://example.com/3", state: "Completed" },
    { name: "Default", link: "http://example.com/3", state: "Completed" },
    { name: "Default", link: "http://example.com/3", state: "Completed" },
    { name: "Default", link: "http://example.com/3", state: "Completed" },
  ];

  if (userInfo.userId === "f6361f74-fb76-4914-b361-f829e4e7ca23") {
    experiments = [
      {
        name: "Mix Experiment 1",
        link: "http://example.com/1",
        state: "Completed",
      },
      {
        name: "Mix Experiment 2",
        link: "http://example.com/2",
        state: "Completed",
      },
      {
        name: "Mix Experiment 3",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "Mix Experiment 4",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "Mix Experiment 5",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "Mix Experiment 6",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "Mix Experiment 10",
        link: "http://example.com/3",
        state: "Completed",
      },
    ];
  } else if (userInfo.userId === "100456241754967355209") {
    experiments = [
      {
        name: "GMAIL Experiment 1",
        link: "http://example.com/1",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 2",
        link: "http://example.com/2",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 3",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 4",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 5",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 6",
        link: "http://example.com/3",
        state: "Completed",
      },
      {
        name: "GMAIL Experiment 10",
        link: "http://example.com/3",
        state: "Completed",
      },
    ];
  }

  return (
    <>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center overflow-auto ">
        <div className="w-3/4 h-3/4 max-h-screen p-4">
          <div className="mb-4">
            {/* Display firstName */}
            <h2>
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
        </div>
      </div>
    </>
  );
}

export default Home;
