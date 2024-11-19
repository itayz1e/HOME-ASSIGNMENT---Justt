const ContainerButtons = ({ onShowBrowse, onShowPickCard }: any) => {
  return (
    <div className="container_buttons">
      <button className="right" onClick={onShowBrowse}>
        <p>BROWSE</p>
      </button>
      <button className="left" onClick={onShowPickCard}>
        <p>PICK A CHARACTER</p>
      </button>
    </div>
  );
};

export default ContainerButtons;
