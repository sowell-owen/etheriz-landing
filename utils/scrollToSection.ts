export  const scrollToSection = (
  ref: React.RefObject<HTMLDivElement | null> | string
) => {
  if (typeof ref === "string") {
    const element = document.getElementById(ref);
    element?.scrollIntoView({ behavior: "smooth" });
  } else {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
};