import React, { useState, useEffect, useRef, createRef } from "react";
import "./CreateAvata.scss";
import Cropper from "react-cropper";
import "../FixSizeImg/FixSizeImg.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../node_modules/cropperjs/dist/cropper.css"
// import "../../node_modules/cropperjs/dist/cropper.css";

const CreateAvata = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
<<<<<<< HEAD
  const [data, setData] = useState("./child.jpg");
  const {id} = useParams();
  const navigate = useNavigate();

=======
  const [data, setData] = useState("");
>>>>>>> bf0630acae302218cdff6e0bb9b6d808a6b86049
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let base_image = new Image();
    base_image.src = preview;
    base_image.className = "img-avata";
    base_image.id = "input_img";
    base_image.onload = () => {
      let wrh = base_image.width / base_image.height;
      let newWidth = canvas.width;
      let newHeight = newWidth / wrh;
      if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * wrh;
      }

      let xOffset = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
      let yOffset =
        newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;

      ctx.drawImage(base_image, xOffset, yOffset, newWidth, newHeight);
      setData(canvas.toDataURL("image/png"));
    };
  }, [preview]);

  const onSelectFileFinal = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onSelectFileFrame = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    console.log(e.target.files[0]);
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  const [cropData, setCropData] = useState();
  const cropperRef = createRef();
  const onCrop = () => {
    setCropData(
      cropperRef.current?.cropper.getCroppedCanvas().toDataURL("image/png")
    );
  };
  const saveCrop = () => {
    const a = document.createElement("a");
    a.href = cropData;
    a.download = "dowload.png";
    a.click();
  };
  // gửi data canvas lên url
  
  useEffect(()=>{
    const url = `http://localhost:4000/api/v1/frame/upload/${id}`
    id ? axios.get(url).then(res => setPreview(`${res.data.data}`)) : navigate('/create-avata')
  }) 
  return (
    <form>
      <div className="container__avata">
        <div className="img-container">
          <Cropper
            ref={cropperRef}
            src={data}
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            aspectRatio={1}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
            crop={onCrop}
            zoomable={false}
            className="cropper"
          />
          <div className="box" style={{ width: "50%", float: "right" }}>
            <h1>Preview</h1>
            <div
              className="img-preview"
              style={{
                width: "100%",
                float: "left",
                height: "35rem",
                border: "1px solid var(--primary-color)",
              }}
            />
          </div>
        </div>
        <div className="img__box" hidden>
          <canvas id="canvas" ref={canvasRef} width={500} height={500}></canvas>
        </div>
        <div className="container__input">
          <div>
            <label>Chọn avatar</label><br/>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              accept="image/*"
              onChange={onSelectFileFinal}
            />
          </div>
          
          <div>
            <label>Chọn frame</label><br/>
            <input
              type="file"
              placeholder="Chọn frame"
              name="farme"
              id="upload-farme"
              accept="image/*"
              onChange={onSelectFileFrame}
            />
          </div>
          
          <button className="btn-success" onClick={saveCrop}>
            Lưu
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateAvata;
