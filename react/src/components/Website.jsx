import Footer from "./Footer";
import Header from "./Header";
import "./Website.css";

const Website = () => {
  const goToWebsite = () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/website/index.html",
      "_blank"
    );
  };
  const goToAudio = () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/audio",
      "_blank"
    );
  };
  const goToLayout = () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/layout",
      "_blank"
    );
  };
  const goToPyscript= () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/pyscript",
      "_blank"
    );
  };
  const goToTable = () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/table",
      "_blank"
    );
  };
  const goToRegister = () => {
    window.open(
      "https://didactic-goggles-v4r49xx9pr7369wr-8080.app.github.dev/register",
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