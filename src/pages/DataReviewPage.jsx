import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { useKYC } from "../context/KYCContext";
import { ArrowRight, UserCheck, Calendar, Briefcase, Hash, MapPin, BadgeCheck, ArrowLeft } from "lucide-react";

export const DataReviewPage = () => {
    const navigate = useNavigate();
    const { ocrData } = useKYC();

    if (!ocrData) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50">
                <Card className="text-center">
                    <p className="text-slate-500 mb-4">No data found.</p>
                    <Button onClick={() => navigate("/")}>Go Home</Button>
                </Card>
            </div>
        );
    }

    const getIcon = (key) => {
        const k = key.toLowerCase();
        if (k.includes("nama")) return <UserCheck size={14} />;
        if (k.includes("tanggal") || k.includes("berlaku")) return <Calendar size={14} />;
        if (k.includes("jabatan") || k.includes("pekerjaan")) return <Briefcase size={14} />;
        if (k.includes("nik")) return <BadgeCheck size={14} />;
        if (k.includes("alamat")) return <MapPin size={14} />;
        return <Hash size={14} />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <div className="w-full max-w-md mb-6 px-1">
                <button onClick={() => navigate("/id-upload")} className="text-slate-400 hover:text-white flex items-center gap-2 transition-all hover:-translate-x-1 text-sm font-medium group">
                    <ArrowLeft size={16} className="group-hover:text-blue-400 transition-colors" /> Back
                </button>
            </div>

            <Card>
                <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                    <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                        <UserCheck size={24} className="text-blue-400" />
                    </div>
                    <div>
                        <h2 className="text-xl font-display font-bold text-white">Confirm Details</h2>
                        <p className="text-slate-400 text-xs mt-0.5">Verify extracted information carefully.</p>
                    </div>
                </div>

                <div className="space-y-4 mb-8">
                    {Object.entries(ocrData).map(([key, value]) => {
                        if (!value) return null;
                        const label = key.replace(/_/g, " ").toUpperCase();
                        return (
                            <div key={key} className="flex flex-col group hover:bg-white/5 p-2 rounded-lg transition-colors -mx-2">
                                <div className="flex items-center gap-2 text-slate-500 mb-1 group-hover:text-blue-400 transition-colors">
                                    {getIcon(key)}
                                    <span className="text-[10px] font-bold tracking-wider uppercase">{label}</span>
                                </div>
                                <p className="text-sm font-medium text-slate-200 pl-6 border-l-2 border-white/5 group-hover:border-blue-500/50 transition-colors">{String(value)}</p>
                            </div>
                        );
                    })}
                </div>

                <Button onClick={() => navigate("/selfie")} className="w-full shadow-lg shadow-blue-500/20">
                    Confirm & Continue <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Card>
        </div>
    );
};
