function Icon({ d }: { d: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export const Favicon = () => (
  <i aria-hidden="true">
    <img alt="Ignite Icon" src="/favicon.png" className="h-10 w-10" />
  </i>
);

export const XMark = () => (
  <Icon
    d={"M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"}
  />
);
export const Bars = () => (
  <Icon
    d={
      "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    }
  />
);
