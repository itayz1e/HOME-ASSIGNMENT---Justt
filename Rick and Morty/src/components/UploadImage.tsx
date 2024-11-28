import "../style/UploadImage.scss";
import upload from "../assets/images/Group 1.png";

const UploadImage = () => {
  return (
    <div className="upload">
      <div className="image">
        <img src={upload} alt="" />
      </div>
    </div>
  );
};

export default UploadImage;
