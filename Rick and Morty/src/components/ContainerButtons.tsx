const ContainerButtons = ({ onShowBrowse, onShowPickCard }: any) => {
  return (
    <div className="container_buttons">
      <button className="right" onClick={onShowBrowse}>
        <p>BROWSE TABLE</p>
      </button>
      <button className="left" onClick={onShowPickCard}>
        <p>PICK A CHARACTER CARD</p>
      </button>
    </div>
  );
};

export default ContainerButtons;
