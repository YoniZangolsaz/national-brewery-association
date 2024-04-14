import { useState } from "react";
import Rating from "@mui/material/Rating";
type BasicRatingProps = {
  rating: number | null;
  onChange: (value: number | null) => void;
};

const BasicRating = ({ rating, onChange }: BasicRatingProps) => {
  const [value, setValue] = useState<number | null>(rating);

  return (
    <Rating
      onClick={(e) => {
        e.stopPropagation();
      }}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        onChange(newValue);
      }}
    />
  );
};

export default BasicRating;
