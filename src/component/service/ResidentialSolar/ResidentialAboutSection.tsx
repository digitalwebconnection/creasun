// ResidentialAboutSection.tsx
import React from "react";
import { CheckCircle2, Play } from "lucide-react";
const ResidentialAboutSection: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 lg:flex-row lg:items-center lg:gap-14">
                {/* LEFT: IMAGE + OVERLAY CARD */}
                <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-[28px] bg-slate-100 ">
                        <img
                            src="https://images.pexels.com/photos/9875447/pexels-photo-9875447.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Creasun Energy residential solar plant"
                            className="h-full w-full object-cover"
                        />

                        {/* small white card overlapping bottom */}
                        <div className="absolute bottom-0  left-1/2 w-[52%] ms-42  h-38 max-w-sm -translate-x-1/2 rounded-t-2xl bg-white px-6 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                            <p className="text-sm font-semibold text-slate-900">
                                Real-time monitoring
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-slate-500">
                                Track your home&apos;s solar performance live with Creasun&apos;s
                                smart monitoring so you always know how much you&apos;re saving.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: TEXT + STATS */}
                <div className="lg:w-1/2 ">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-green-600">
                        Residential Solar · Creasun Energy, Rajkot
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                        Save energy, cut emissions,
                        <br />
                        boost property value.
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                        Creasun Energy designs and installs high–efficiency rooftop solar
                        systems for homes across Rajkot. Lower your monthly electricity
                        bills, reduce carbon emissions, and upgrade your property with
                        clean, reliable power.
                    </p>

                    {/* STATS ROW */}
                    <div className="mt-10 flex flex-col gap-6  sm:flex-row sm:items-center">
                        {/* left stat */}
                        <div>
                            <p className="text-5xl font-semibold text-slate-900">23+</p>
                            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                                Residential Systems
                            </p>
                        </div>

                        {/* right green card */}
                        <div className="sm:ml-auto">
                            <div className="flex h-full min-w-[320px] items-center  rounded-xl bg-green-600 px-10 py-10 text-white shadow-[0_18px_40px_rgba(22,163,74,0.6)]">
                                <div className="text-center sm:text-left">
                                    <p className="text-4xl font-semibold leading-none">100+</p>
                                    <p className="mt-2 text-sm font-medium">Project Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4  lg:flex-row lg:items-center">
                    {/* LEFT: TEXT + BULLETS */}
                    <div className="flex-1.5">
                        <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                            Commercial & Industrial (C&I)
                            <br />
                            Solar PPA/Leasing
                        </h2>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <Bullet text="Solar Rooftop Design" />
                            <Bullet text="Hybrid Systems" />
                            <Bullet text="Battery Storage" />
                            <Bullet text="Energy Audit & Feasibility" />
                        </div>
                    </div>

                    {/* CENTER: IMAGE WITH PLAY BUTTON */}
                    <div className="flex-1">
                        <div className="relative h-59 overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
                            <img
                                src="https://greenerideal.com/wp-content/uploads/2021/07/business-opportunities-in-solar-1.jpg"
                                alt="Commercial solar installation"
                                className="h-full w-full object-cover"
                            />

                            {/* Play button in center */}
                            <button className="absolute inset-0 flex items-center justify-center">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700">
                                    <Play className="h-6 w-6" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: SUPPORT CARD */}
                    <div className="w-full max-w-xs lg:w-auto">
                        <div className="flex h-full flex-col justify-between rounded-3xl bg-emerald-100 px-7 py-8">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-900">
                                    Local support &amp;
                                    <br />
                                    warranty
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod.
                                </p>
                            </div>

                            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>




        </section>

    );
};


const Bullet: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        <span>{text}</span>
    </div>
);

export default ResidentialAboutSection;
