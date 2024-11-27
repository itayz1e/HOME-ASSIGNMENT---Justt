import "./style/App.scss";
import UploadImage from "./components/UploadImage";
import JusttLogo from "./components/JusttLogo";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div className="fullPage">
        <div>
          <UploadImage />
        </div>
        <div>
          <JusttLogo />
        </div>
        <div>
          <MainContainer />
        </div>
      </div>
    </>
  );
}

export default App;
