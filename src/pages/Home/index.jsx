import React, { useEffect, useState } from "react";
import Leagues from "../../components/Leagues";
import Team from "../../components/Team";
import { axiosInstance } from "../../AxiosInstance";

function Home() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("");

  useEffect(() => {
    axiosInstance
      .get("countries", {
        headers: {
          "x-rapidapi-key": localStorage.getItem("user_api_key"),
        },
      })
      .then((response) => {
        if (response?.data?.response.length > 0) {
          setCountries(response.data.response);
        } else {
        }
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      {selectedCountry && selectedLeague ? (
        <h1>Teams</h1>
      ) : (
        <Leagues
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          leagues={leagues}
          setLeagues={setLeagues}
          setSelectedLeague={setSelectedLeague}
        />
      )}
    </>
  );
}

export default Home;
