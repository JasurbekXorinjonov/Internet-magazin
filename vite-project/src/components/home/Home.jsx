// import Header from "../header/Header";
import Header from "../header/Header";
import Main from "../main/Main";
import Navbar from "../navbar/Navbar";
// import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default Home;
