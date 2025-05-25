export default function ScrollArrow() {
  const scrollToNext = () => {
    const section = document.getElementById("next-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-10 animate-bounce cursor-pointer" onClick={scrollToNext}>
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}