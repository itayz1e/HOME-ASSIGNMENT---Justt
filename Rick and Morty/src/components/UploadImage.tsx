import "../style/UploadImage.scss";
import upLoading from "../assets/Group 1.png";

function UploadImage() {
  return (
    <div className="upLoading">
      <div className="image">
        <img src={upLoading} alt="" />
      </div>
    </div>
  );
}

export default UploadImage;
