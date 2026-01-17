import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { CheckCircle, XCircle } from "lucide-react";

export const ResultPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const success = state?.success;
    const message = state?.message;
    const similarity = state?.similarity;

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <Card className="text-center relative overflow-hidden">
                <div className={`absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-tr ${success ? 'from-green-500 to-emerald-500' : 'from-red-500 to-orange-500'}`} />

                <div className="relative">
                    <div className="flex justify-center mb-8">
                        {success ? (
                            <div className="bg-green-500/10 p-4 rounded-full border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-scale-in">
                                <CheckCircle size={56} className="text-green-400" />
                            </div>
                        ) : (
                            <div className="bg-red-500/10 p-4 rounded-full border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-shake">
                                <XCircle size={56} className="text-red-400" />
                            </div>
                        )}
                    </div>

                    <h1 className="text-3xl font-display font-bold mb-3 text-white">
                        {success ? "Verification Successful" : "Verification Failed"}
                    </h1>

                    <p className={`mb-6 text-base leading-relaxed max-w-xs mx-auto ${success ? 'text-slate-400' : 'text-red-400'}`}>
                        {success
                            ? "Identity confirmed successfully. You can safely close this window."
                            : message || "Could not verify identity. Please try again."
                        }
                    </p>

                    {similarity !== undefined && (
                        <div className={`mb-10 px-4 py-2 rounded-full inline-flex items-center gap-2 border ${similarity > 70
                                ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                : similarity >= 30
                                    ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                            }`}>
                            <span className="text-xs font-bold uppercase tracking-wider">Match Confidence</span>
                            <span className="text-sm font-bold">{similarity}%</span>
                        </div>
                    )}

                    <Button onClick={() => navigate("/")} variant={success ? "primary" : "secondary"} className="w-full">
                        {success ? "Done" : "Try Again"}
                    </Button>
                </div>
            </Card>
        </div>
    );
};
