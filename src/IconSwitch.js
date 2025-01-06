const IconSwitch = props => {
    const {icon, onSwitch} = props;
    return (
      <div className="switch-view" onClick={onSwitch}>
        <i className="material-icons" style={{fontSize: 42}}>
          {icon}
        </i>
      </div>
    );
  };

  export default IconSwitch;