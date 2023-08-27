// import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import SimpleSlider from "../header/Header";
import MaterialUISlider from "../header/Header";
// import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      {/* <Header /> */}
      <MaterialUISlider />
    </div>
  );
}

export default Home;
