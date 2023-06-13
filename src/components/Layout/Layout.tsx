export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={`w-full max-w-5xl mx-auto grow ${className}`}>
      {children}
    </main>
  );
};
