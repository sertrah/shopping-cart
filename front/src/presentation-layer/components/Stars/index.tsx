import { FC } from "react";
import "./style.scss";

const Starts: FC<{ className?: string; countReview?: number; rating: string }> = ({
  className = "",
  countReview,
  rating
}) => {
  return (
    <p className={`${className} star`}>
      🌟 {rating} {countReview && <span className="star__reviews">{`(${countReview} reviews)`}</span>}
    </p>
  );
};

export default Starts;
