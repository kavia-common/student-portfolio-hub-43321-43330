import { component$, useSignal } from "@builder.io/qwik";
import { Card } from "../components/card";
import { SkillTag } from "../components/skill-tag";
import { Button } from "../components/button";

// PUBLIC_INTERFACE
export default component$(() => {
  const skills = ["Python", "QwikJS", "Public Speaking", "Teamwork"];
  const adding = useSignal(false);
  return (
    <Card>
      <h2>My Skills</h2>
      <div style={{margin:"1em 0 1.5em"}}>
        {skills.map(s => <SkillTag key={s} skill={s} />)}
      </div>
      {adding.value && (
        <form>
          <input type="text" placeholder="Skill name" style={{padding:".5em",marginRight:".4em"}}/>
          <Button type="submit" variant="primary">Add</Button>
          <Button type="button" variant="surface" style={{marginLeft:"8px"}} onClick$={()=>adding.value=false}>Cancel</Button>
        </form>
      )}
      {!adding.value && (
        <Button type="button" onClick$={()=>adding.value=true}>+ Add Skill</Button>
      )}
    </Card>
  );
});
