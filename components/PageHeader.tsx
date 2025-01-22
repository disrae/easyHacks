interface PageHeaderProps {
    title: string;
    centered?: boolean;
}

export function PageHeader({ title, centered = false }: PageHeaderProps) {
    return (
        <section className="relative py-5 md:py-10 lg:py-15 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            <div className={`container px-4 md:px-6 relative max-w-3xl mx-auto flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} space-y-4`}>
                <p className={`font-pixel max-w-[700px] text-gray-300 text-base md:text-xl lg:text-3xl`}>
                    {title}
                </p>
            </div>
        </section>
    );
} 