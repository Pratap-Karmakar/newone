import React from "react";

// Define the prop types with specific restrictions
interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: 'left' | 'right'; // Restrict to 'left' or 'right'
  handleClick?: () => void; // Optional click handler
  otherClasses?: string; // Optional additional classes
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses = "" // Provide a default value for optional props
}) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] w-full focus:outline-none md:w-60 md:mt-10"
        onClick={handleClick} // Attach handleClick if provided
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
