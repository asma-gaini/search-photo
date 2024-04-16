import { usePhotos } from "../context/PhotoContext";
function Photos() {
  const { photos } = usePhotos;

  return (
    <div>
      {photos.length > 0 &&
        photos.map((photo) => <img src={photo.src.small} />)}
    </div>
  );
}

export default Photos;
