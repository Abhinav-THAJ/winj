import React from "react";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Roof with Chimney */}
      <path 
        d="M 30 90 L 100 40 L 140 68.5 L 140 50 L 155 50 L 155 79 L 170 90 L 152 90 L 100 53 L 48 90 Z" 
        fill="currentColor"
      />
      
      {/* W */}
      <path 
        d="M 35 105 L 53 165 H 65 L 75 125 L 85 165 H 97 L 115 105 H 100 L 90 145 L 80 105 H 70 L 60 145 L 50 105 Z" 
        fill="currentColor"
      />
      
      {/* J */}
      <path 
        d="M 120 105 H 165 V 118 H 150 V 145 C 150 160, 135 165, 120 155 V 140 C 128 148, 136 145, 136 138 V 118 H 120 Z" 
        fill="currentColor"
      />
    </svg>
  );
}
