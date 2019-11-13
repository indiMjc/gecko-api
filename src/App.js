import React from "react";
import Exchange from "./components/Exchange";
import { useDispatch } from "react-redux";
import { getExchanges } from "./actions";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const exchanges = useSelector(state => state.exchanges);
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  return (
    <div className="App">
      <button onClick={() => dispatch(getExchanges())}>Show</button>
      <div className="card-contain">
        {isFetching && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {exchanges.length ? (
          exchanges.map(item => (
            <Exchange
              name={item.name}
              country={item.country}
              url={item.url}
              trustScore={item.trust_score}
              trustRank={item.trust_score_rank}
              btcVol={item.trade_volume_24h_btc}
              normalizedVol={item.trade_volume_24h_btc_normalized}
            />
          ))
        ) : (
          <p>Click to load top ten exchanges by 24hr volume!</p>
        )}
      </div>
    </div>
  );
}

export default App;
