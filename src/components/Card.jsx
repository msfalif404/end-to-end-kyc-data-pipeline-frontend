export const Card = ({ children, className }) => {
    return (
        <div className={`
        glass-panel
        rounded-2xl p-6 md:p-8
        max-w-md w-full mx-auto
        text-slate-100
        ${className}
    `}>
            {children}
        </div>
    );
};
