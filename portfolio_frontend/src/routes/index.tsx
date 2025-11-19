import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Card } from "../components/card";
import { Button } from "../components/button";
import { Tag } from "../components/tag";

// PUBLIC_INTERFACE
export default component$(() => {
  return (
    <div>
      <h1 style={{fontWeight: 800, fontSize: "2rem", marginBottom:"1rem"}}>Welcome back, Student!</h1>
      <div style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
        <Card style={{flex:"1 1 280px",minWidth:"270px"}}>
          <div style={{fontSize:".92em"}}>Profile Completion</div>
          <div style={{fontWeight:700,fontSize:"1.5em",margin:"0.1em 0"}}>80%</div>
          <Button variant="primary" style={{ marginTop: "0.4rem" }} type="button">
            Complete Profile
          </Button>
        </Card>
        <Card style={{flex:"1 1 320px",minWidth:"260px"}}>
          <div style={{fontWeight:700,fontSize:"1.1em",marginBottom:".4em"}}>Recent Project</div>
          <div style={{color:"var(--primary)",fontWeight:700}}>AI Biology Fair</div>
          <div style={{margin:"0.3em 0 .5em"}}>A web tool for biology modeling. <Tag>AI</Tag> <Tag>Science</Tag></div>
          <Button variant="secondary" type="button">Edit Project</Button>
        </Card>
      </div>
      <div style={{marginTop:"2rem"}}>
        <Card>
          <div>
            <b>Quick Links:</b>
            <span style={{marginLeft:".7em"}}>
              <a href="/profile">Edit Profile</a> |
              <a href="/projects" style={{margin:"0 .7em"}}>My Projects</a> |
              <a href="/skills">Manage Skills</a>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "portfolio_frontend",
  meta: [
    {
      name: "description",
      content: "Ultralight Qwik template",
    },
  ],
};
