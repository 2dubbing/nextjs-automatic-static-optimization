import Link from "next/link";
import { ReactNode } from "react";

const navStyle = {
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
  justifyContents: "space-between",
};

const linkStyle = {
  display: "inline-block",
  width: "100px",
  height: "50px",
  lineHeight: "50px",
  fontSize: "1.2rem",
  fontWeight: 700,
};

interface Props {
  children: ReactNode;
}

export default function Navigation({ children }: Props) {
  return (
    <>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>
          Home
        </Link>
        <Link href="/about" style={linkStyle}>
          About
        </Link>
        <Link href="/event" style={linkStyle}>
          Event
        </Link>
        <span
          style={{ ...linkStyle, cursor: "pointer" }}
          onClick={() => window.location.replace("/")}
        >
          Home(location.replace)
        </span>
      </nav>
      {children}
    </>
  );
}
