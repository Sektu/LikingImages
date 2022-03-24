import CustomizedImage from "../CustomizedImage/CustomizedImage";
import UploadImage from "../UploadImage/UploadImage";
import { useSelector, useDispatch } from "react-redux";

const LikeDislikeImages = () => {  
    const images = useSelector((state) => state.images.data);
    
    return <>
        <UploadImage />
        {images.map((elem, iter) => {
            return <CustomizedImage key={iter} {...elem} />;
        })}
    </>;
}

export default LikeDislikeImages;