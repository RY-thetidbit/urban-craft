export function Icon({ name, className = "h-6 w-6" }) {
  const paths = {
    kitchen: (
      <>
        <path d="M3 9h18M3 9l1-4a2 2 0 0 1 2-1.5h12A2 2 0 0 1 20 5l1 4M4 9v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M9 13h0M9 17h6" />
      </>
    ),
    wardrobe: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 3v18M9.5 11v2M14.5 11v2" />
      </>
    ),
    sofa: (
      <>
        <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M6 16v2M18 16v2" />
      </>
    ),
    ceiling: (
      <>
        <path d="M3 7h18M3 7l3-3h12l3 3M7 7v3M12 7v3M17 7v3M5 14h14M5 18h14" />
      </>
    ),
    tv: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="1.5" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    paint: (
      <>
        <path d="M19 3H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM12 11v4a2 2 0 0 1-2 2H9a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
      </>
    ),
    ruler: (
      <>
        <path d="M5 19 19 5l-2-2L3 17l2 2ZM7 13l2 2M11 9l2 2M15 5l2 2" />
      </>
    ),
    cube: (
      <>
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5ZM3 7l9 5 9-5M12 12v10" />
      </>
    ),
    hammer: (
      <>
        <path d="m15 12-8.4 8.4a1.5 1.5 0 0 1-2.1-2.1L12.9 9.9M18 15l3-3-6-6-3 3M15 6l3 3" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3ZM9.5 12l2 2 3.5-3.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    rupee: (
      <>
        <path d="M7 5h10M7 9h10M7 13h4c2.2 0 4-1.8 4-4M7 13l6 6" />
      </>
    ),
    star: (
      <>
        <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
      </>
    ),
    phone: (
      <>
        <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
        <path d="M8.5 8.5c0 4 3 7 7 7 .6 0 1-.2 1.2-.7l.3-1c.1-.4 0-.7-.4-.9l-1.6-.7c-.3-.1-.6 0-.8.2l-.5.6c-1-.5-1.8-1.3-2.3-2.3l.6-.5c.2-.2.3-.5.2-.8l-.7-1.6c-.2-.4-.5-.5-.9-.4l-1 .3c-.5.2-.7.6-.7 1.1Z" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="m5 12 4 4 10-10" />,
    quote: (
      <>
        <path d="M7 7H4v6h5V8c0-2 1-3 3-3M19 7h-3v6h5V8c0-2 1-3 3-3" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
    facebook: <path d="M14 8h2V5h-2c-2 0-3 1.3-3 3.2V10H9v3h2v6h3v-6h2.2l.8-3H14V8.5c0-.3.2-.5.5-.5Z" />,
    youtube: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m11 9 4 3-4 3V9Z" fill="currentColor" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
