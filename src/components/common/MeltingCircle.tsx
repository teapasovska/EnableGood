import Image from "next/image";

interface MeltingCircleProps {
  imageUrl: string;
  percent: string;
  label: string;
  meltColor?: string;
  textColor?: string;
  width?: number;
  height?: number;
}

const MeltingCircle = ({
  imageUrl,
  percent,
  label,
  meltColor,
  textColor,
  width = 140,
  height = 140,
}: MeltingCircleProps) => (
  <div
    className="relative flex flex-col items-center justify-end"
    style={{
      width,
      height,
      borderRadius: "50%",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 2px 16px #0001",
    }}
  >
    <Image
      src={imageUrl}
      alt={label}
      fill
      style={{ objectFit: "cover", zIndex: 1 }}
      sizes={width + "px"}
    />
    <svg
      viewBox="0 0 140 105"
      width={width}
      height={Math.round(height * 0.75)}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: "100%",
        height: "75%",
      }}
    >
      <defs>
        <linearGradient id="icecream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef6c3" />
          <stop offset="100%" stopColor="#f6e08e" />
        </linearGradient>
      </defs>
      <path
        d="M0,18 Q18,52 35,35 Q52,26 70,61 Q87,96 105,70 Q122,52 140,87 V105 H0 Z"
        fill={meltColor}
      />
    </svg>
    <div
      className="absolute"
      style={{
        bottom: 24,
        left: 0,
        width: "100%",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span className="text-2xl font-bold" style={{ color: textColor }}>
        {percent}
      </span>
      <span className="text-xs" style={{ color: textColor }}>
        {label}
      </span>
    </div>
  </div>
);

export default MeltingCircle;
