import { component$ } from "@builder.io/qwik";
import { Card } from "./card";
import { Tag } from "./tag";

// PUBLIC_INTERFACE
export const AchievementListItem = component$<{achievement: any}>(({ achievement }) => (
  <Card class="achievement-list-item" style={{marginBottom:"1rem"}}>
    <div style={{display:"flex",alignItems:"center",gap:"1em"}}>
      <Tag color="var(--success)">{achievement.type || "Award"}</Tag>
      <div>
        <div style={{fontWeight:700}}>{achievement.title}</div>
        <div style={{color:"var(--text-secondary)",fontSize:".93em"}}>{achievement.description}</div>
      </div>
    </div>
  </Card>
));
