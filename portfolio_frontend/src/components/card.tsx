import { component$ } from "@builder.io/qwik";

// PUBLIC_INTERFACE
export const Card = component$<{children?: any, style?: any, class?: string}>((props) => (
  <div class={["card", props.class].filter(Boolean).join(" ")} style={props.style}>
    {props.children}
  </div>
));
