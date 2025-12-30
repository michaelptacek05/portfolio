export default function ProjectsLayout({
  children,
  modal, // <--- Musí tu být tato prop
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal} {/* <--- Musí se vykreslit zde */}
    </>
  );
}