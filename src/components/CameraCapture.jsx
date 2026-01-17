import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { Camera, RefreshCw, Check } from "lucide-react";
import { Button } from "./Button";

export const CameraCapture = ({ onCapture }) => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    };

    const confirm = () => {
        if (imgSrc) {
            fetch(imgSrc)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
                    onCapture(file);
                });
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200">
                {imgSrc ? (
                    <img src={imgSrc} alt="captured" className="w-full h-full object-cover" />
                ) : (
                    <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="w-full h-full object-cover"
                        videoConstraints={{ facingMode: "user" }}
                    />
                )}
            </div>

            <div className="flex gap-3 w-full justify-center">
                {imgSrc ? (
                    <>
                        <Button variant="secondary" onClick={retake} className="flex-1">
                            <RefreshCw size={16} className="mr-2" /> Retake
                        </Button>
                        <Button onClick={confirm} className="flex-1 bg-green-600 hover:bg-green-700 border-transparent">
                            <Check size={16} className="mr-2" /> Confirm
                        </Button>
                    </>
                ) : (
                    <Button onClick={capture} className="w-full">
                        <Camera size={16} className="mr-2" /> Capture Photo
                    </Button>
                )}
            </div>
        </div>
    );
};
