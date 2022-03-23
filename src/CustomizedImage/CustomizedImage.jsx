import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const CustomizedImage = ({name, src, fullName}) => {
    return (
        <>
            <h5 className="image-name">{fullName}</h5>
            <img className="image" src={src} alt={name} />
            <LikeButton onClick={() => {}} />
            <DislikeButton onClick={() => {}} />
        </>
    );
}

export default CustomizedImage;