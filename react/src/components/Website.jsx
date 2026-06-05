import Footer from "./Footer";
import Header from "./Header";
import "./Website.css";

const Website = () => {
  const goToWebsite = () => {
    window.open(
      "https://model-1-w7r6.onrender.com/website/index.html",
      "_blank"
    );
  };
  const goToAudio = () => {
    window.open(
      "https://model-1-w7r6.onrender.com/audio",
      "_blank"
    );
  };
  const goToLayout = () => {
    window.open(
      "https://model-1-w7r6.onrender.com/layout",
      "_blank"
    );
  };
  const goToPyscript= () => {
    window.open(
      "https://model-1-w7r6.onrender.com/pyscript",
      "_blank"
    );
  };
  const goToTable = () => {
    window.open(
      "https://model-1-w7r6.onrender.com/table",
      "_blank"
    );
  };
  const goToRegister = () => {
    window.open(
      "https://model-1-w7r6.onrender.com/register",
      "_blank"
    );
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1>This button redirects to run static website throw node js</h1>
        <button onClick={goToWebsite}>
          Open Website
        </button>
        <h1>Table website</h1>
        <button onClick={goToTable}>
          Open Website
        </button>
        <h1>Layout website</h1>
        <button onClick={goToLayout}>
          Open Website
        </button>
        <h1>Pyscript website</h1>
        <button onClick={goToPyscript}>
          Open Website
        </button>
        <h1>Audio website</h1>
        <button onClick={goToAudio}>
          Open Website
        </button>
        <h1>Register website</h1>
        <button className="last" onClick={goToRegister}>
          Open Website
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Website;