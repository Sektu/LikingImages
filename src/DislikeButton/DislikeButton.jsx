import CustomizedButton from "../CustomizedButton/CustomizedButton";

const DislikeButton = (onClick) => {
    return <CustomizedButton
        className="button dislike-button"
        aria-label="do-dislike"
        onClick={onClick}
        name="Dislike">
    </CustomizedButton>;
}

export default DislikeButton;