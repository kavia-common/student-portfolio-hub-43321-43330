import { component$ } from "@builder.io/qwik";
import { Card } from "./card";
import { Tag } from "./tag";

// PUBLIC_INTERFACE
export const ProjectListItem = component$<{project: any}>(({ project }) => (
  <Card class="project-list-item" style={{marginBottom:"1rem"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"0.6em"}}>
      <div>
        <div style={{fontWeight:700,fontSize:"1.12em",marginBottom:"0.1em"}}>{project.title}</div>
        <div style={{fontSize:".96em",color:"var(--text-secondary)",opacity:1,marginBottom:".3em"}}>{project.description}</div>
        <div style={{marginTop:"0.2em"}}>
          {project.tags?.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </div>
      <div style={{minWidth:"72px",textAlign:"right"}}>
        <Tag color="var(--secondary)">Year: {project.year}</Tag>
      </div>
    </div>
  </Card>
));
