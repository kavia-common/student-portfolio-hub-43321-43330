import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const NAV_ITEMS = [
  { path: "/", icon: "🏠", label: "Home" },
  { path: "/profile", icon: "👤", label: "Profile" },
  { path: "/projects", icon: "💼", label: "Projects" },
  { path: "/achievements", icon: "🏆", label: "Achievements" },
  { path: "/skills", icon: "🛠", label: "Skills" },
];

export const AppShell = component$((props: { children?: any }) => {
  const collapsed = useSignal(false);
  const loc = useLocation();

  return (
    <div class="app-shell" style="min-height:100vh;display:flex;background:var(--background)">
      <aside class={["sidebar", collapsed.value && "sidebar-collapsed"].filter(Boolean).join(" ")} style={{
        background: "var(--surface)",
        minWidth: collapsed.value ? "64px" : "220px",
        width: collapsed.value ? "64px" : "220px",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.2s",
        gap: "0",
      }}>
        <button class="btn" aria-label="Toggle sidebar" style={{
          background: "transparent", color: "var(--primary)", margin: "0.5rem auto 1rem",
          boxShadow: "none", border: "none", fontSize: "1.45rem", cursor: "pointer"
        }} onClick$={() => (collapsed.value = !collapsed.value)}>
          {collapsed.value ? '☰' : '⏴'}
        </button>
        <nav style={{flex: 1}}>
          <ul style={{listStyle: "none", padding: 0, margin: 0}}>
            {NAV_ITEMS.map(item => (
              <li key={item.path}>
                <Link href={item.path} class={[
                  "sidebar-link",
                  loc.url.pathname === item.path ? "active" : ""
                ].join(" ")}
                style={{
                  display: "flex", alignItems: "center",
                  padding: collapsed.value ? "0.5rem" : "0.7rem 1.1rem",
                  gap: "0.8em",
                  fontWeight: 500,
                  borderRadius: "var(--radius-md)",
                  // Sidebar link coloring now handled by CSS in theme.css for better theme switching
                  margin: ".1rem 0"
                }}>
                  <span style={{
                    fontSize: "1.28em",
                    display: "inline-block",
                    width: collapsed.value ? "1.75em" : "1.2em",
                    textAlign: "center"
                  }}>{item.icon}</span>
                  {collapsed.value ? null : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{padding: collapsed.value ? "0 0.3rem 1rem" : "0 1.1rem 1rem"}}>
          <div class="badge" style={{
            background: "var(--primary)",
            fontSize: ".74em"
          }}>
            Ocean Professional
          </div>
        </div>
      </aside>
      <section style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "var(--background)"
      }}>
        <header style={{
          background: "var(--surface)",
          boxShadow: "0 1px 10px 0 rgba(0,0,0,0.03)",
          padding: "0.9rem 2.4rem 0.9rem 1.5rem",
          display: "flex",
          alignItems: "center"
        }}>
          <span style={{
            color: "var(--primary)",
            fontWeight: 800,
            fontSize: "1.33rem",
            letterSpacing: "-0.025em"
          }}>Portfolio Hub</span>
          <div style={{flex:1}}></div>
          <div style={{display:"flex",gap:"1.4em",alignItems:"center"}}>
            <Link href="/public/sampleuser" class="btn" style={{
              background: "var(--secondary)",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "var(--radius-sm)",
            }}>View Public</Link>
          </div>
        </header>
        <main style={{
          flex: 1,
          padding: "2.2rem min(5vw,2.5rem)"
        }}>
          {/* Main content slot */}
          {props.children}
        </main>
      </section>
      <style>{`
      @media (max-width: 780px) {
        .sidebar { width: 56px !important; min-width: 56px !important; }
        .sidebar-link { font-size: 1.06em; }
        .sidebar .badge { font-size: 0.66em; }
        main { padding: 1.25rem 0.3rem !important;}
      }
      `}</style>
    </div>
  );
});
