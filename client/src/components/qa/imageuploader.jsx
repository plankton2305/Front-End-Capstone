/* eslint-disable camelcase */
import {useState, useEffect} from 'react';

const ImageUploader = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [imageLimit, setImageLimit] = useState(5);

  const clickHandler = (e) => {
    e.preventDefault();
    window.cloudinary.openUploadWidget({
      cloud_name: 'dfq4marzt',
      upload_preset: 'otmp2qvo',
      sources: ['local', 'url', 'camera', 'facebook', 'instagram'],
      client_allowed_formats: ['png', 'gif', 'jpeg', 'jpg']
    }, (error, result) => {
      if (error) {
        console.log(error);
      } else if (result && result.event === "success") {
        setImageUrls([...imageUrls, result.info.url]);
        setImageLimit(imageLimit - 1);
      }
    });
  };

  const styleBorder = 'border-2 border-dotted border-current rounded';
  const styleGrid = 'grid content-center justify-center text-center';
  const style = `h-20 w-20 ${styleBorder} ${styleGrid}`;

  return (
    <div className="flex flex-nowrap">
      {
        imageUrls.map((url, i) => {
          return (
            <div key={i} className={style}>
              <img className="max-h-15" src={url} alt="uploaded image"/>
            </div>
          );
        })
      }
      {imageLimit > 0 && <div className={style} onClick={clickHandler}>Upload Image</div>}
    </div>
  );
};

export default ImageUploader;