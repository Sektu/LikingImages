import CustomizedImage from "../CustomizedImage/CustomizedImage";
import data from "../../data/data"

const LikeDislikeImages = () => {
    return <>
        {data.map((elem, iter) => {
            return <CustomizedImage key={iter} {...elem} />;
      })}
    </>;
}

export default LikeDislikeImages;