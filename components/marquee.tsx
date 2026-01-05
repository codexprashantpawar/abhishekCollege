export default function AdmissionMarquee() {
  return (
    <div className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-2 overflow-hidden relative">
      <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"></div>
      <div className="animate-marquee whitespace-nowrap font-semibold relative z-10">
        <span className="inline-block mx-4">✦ ADMISSION OPEN FOR ACADEMIC YEAR 2025-26 ✦</span>
        <span className="inline-block mx-4">✦ EXCELLENCE IN EDUCATION SINCE 2005 ✦</span>
        <span className="inline-block mx-4">✦ ADMISSION OPEN FOR ALL CLASSES ✦</span>
        <span className="inline-block mx-4">✦ LIMITED SEATS AVAILABLE ✦</span>
      </div>
    </div>
  )
}

