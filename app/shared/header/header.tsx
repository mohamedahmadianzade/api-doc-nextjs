import "./header.css";
export default function Header({ children }: { children: any }) {
  return <h1 className="header">{children}</h1>;
}
