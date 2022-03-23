import CustomizedImage from "../CustomizedImage/CustomizedImage";
import data from "../data"

const LikeDislikeImages = () => {
    const elem1 = data[0];
    return <>
        <CustomizedImage {...elem1} />
    </>;
}

export default LikeDislikeImages;