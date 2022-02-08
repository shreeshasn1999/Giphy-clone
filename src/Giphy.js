import React from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";

const Giphy = () => {
  const gf = new GiphyFetch(process.env.React_App_API_KEY);
  const trendGifs = () => gf.trending({ offset: 0, limit: 15 });
  console.log("I've entered Giphy");
  return (
    <div>
      <svg
        width="25"
        height="20"
        viewBox="0 0 25 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="5.615%"
            y1="77.472%"
            x2="100%"
            y2="26.124%"
            id="trending"
          >
            <stop stop-color="#3191FF" offset="0%"></stop>
            <stop stop-color="#0CF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          d="M25.333 4.635l-6.45-.032a.47.47 0 00-.471.468l.004 1.575.008.085a.47.47 0 00.462.383h2.94l-7.544 8.101-3.878-3.125a1.119 1.119 0 00-1.631-.009l-7.584 7.73a1 1 0 00-.002 1.4l.288.295a1 1 0 001.431 0L9.652 14.6l3.782 3.042.093.1c.442.442.964.541 1.498.145l8.43-8.998v3.103c0 .25.197.456.446.468l1.407.069a.47.47 0 00.491-.446V5.104a.47.47 0 00-.466-.469z"
          fill="url(#trending)"
          fill-rule="nonzero"
          transform="rotate(-5 -21.505 23.157)"
        ></path>
      </svg>
      <p className="Grid-print">Trending</p>
      <Grid width={800} columns={3} fetchGifs={trendGifs} />
    </div>
  );
};
export default Giphy;
