import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { FileUpload } from "../components/FileUpload";
import { useKYC } from "../context/KYCContext";
import client from "../api/client";
import { Loader2, AlertCircle, ArrowLeft } from "lucide-react";

export const IDUploadPage = () => {
    const navigate = useNavigate();
    const { sessionId, setOcrData } = useKYC();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileUpload = async (file) => {
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await client.post(`/kyc/${sessionId}/id-card`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setOcrData(res.data.ocr_data);
            navigate("/review");
        } catch (err) {
            const msg = err.response?.data?.detail || "Upload failed. Please try again.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-md mb-6 px-1">
                <button onClick={() => navigate("/")} className="text-slate-400 hover:text-white flex items-center gap-2 transition-all hover:-translate-x-1 text-sm font-medium group">
                    <ArrowLeft size={16} className="group-hover:text-blue-400 transition-colors" /> Back
                </button>
            </div>

            <Card>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-display font-bold text-white mb-2">Upload ID Document</h2>
                    <p className="text-slate-400 text-sm">Ensure all details are visible and glare-free.</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 mb-6 text-red-400 text-sm animate-fade-in">
                        <AlertCircle className="shrink-0 mt-0.5" size={18} />
                        <p>{error}</p>
                    </div>
                )}

                {loading ? (
                    <div className="py-16 flex flex-col items-center gap-4 text-slate-400 animate-fade-in">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
                            <Loader2 className="animate-spin text-blue-400 relative z-10" size={48} />
                        </div>
                        <p className="text-sm font-medium animate-pulse">Analyzing document...</p>
                    </div>
                ) : (
                    <FileUpload onFileSelect={handleFileUpload} label="Click to Upload" />
                )}
            </Card>
        </div>
    );
};
