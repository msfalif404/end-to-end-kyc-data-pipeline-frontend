import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { KYCProvider } from "./context/KYCContext";
import { WelcomePage } from "./pages/WelcomePage";
import { IDUploadPage } from "./pages/IDUploadPage";
import { DataReviewPage } from "./pages/DataReviewPage";
import { SelfiePage } from "./pages/SelfiePage";
import { ResultPage } from "./pages/ResultPage";

import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <KYCProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/id-upload" element={<IDUploadPage />} />
            <Route path="/review" element={<DataReviewPage />} />
            <Route path="/selfie" element={<SelfiePage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </KYCProvider>
    </BrowserRouter>
  );
}

export default App;
