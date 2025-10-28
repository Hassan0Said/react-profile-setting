import React from "react";
const Icon = ({ path, className = "w-5 h-5", fill = "none" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d={path} />
  </svg>
);

export const Icons = {
  Menu: (props) => <Icon path="M4 12h16M4 6h16M4 18h16" {...props} />,
  Search: (props) => (
    <Icon
      path="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM21 21l-4.3-4.3"
      {...props}
    />
  ),
  Bell: (props) => (
    <Icon
      path="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
      {...props}
    />
  ),
  GraduationCap: (props) => (
    <Icon
      path="M21.42 10.922a1 1 0 0 0-.012-1.84l-8.428-4.223a1.002 1.002 0 0 0-.962 0L2.6 9.082a1 1 0 0 0-.013 1.84l.872.436M4.9 12.922L12 16.5l7.1-3.578M12 22v-5.5"
      {...props}
    />
  ),
  Dashboard: (props) => <Icon path="M3 3v18h18M18 13V9M12 17v-4M6 21v-8" {...props} />,
  PlusCircle: (props) => (
    <Icon path="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 5v10m5-5H7" {...props} />
  ),
  Layers: (props) => (
    <Icon path="M12 1.5L2 6l10 4.5L22 6l-10-4.5zM2 13.5l10 4.5 10-4.5M2 21l10-4.5 10 4.5" {...props} />
  ),
  CreditCard: (props) => (
    <Icon path="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zM2 9h20M7 17h4" {...props} />
  ),
  Settings: (props) => (
    <Icon path="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zM12 4v2m0 16v-2m5.2-11.2l-1.4 1.4M6.8 17.2l-1.4 1.4M20 12h-2m-16 0H4M17.2 6.8l-1.4 1.4M6.8 17.2l-1.4 1.4" {...props} />
  ),
  Star: (props) => (
    <Icon
      path="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 6.91 14.14 2 9.27l6.91-1.01L12 2z"
      {...props}
      fill={props.fill || "none"}
    />
  ),
  Users: (props) => (
    <Icon
      path="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3a4 4 0 1 1-1 8"
      {...props}
    />
  ),
  Dots: (props) => <Icon path="M12 12h.01M19 12h.01M5 12h.01" {...props} />,
  ChevronLeft: (props) => <Icon path="M15 18l-6-6 6-6" {...props} />,
  ChevronRight: (props) => <Icon path="M9 18l6-6-6-6" {...props} />,
  ChevronDown: (props) => <Icon path="M19 9l-7 7-7-7" {...props} className="w-4 h-4" />,
};
