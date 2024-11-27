import "./style/App.scss";
import UploadImage from "./components/UploadImage";
import Logo from "./components/Logo";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div className="fullPage">
        <div>
          <UploadImage />
        </div>
        <div>
          <Logo />
        </div>
        <div>
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
