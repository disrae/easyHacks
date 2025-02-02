type Props = {
    children: React.ReactNode;
};
export function CopperBackground({ children }: Props) {
    return (
        <div className="bg-gradient-to-b from-black via-[#6F2700] to-black text-white flex justify-center py-10 md:py-20">
            <div className="max-w-2xl w-full">
                {children}
            </div>
        </div>
    );
} 