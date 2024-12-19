// components/Divider.tsx
import React, { useMemo } from "react";

type DividerProps = {
  className?: string;
  styleType?: 1 | 2;
  style?: React.CSSProperties;
};

const CCDivider: React.FC<DividerProps> = ({
  className = "",
  style = {},
  styleType,
}) => {
  const backgroundStyle = useMemo(() => {
    switch (styleType) {
      case 1:
        return { background: "var(--stroke, #26232233)" };
      case 2:
        return { background: "var(--stroke, #134E48)" };

      default:
        return { background: "var(--stroke, #26232233)" };
    }
  }, [styleType]);
  return (
    <div
      className={`w-full h-px ${className}`}
      style={{
        ...backgroundStyle,
        ...style,
      }}
    />
  );
};

export default CCDivider;
