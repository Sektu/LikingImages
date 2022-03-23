import { useSelector, useDispatch } from "react-redux";
import { doLike, doDislike } from "../../slices/likingSlice";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import "./CustomizedImage.css";

const CustomizedImage = ({name, src, fullName}) => {
    const likingData = useSelector((state) => state.liking.data);
    const dispatch = useDispatch();
    const isLiked = likingData[name];
    return (
        <>
            <h5 className="image-name">{fullName}</h5>
            <img className="image" src={src} alt={name} />
            <div>
            {
                isLiked ? 
                    <DislikeButton onClick={() => {dispatch(doDislike(name))}} />
                    : 
                    <LikeButton onClick={() => {dispatch(doLike(name))}} />
            }
            </div>
        </>
    );
}

export default CustomizedImage;