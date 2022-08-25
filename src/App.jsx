import "./App.css";
import { useState, useEffect } from "react";
import GifDisplay from "./components/GifDisplay";

function App() {
  const apiKey = "KbEuISuaXSXLHMNJBj853fsn260Ak0Fs";
  const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

  const [gifUrl, setGifUrl] = useState("");

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const fetchRandomGif = async () => {
    const data = await fetchData(randomGifUrl);
    setGifUrl(data.data.embed_url);
  };

  useEffect(() => {
    (async () => {
      await fetchRandomGif();
    })();

    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Giphy</h1>
      <button onClick={fetchRandomGif} className="btn btn-primary mt-5 mb-5" type="button">
        Get random gif!
      </button>
      <GifDisplay gifUrl={gifUrl} />
    </div>
  );
}

export default App;
