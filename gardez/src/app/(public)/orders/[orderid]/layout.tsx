
interface layout {
  children: React.ReactNode;
}

export default function Layout({ children }: layout) {
  return <div id="teste" className="border">{children}</div>;
}
