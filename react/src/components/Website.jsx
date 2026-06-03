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

  return (
    <>
      <Header />
      <div className="container">
        <h1>This button redirects to the HTML/CSS/JS website</h1>
        <button onClick={goToWebsite}>
          Open Website
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Website;