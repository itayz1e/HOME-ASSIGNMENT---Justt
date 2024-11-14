import { ContainerButtonsProps } from "../types/interface";

const ContainerButtons = ({ setIsEmptyTable }: ContainerButtonsProps) => {
  return (
    <div className="container_buttons">
      <button className="right" onClick={() => setIsEmptyTable(false)}>
        <p>BROWSE</p>
      </button>
      <button className="left" onClick={() => setIsEmptyTable(true)}>
        <p>PICK A CHARACTER</p>
      </button>
    </div>
  );
};

export default ContainerButtons;
