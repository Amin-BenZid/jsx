import logo from "./logo.svg";
import "./App.css";
import img1 from "./imageInSrc.jpg.jpg";
import "./style.css";

function App() {
  return (
    <div style={{ border: "solid 1px black,", maxWidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img className="img" src={img1} alt="img1" />

      <br />

      <img className="img img2" src="/imageInPublic.jpg.jpg" alt="img2" />
    </div>
  );
  return (
    <video className="vid">
      <source src="/myVideo.mp4" type="video/mp4" />
    </video>
  );
}

export default App;
