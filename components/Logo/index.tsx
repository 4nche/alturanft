import React from 'react';

function Logo() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="55" cy="55" r="55" fill="white" />
      <circle
        cx="55"
        cy="55"
        r="55"
        fill="url(#paint0_angular_101_3)"
        fillOpacity="0.7"
      />
      <circle
        cx="55"
        cy="55"
        r="55"
        fill="url(#paint1_linear_101_3)"
        fillOpacity="0.6"
      />
      <defs>
        <radialGradient
          id="paint0_angular_101_3"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55 55) rotate(90) scale(55)"
        >
          <stop stopColor="#EF9A36" />
          <stop offset="0.369792" stopColor="#D97C47" stopOpacity="0.79" />
          <stop offset="0.869792" stopColor="#F1ACAC" stopOpacity="0.79" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_101_3"
          x1="12"
          y1="27.5"
          x2="95"
          y2="83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF0A36" />
          <stop offset="1" stopColor="#F1A44A" stopOpacity="0.74" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
