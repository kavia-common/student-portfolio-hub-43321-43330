export const apiBase = import.meta.env.VITE_API_BASE || "";

export function getStubProfile() {
  return {
    name: "Student Name",
    bio: "Aspiring scholar. I love science, math, and coding.",
    email: "student@email.com"
  };
}

export function getStubProjects() {
  return [
    { title: "AI Biology Fair", description: "Web tool for science modeling.", tags: ["AI","Science"], year: 2024 },
    { title: "DebateX Speaker", description: "Debate timer and scoring app.", tags: ["Web","Productivity"], year: 2023 },
  ];
}

export function getStubAchievements() {
  return [
    { title: "State Math Olympiad Finalist", description: "Placed top 10 in state math contest.", type: "Competition" },
    { title: "Debate Club President", description: "Led club to nationals.", type: "Leadership" },
  ];
}
