import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import "./App.css";
import Header from "./Header";
import Loading from "./Loading";
import axios from "axios";

function App(props) {
  const [Gifs, setGifs] = useState("");
  const [Isloading, setloading] = useState(true);
  const [Iserror, setIserror] = useState(false);
  const [search, setsearch] = useState([]);

  useEffect(() => {
    const trendGifs = async () => {
      setIserror(false);
      try {
        setloading(true);
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: { api_key: process.env.React_App_API_KEY, limit: 12 },
        });
        setGifs((prevGifs) => (prevGifs = results.data.data));
        setloading(false);
        // console.log(props.history.push);
      } catch (err) {
        setIserror(true);
        console.log(err);
      }
    };
    trendGifs();
  }, []);
  const searchforgif = async (event) => {
    try {
      event.preventDefault();
      setloading(true);
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.React_App_API_KEY,
          q: search,
          limit: 12,
        },
      });
      setGifs((prevGifs) => (prevGifs = results.data.data));
      console.log(Gifs);
      setloading(false);
    } catch (err) {
      setIserror(true);
      console.log(err);
    }
  };
  // handle
  const HandleSearchChange = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div className="App">
      <Header push={props.history.push} Logomessage={"Gif"}></Header>
      <form>
        <input
          className="Search-bar"
          placeholder="Search"
          type="text"
          name="search"
          value={search}
          onChange={HandleSearchChange}
        ></input>
        <button className="Search-btn" type="submit" onClick={searchforgif}>
          <i className="fas fa-search"></i>{" "}
        </button>
      </form>
      <Grid Trending={Gifs} Loadstate={Isloading}></Grid>
    </div>
  );
}

export default App;
