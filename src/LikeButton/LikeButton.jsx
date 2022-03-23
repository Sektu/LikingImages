import CustomizedButton from "../CustomizedButton/CustomizedButton";

const LikeButton = (onClick) => {
    return <CustomizedButton
        className="button like-button"
        aria-label="do-like"
        onClick={onClick}
        name="Like">
    </CustomizedButton>;
}

export default LikeButton;