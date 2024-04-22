import { useState,  useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function ImageRendering() {
  const [serielNo, setSerielNo] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImages = async () => {
      try {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?id=${serielNo}`
        );
        let data = await res.json();
        setImage(data[0].url);
      } catch {
        console.log("Failed to fetch image data!!");
      }
    };

    getImages();
  }, [serielNo]);

  const nextImage = () =>
    setSerielNo(serielNo + 1 > 5000 ? serielNo : serielNo + 1);

  const prevImage = () =>
    setSerielNo(serielNo - 1 < 1 ? serielNo : serielNo - 1);

  return (
    <>
      <div className="w-[80%] lg:w-[42%] h-[40%] lg:h-1/2  relative">
        <button
          className="text-yellow-500 bg-slate-900 border-2 border-slate-800 p-3 absolute top-1/2 left-0 translate-x-[-50%] rounded-full text-bolder text-2xl"
          onClick={prevImage}
        >
          <GrFormPrevious />
        </button>

        <div className="img-container w-full h-full overflow-hidden rounded-md">
        {
          (image.length > 0) ? 
           <img
            src={image}
            alt={`Image ${serielNo}`}
            className="w-full h-full object-cover"
           /> :
           <p>Rendering image</p>
        }
          
          
        </div>

        <button
          className="text-yellow-500 bg-slate-900 border-2 border-slate-800 p-3 z-20 absolute top-1/2 right-0 translate-x-2/4 rounded-full shadow-2xl text-bolder text-2xl"
          onClick={nextImage}
        >
          <GrFormNext />
        </button>
      </div>

      <div className="text-slate-50 my-5">Image {serielNo}</div>
    </>
  );
}

export default ImageRendering;
