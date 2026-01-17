import { createContext, useContext, useState } from "react";

const KYCContext = createContext();

export const KYCProvider = ({ children }) => {
    const [sessionId, setSessionId] = useState(null);
    const [email, setEmail] = useState("");
    const [ocrData, setOcrData] = useState(null);
    const [step, setStep] = useState("WELCOME"); // WELCOME, ID_UPLOAD, REVIEW, SELFIE, RESULT

    const value = {
        sessionId,
        setSessionId,
        email,
        setEmail,
        ocrData,
        setOcrData,
        step,
        setStep,
    };

    return <KYCContext.Provider value={value}>{children}</KYCContext.Provider>;
};

export const useKYC = () => {
    const context = useContext(KYCContext);
    if (!context) {
        throw new Error("useKYC must be used within a KYCProvider");
    }
    return context;
};
