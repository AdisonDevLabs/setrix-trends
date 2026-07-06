// app/product/[id]/layout.tsx

// This tells Cloudflare to execute this specific dynamic path on the Edge Network
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}