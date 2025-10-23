import React from "react";
import Image from "next/image";

type Article = {
  id: number;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
};

type RecommendedSectionProps = {
  articles: Article[];
  onSeeMore?: () => void;
  withGradient?: boolean;
  showArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  canGoLeft?: boolean;
  canGoRight?: boolean;
};

const RecommendedSection: React.FC<RecommendedSectionProps> = ({
  articles,
  onSeeMore,
  withGradient = true,
  showArrows = false,
  onPrev,
  onNext,
  canGoLeft,
  canGoRight,
}) => {
  const rowRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!rowRef.current) return;
    (rowRef.current as HTMLDivElement).scrollTo?.({
      left: 0,
      behavior: "auto",
    });
  }, [articles]);

  const VISIBLE_COUNT = 3;
  const GAP_PX = 24;

  const CARD_LOCAL_SCROLL = () => {
    if (!rowRef.current) return 0;
    const containerWidth = rowRef.current.clientWidth;
    const cardWidth =
      (containerWidth - GAP_PX * (VISIBLE_COUNT - 1)) / VISIBLE_COUNT;
    return cardWidth + GAP_PX;
  };

  const handlePrev = () => {
    const delta = CARD_LOCAL_SCROLL();
    if (delta && rowRef.current) {
      rowRef.current.scrollBy({ left: -delta, behavior: "smooth" });
    }
    onPrev?.();
  };

  const handleNext = () => {
    const delta = CARD_LOCAL_SCROLL();
    if (delta && rowRef.current) {
      rowRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
    onNext?.();
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Recommended for You
          </h3>
          <p className="text-gray-600">Bite-sized articles</p>
        </div>
        {showArrows && (
          <div className="flex gap-2">
            <button
              className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md ${
                !canGoLeft ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handlePrev}
              disabled={!canGoLeft}
              style={{ pointerEvents: canGoLeft ? "auto" : "none" }}
              aria-label="Previous"
              type="button"
            >
              <span className="text-gray-600">‹</span>
            </button>
            <button
              className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md ${
                !canGoRight ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
              disabled={!canGoRight}
              style={{ pointerEvents: canGoRight ? "auto" : "none" }}
              aria-label="Next"
              type="button"
            >
              <span className="text-gray-600">›</span>
            </button>
          </div>
        )}
      </div>

      <div
        ref={rowRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
        style={{ WebkitOverflowScrolling: "touch" }}
        role="list"
      >
        {articles.map((article) => (
          <div
            key={article.id}
            role="listitem"
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer snap-start shrink-0"
            style={{
              flex: `0 0 calc((100% - ${GAP_PX}px * (${VISIBLE_COUNT} - 1)) / ${VISIBLE_COUNT})`,
              minWidth: 260,
            }}
          >
            {withGradient && (
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to top, #F5E7A3 0%, rgba(245, 231, 163, 0.8) 30%, rgba(245, 231, 163, 0.4) 60%, transparent 100%)",
                }}
              />
            )}

            <div className="relative h-64">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={450}
                className="w-full h-full object-cover"
                priority={false}
              />
              <div
                className="absolute bottom-0 left-0 right-0 py-3 px-4 flex items-center justify-between z-20"
                style={{ backgroundColor: "#F5E7A3" }}
              >
                <p className="text-gray-900 text-sm font-medium">
                  {article.title}
                </p>
                <button
                  className="w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                  type="button"
                  aria-label="Open article"
                >
                  <div className="w-0 h-0 border-l-[10px] border-l-gray-900 border-y-[6px] border-y-transparent ml-1" />
                </button>
              </div>
            </div>

            {withGradient && (
              <div
                className="absolute inset-0 z-30 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.9) 100%)",
                  backdropFilter: "blur(2px)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {onSeeMore && (
        <div className="text-center mt-6">
          <button
            onClick={onSeeMore}
            className="text-blue-900 hover:text-blue-700 font-medium text-lg underline cursor-pointer"
            type="button"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default RecommendedSection;
