import React, { Fragment, useState, useRef } from "react";
import { Container, Card, CardBody, CardHeader, Button } from "reactstrap";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import { useDebounceEffect } from "./useDebounceEffect";
import { canvasPreview } from "./canvasPreview";

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 30,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}
const ImagecropperContain = () => {
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();

  const scale = 1;
  const rotate = 0;
  const aspect = 16 / 9;

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); 
      const reader = new FileReader();
      reader.addEventListener("load", () => setImgSrc(reader.result.toString() || ""));
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  const downloadImage = () => {
    if (previewCanvasRef.current) {
      previewCanvasRef.current.toBlob((blob) => {
        const url = window.URL.createObjectURL(blob);
        const timestamp = new Date().getTime();
        const randomChars = Math.random().toString(36).substring(7); // Generates a random string of characters
        const filename = `cropped-image-${timestamp}-${randomChars}.png`;
        const a = document.createElement('a');
        a.href = url;
        a.download = filename; // Set the generated filename
        a.style.display = 'none'; // Hide the anchor element
        document.body.appendChild(a);
        a.click(); // Trigger the download
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a); // Clean up
      });
    }
  };
  

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop, scale, rotate);
      }
    },
    100,
    [completedCrop, scale, rotate]
  );
  return (
    <Fragment>
      <Container fluid={true}>
        <Card>
          <CardHeader>
            <h5>Image Cropper</h5>
          </CardHeader>
          <CardBody>
            <div className='Crop-Controls'>
              <input className='form-control' type='file' accept='image/*' onChange={onSelectFile} />
            </div>
            {Boolean(imgSrc) && (
              <ReactCrop crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={(c) => setCompletedCrop(c)} aspect={aspect}>
                <img ref={imgRef} alt='Crop me' src={imgSrc} style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }} onLoad={onImageLoad} />
              </ReactCrop>
            )}
            <div>
              {Boolean(completedCrop) && (
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    // border: '1px solid black',
                    objectFit: "contain",
                    width: "100%",
                    height: completedCrop.height,
                  }}
                />
              )}
            </div>
            <Button color='primary' onClick={downloadImage} disabled={!completedCrop}>
              Download 
            </Button>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};
export default ImagecropperContain;
