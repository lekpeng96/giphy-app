const GifDisplay = ({ gifUrl, isLoading }) => {
  console.log("gif display rerendered");

  return (
    <div className="gif-display">
      {!isLoading ? (
        <div>
          <iframe
            src={gifUrl}
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen></iframe>
        </div>
      ) : (
        <div
          style={{
            height: "270px",
          }}
          className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GifDisplay;
