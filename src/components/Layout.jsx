import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Home } from 'lucide-react';

export const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <ShieldCheck className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="text-lg font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                                SecureKYC
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            {location.pathname !== '/' && (
                                <Link to="/" className="p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
                                    <Home className="w-5 h-5" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="animate-fade-in">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-slate-950/30 py-8">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} SecureKYC Pipeline. Enterprise Grade Identity Verification.</p>
                </div>
            </footer>
        </div>
    );
};
