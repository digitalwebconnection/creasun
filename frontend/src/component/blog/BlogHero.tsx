import {
    SunMedium,
} from "lucide-react";
import BlogPage from "./BlogPage";
import heroImg from "../../assets/blog-img2.webp";
import heroImgMobile from "../../assets/blog-img3.webp";

export default function SolarBlogPage() {

    return (
        <>
            {/* ===== BLOG HERO / INTRO ===== */}
            <section className="relative overflow-hidden px-6 pt-28 pb-12 md:px-10 md:pt-32 md:pb-16 border-b border-white/10 flex items-center justify-center">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={heroImgMobile}
                        alt="Solar panels mobile"
                        className="h-full w-full object-cover md:hidden"
                    />
                    <img
                        src={heroImg}
                        alt="Solar panels desktop"
                        className="hidden md:block h-full w-full object-cover"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-6 md:space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#F5B835]/40 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wider text-[#F5B835] uppercase backdrop-blur-sm">
                        <SunMedium className="h-4 w-4" />
                        Solar Knowledge Hub
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-md">
                        Learn Solar in <br className="hidden lg:block" />
                        <span className="text-[#F5B835]">
                            Simple, Practical Language.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
                        Guides, case studies, and explainers to help you make confident solar decisions for your home, factory, or business.
                    </p>

                    {/* Pills */}
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 hover:border-[#F5B835] hover:bg-[#F5B835]/10 hover:text-[#F5B835] transition-all backdrop-blur-sm cursor-default">
                            Payback & savings
                        </span>
                        <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 hover:border-[#F5B835] hover:bg-[#F5B835]/10 hover:text-[#F5B835] transition-all backdrop-blur-sm cursor-default">
                            Rooftop design basics
                        </span>
                        <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/90 hover:border-[#F5B835] hover:bg-[#F5B835]/10 hover:text-[#F5B835] transition-all backdrop-blur-sm cursor-default">
                            Approvals & policy
                        </span>
                    </div>
                </div>

                {/* Decorative background glow matching home page */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[190px] bg-[#F5B835]/25 blur-3xl opacity-50 z-0" />
            </section>

            <main className="mx-auto max-w-7xl px-4 md:px-0 py-6 md:py-10 space-y-10 md:space-y-14">
                {/* ===== MAIN CONTENT: BLOG GRID + SIDEBAR ===== */}
                <BlogPage />
            </main>
        </>
    );
}

