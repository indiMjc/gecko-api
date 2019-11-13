import React from "react";
import "./exchange.css";

const Exchange = props => {
  return (
    <div className="exchange-card">
      <h1>{props.name}</h1>
      <p>
        <strong>Country:</strong> {props.country}
      </p>
      <a href={props.url}>{props.url}</a>
      <p>
        <strong>Trust Score:</strong> {props.trustScore}
      </p>
      <p>
        <strong>Trust Rank:</strong> {props.trustRank}
      </p>
      <p>
        <strong>24hr Volume:</strong> {props.btcVol} <strong>BTC</strong>
      </p>
      <p>
        <strong>Normalized 24hr Volume:</strong> {props.normalizedVol}{" "}
        <strong>BTC</strong>
      </p>
    </div>
  );
};

export default Exchange;
