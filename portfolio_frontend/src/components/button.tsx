import { component$ } from "@builder.io/qwik";

// PUBLIC_INTERFACE
export const Button = component$<{type?: "button" | "submit", variant?: "primary"|"secondary"|"surface", children?: any, style?: any, onClick$?: any}>((props) => {
  const {variant="primary", children} = props;
  const className = "btn";
  let baseStyle = {};
  if (variant === "primary") baseStyle = { background: "var(--primary)", color: "#fff" };
  else if (variant === "secondary") baseStyle = { background: "var(--secondary)", color: "#fff" };
  else if (variant === "surface") baseStyle = { background: "var(--surface)", color: "var(--primary)", border: "1.5px solid var(--primary)" };
  return (
    <button type={props.type || "button"} style={{...baseStyle, ...props.style}} class={className} onClick$={props.onClick$}>
      {children}
    </button>
  );
});
