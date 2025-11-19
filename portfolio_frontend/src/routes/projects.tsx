import { component$, useSignal } from "@builder.io/qwik";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { ProjectListItem } from "../components/project-list-item";

// PUBLIC_INTERFACE
export default component$(() => {
  // Stub: list of projects
  const projects = [
    { title: "AI Biology Fair", description: "Web tool for science modeling.", tags: ["AI","Science"], year: 2024 },
    { title: "DebateX Speaker", description: "Debate timer and scoring app.", tags: ["Web","Productivity"], year: 2023 },
  ];
  const mode = useSignal<"list"|"add">("list");
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1em"}}>
        <h2 style={{margin:0}}>My Projects</h2>
        <Button variant="primary" onClick$={() => (mode.value="add")}>+ Add Project</Button>
      </div>
      {mode.value==="add" ? (
        <Card>
          <h3>Add New Project (stub)</h3>
          <form autocomplete="off">
            <label>Name</label>
            <input type="text" style={{width:"100%",margin:"6px 0 1em",padding:"0.5em"}} placeholder="Project name"/>
            <label>Description</label>
            <textarea style={{width:"100%",margin:"6px 0 1em",padding:"0.5em"}} placeholder="Short description"></textarea>
            <Button type="submit" style={{marginTop:"0.2em"}}>Save</Button>
            <Button type="button" variant="surface" style={{marginLeft:"8px"}}
             onClick$={()=>mode.value="list"}>Cancel</Button>
          </form>
        </Card>
      ): (
        projects.map(p => <ProjectListItem key={p.title} project={p} />)
      )}
    </div>
  );
});
