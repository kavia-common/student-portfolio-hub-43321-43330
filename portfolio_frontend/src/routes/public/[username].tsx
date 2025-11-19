import { component$ } from "@builder.io/qwik";
import { Card } from "../../components/card";
import { ProjectListItem } from "../../components/project-list-item";
import { SkillTag } from "../../components/skill-tag";

// PUBLIC_INTERFACE
export default component$(() => {
  // stub profile
  const profile = {
    name: "Sample Student",
    bio: "Aspiring scientist and coder. Winner of the 2024 State Math Olympiad.",
    skills: ["Python", "Public Speaking", "QwikJS"]
  };
  const projects = [
    { title: "AI Biology Fair", description: "Web tool for science modeling.", tags: ["AI","Science"], year: 2024 },
  ];
  return (
    <div>
      <Card>
        <h2>{profile.name}</h2>
        <p style={{color:"var(--text)",opacity:.91}}>{profile.bio}</p>
        <div style={{marginTop:".6em"}}>
          <b>Skills:</b> {profile.skills.map((s) => <SkillTag key={s} skill={s}/> )}
        </div>
      </Card>
      <Card style={{marginTop:"2em"}}>
        <h3 style={{marginBottom:"1em"}}>Projects</h3>
        {projects.map((p) =>
          <ProjectListItem project={p} key={p.title} />
        )}
      </Card>
    </div>
  );
});
