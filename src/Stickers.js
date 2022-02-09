import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import "./App.css";
import Header from "./Header";
import axios from "axios";

function Stickers(props) {
  const [stickers, setstickers] = useState("");
  const [Isloading, setloading] = useState(true);
  const [Iserror, setIserror] = useState(false);
  const [search, setsearch] = useState([]);

  useEffect(() => {
    const trendstickers = async () => {
      setIserror(false);
      try {
        setloading(true);
        const results = await axios(
          "https://api.giphy.com/v1/stickers/trending",
          {
            params: { api_key: process.env.React_App_API_KEY, limit: 12 },
          }
        );
        setstickers((prevstickers) => (prevstickers = results.data.data));
        setloading(false);
      } catch (err) {
        setIserror(true);
        console.log(err);
      }
    };
    trendstickers();
  }, []);
  const searchforstickers = async (event) => {
    try {
      event.preventDefault();
      setloading(true);
      const results = await axios("https://api.giphy.com/v1/stickers/search", {
        params: {
          api_key: process.env.React_App_API_KEY,
          q: search,
          limit: 12,
        },
      });
      setstickers((prevstickers) => (prevstickers = results.data.data));
      setloading(false);
    } catch (err) {
      setIserror(true);
      console.log(err);
    }
  };
  const HandleSearchChange = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div className="App">
      <Header push={props.history.push} Logomessage={"Sticker"}></Header>
      <form>
        <input
          className="Search-bar"
          placeholder="Search"
          type="text"
          name="search"
          value={search}
          onChange={HandleSearchChange}
        ></input>
        <button
          className="Search-btn"
          type="submit"
          onClick={searchforstickers}
        >
          <i className="fas fa-search"></i>{" "}
        </button>
      </form>
      <Grid Trending={stickers} Loadstate={Isloading}></Grid>
    </div>
  );
}

export default Stickers;
