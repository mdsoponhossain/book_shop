import { PiBookOpenTextThin } from "react-icons/pi";
const Logo = () => {
    return (
        <div rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="logo-text-style logo flex items-center">
            <div className="h-0 mb-2">
                <span className="flex items-center gap-1 space-y-0 h-[6px]">
                    <span className="text-sm font-bold text-red-600">Boi</span> <PiBookOpenTextThin className="text-3xl"></PiBookOpenTextThin>
                </span>
                <span className="text-sm font-bold text-red-600">Ghor</span>
            </div>
        </div>
    );
};

export default Logo;