import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { useKYC } from "../context/KYCContext";
import client from "../api/client";
import { ArrowRight, ShieldCheck, Loader2 } from "lucide-react";

export const WelcomePage = () => {
    const navigate = useNavigate();
    const { setSessionId, email, setEmail } = useKYC();
    const [loading, setLoading] = useState(false);

    const startSession = async () => {
        if (!email) {
            alert("Please provide an email address.");
            return;
        }
        setLoading(true);
        try {
            const res = await client.post("/kyc/init", { email });
            setSessionId(res.data.id);
            navigate("/id-upload");
        } catch (error) {
            console.error("Failed to init session", error);
            alert("Could not start session. Is backend running?");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <Card className="text-center relative overflow-hidden backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10 pointer-events-none" />

                <div className="relative">
                    <div className="flex justify-center mb-8">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 shadow-inner">
                            <ShieldCheck size={40} className="text-blue-400 drop-shadow-lg" />
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">
                        Identity Check
                    </h1>

                    <p className="text-slate-400 mb-8 text-base leading-relaxed max-w-xs mx-auto">
                        Secure, AI-powered identity verification in seconds. Please enter your email to continue.
                    </p>

                    <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all font-sans"
                    />

                    <Button onClick={startSession} className="w-full shadow-lg shadow-blue-500/25" disabled={loading || !email}>
                        {loading ? (
                            <>
                                <Loader2 size={18} className="mr-2 animate-spin" /> Starting...
                            </>
                        ) : (
                            <>
                                Start Verification <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </Button>
                </div>
            </Card>
        </div>
    );
};

