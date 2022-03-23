import "./CustomizedButton.css";

const CustomizedButton = ({className, ariaLabel, name, onClick}) => {
    return (<button 
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}>
            {name}
        </button>
        );
}

export default CustomizedButton;