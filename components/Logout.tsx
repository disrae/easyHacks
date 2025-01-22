'use client';

import { useAuthActions } from "@convex-dev/auth/react";
import PowerIcon from "@/components/icons/power";

const Logout = () => {
    const { signOut } = useAuthActions();

    return (
        <div className="group relative">
            <button
                onClick={() => void signOut()}
                className="w-10 h-10 text-teal-600 hover:text-teal-500 transition-colors"
            >
                <PowerIcon />
            </button>
            <span className="absolute -bottom-4 left-[15px] -translate-x-1/2 bg-black/80 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Log out
            </span>
        </div>
    );
};

export default Logout;
