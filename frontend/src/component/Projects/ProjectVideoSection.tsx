import { motion } from "framer-motion";

import video1 from "../../assets/videos/creasun_video1.mp4";
import video2 from "../../assets/videos/creasun_video2.mp4";
import video3 from "../../assets/videos/creasun_video3.mp4";
import video4 from "../../assets/videos/creasun_video4.mp4";
import video5 from "../../assets/videos/creasun_video5.mp4";

export type VideoItem = {
  id: string;
  src: string;
};

const VIDEOS: VideoItem[] = [
  { id: "video-1", src: video1 },
  { id: "video-2", src: video2 },
  { id: "video-3", src: video3 },
  { id: "video-4", src: video4 },
  { id: "video-5", src: video5 },
];

export default function ProjectVideoSection() {
  return (
    <section className="bg-slate-50 text-slate-900 py-16 px-4 md:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header matching Creasun site design */}
        <header className="text-center max-w-4xl mx-auto mb-12">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#0A2E9E] ring-1 ring-[#061422]/10 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
            Creasun Energy · Video Showcase
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#031E6C]">
            Solar Project <span className="bg-[#0A2E9E] bg-clip-text text-transparent">Videos</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Watch drone aerial views and site video walkthroughs of Creasun Energy solar installations.
          </p>
        </header>

        {/* 3 Videos Per Row Grid Layout with Increased Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-black rounded-xl border border-slate-300 shadow-lg hover:shadow-xl transition-all overflow-hidden relative group h-[320px] sm:h-[380px] lg:h-[420px] cursor-pointer"
            >
              <video
                src={video.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={(e) => {
                  // Pause all other videos when one video starts playing
                  const allVideos = document.querySelectorAll<HTMLVideoElement>("section video");
                  allVideos.forEach((v) => {
                    if (v !== e.currentTarget) v.pause();
                  });
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
