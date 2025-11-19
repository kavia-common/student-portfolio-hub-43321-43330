import { component$ } from "@builder.io/qwik";
import { Tag } from "./tag";

// PUBLIC_INTERFACE
export const SkillTag = component$<{skill: string}>(({ skill }) => (
  <Tag color="var(--primary)">{skill}</Tag>
));
