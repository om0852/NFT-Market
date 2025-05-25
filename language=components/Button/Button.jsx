const Button = ({ btnName, handleClick, icon }) => {
  return (
    <button className={Style.button} onClick={handleClick}>
      {icon && <span className={Style.button_icon}>{icon}</span>}
      {btnName}
    </button>
  );
}; 