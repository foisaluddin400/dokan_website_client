import React from "react";

interface Props {
  title: string;
  description?: string;
  align?: "left" | "center";
}

const Title: React.FC<Props> = ({
  title,
  description,
  align = "left",
}) => {
  return (
    <div
      className={`space-y-1 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {/* TITLE */}
      <h2 className="text-2xl md:text-2xl font-semibold text-gray-900 ">
        {title}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p className="text-sm md:text-base text-gray-500 leading-relaxed ">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;