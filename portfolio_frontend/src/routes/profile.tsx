import { component$ } from "@builder.io/qwik";
import { Card } from "../components/card";
import { Button } from "../components/button";

// PUBLIC_INTERFACE
export default component$(() => {
  return (
    <Card>
      <h2>Edit Profile</h2>
      <form autocomplete="off">
        <div style={{display:"flex",gap:"2rem",flexWrap:"wrap",margin:"2em 0 0.7em"}}>
          <div style={{flex:"1 1 250px", minWidth:"180px"}}>
            <label style={{fontWeight:600,marginBottom:".25em",display:"block"}}>Full Name</label>
            <input type="text" placeholder="Student Name" style={{width:"100%",padding:"0.7em 0.9em", marginBottom:".7em"}} />
            <label style={{fontWeight:600,marginBottom:".25em",display:"block"}}>Email</label>
            <input type="email" placeholder="user@email.com" style={{width:"100%",padding:"0.7em 0.9em", marginBottom:".7em"}} />
          </div>
          <div style={{flex:"2 1 320px",minWidth:"200px"}}>
            <label style={{fontWeight:600,marginBottom:".25em",display:"block"}}>Bio</label>
            <textarea placeholder="Add a short bio..." rows={4} style={{width:"100%",padding:"0.7em 0.9em"}} />
          </div>
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </Card>
  );
});
