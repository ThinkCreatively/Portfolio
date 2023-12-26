import React from "react";

interface ResumeIconProps {
  color: string;
}

const SvgComponent = ({ color }: ResumeIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={40}
    height={40}
    viewBox="0 0 392.533 392.533"
  >
    <path
      fill={color}
      style={{ transition: "fill 0.2s ease-in-out" }}
      d="M292.396 324.849H99.879c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h192.582c6.012 0 10.925-4.849 10.925-10.925-.065-6.077-4.913-10.925-10.99-10.925zM292.396 277.01H99.879c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h192.582c6.012 0 10.925-4.849 10.925-10.925-.065-6.076-4.913-10.925-10.99-10.925zM196.137 45.834c-25.859 0-46.998 21.075-46.998 46.998 0 25.859 21.139 46.933 46.998 46.933s46.998-21.075 46.998-46.998-21.139-46.933-46.998-46.933zm0 72.017c-13.77 0-25.083-11.313-25.083-25.083 0-13.77 11.248-25.083 25.083-25.083s25.083 11.313 25.083 25.083c0 13.769-11.313 25.083-25.083 25.083zM258.521 163.362c-39.887-15.515-84.752-15.515-124.638 0-13.059 5.107-21.786 18.101-21.786 32.388v44.347c-.065 6.012 4.849 10.925 10.861 10.925h146.424c6.012 0 10.925-4.848 10.925-10.925V195.75c0-14.287-8.727-27.281-21.786-32.388zm0 65.874H133.883v-33.422c0-5.301 3.168-10.214 7.887-12.024 34.844-13.511 74.02-13.511 108.865 0 4.719 1.875 7.887 6.659 7.887 12.024v33.422z"
    />
    <path
      fill={color}
      style={{ transition: "fill 0.2s ease-in-out" }}
      d="M313.083 0H131.491c-8.404 0-16.291 3.232-22.238 9.18L57.018 61.414c-5.947 5.948-9.18 13.834-9.18 22.238v277.333c0 17.39 14.158 31.547 31.547 31.547h233.762c17.39 0 31.547-14.158 31.547-31.547V31.547C344.501 14.158 330.343 0 313.083 0zM112.032 37.236v27.022H85.01l27.022-27.022zm210.683 79.58h-40.598c-6.012 0-10.925 4.849-10.925 10.925 0 6.012 4.848 10.925 10.925 10.925h40.598v19.394h-14.869c-6.012 0-10.925 4.848-10.925 10.925 0 6.012 4.849 10.925 10.925 10.925h14.869v181.139c0 5.366-4.331 9.697-9.632 9.697H79.192c-5.301 0-9.632-4.331-9.632-9.632V86.044h53.398c6.012 0 10.925-4.848 10.925-10.925V21.721h179.2c5.301 0 9.632 4.331 9.632 9.632v85.463z"
    />
  </svg>
);

export default SvgComponent;
