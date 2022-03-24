import { useDispatch } from "react-redux";
import { addImage } from "../../slices/imagesSlice";

const UploadImage = () => {
    const dispatch = useDispatch();

    const onFileChange = (event) => {
        if(event.target.files.length > 0) {
            const file = event.target.files[0];
            const imageSrc = URL.createObjectURL(file);

            const removeTypeFromName = (str) => { return str.substring(0, str.indexOf("."))};
            const name = removeTypeFromName(file.name);
            dispatch(addImage({name: name, src: imageSrc}));
        }
    }
    return (
        <input type="file" onChange={onFileChange} accept="image/*" />
    );
}

export default UploadImage;