import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export const FileUpload = ({ onFileSelect, label = "Upload Document" }) => {
    const inputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };

    return (
        <div
            onClick={() => inputRef.current.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
        border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all flex flex-col items-center justify-center gap-4 group
        ${isDragging
                    ? "border-blue-500/50 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                }
      `}
        >
            <input
                type="file"
                ref={inputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
            />

            <div className={`p-4 rounded-full transition-colors ${isDragging ? 'bg-blue-500/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
                <UploadCloud size={24} className={`transition-colors ${isDragging ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
            </div>

            <div className="text-center">
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{label}</p>
                <p className="text-xs text-slate-400 mt-1">Click to upload or drag and drop</p>
            </div>
        </div>
    );
};
