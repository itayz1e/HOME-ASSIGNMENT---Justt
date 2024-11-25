import React from "react";
import { PaginationControlsProps } from "../types/interface";
import ArrowLeftIcon from "../assets/ArrowLeftIcon";
import ArrowRightIcon from "../assets/ArrowRightIcon";

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}) => {
  return (
    <div className="pagination-controls">
      <button onClick={onPrev} disabled={currentPage === 1}>
        <ArrowLeftIcon />
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="next-button"
      >
        <div className="arrow-icon">
        <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
};

export default PaginationControls;
