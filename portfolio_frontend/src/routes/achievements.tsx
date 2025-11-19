import { component$ } from "@builder.io/qwik";
import { AchievementListItem } from "../components/achievement-list-item";

// PUBLIC_INTERFACE
export default component$(() => {
  // Placeholder achievement data
  const achievements = [
    { title: "State Math Olympiad Finalist", description: "Placed top 10 in state math contest.", type: "Competition" },
    { title: "Debate Club President", description: "Led club to nationals.", type: "Leadership" },
  ];
  return (
    <div>
      <h2 style={{marginBottom:"1.2em"}}>My Achievements</h2>
      {achievements.map(a => (
        <AchievementListItem key={a.title} achievement={a} />
      ))}
    </div>
  );
});
