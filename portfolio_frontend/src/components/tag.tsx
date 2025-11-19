import { component$ } from "@builder.io/qwik";

// PUBLIC_INTERFACE
export const Tag = component$<{ color?: string, children?: any, style?: any }>((props) => (
  <span class="tag" style={{
    background: props.color || "var(--primary)",
    ...props.style
  }}>{props.children}</span>
));
