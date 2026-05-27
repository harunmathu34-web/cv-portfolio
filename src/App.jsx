export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <header style={{ textAlign: "center" }}>
        <h1>Your Name</h1>
        <h3>AI Specialist | Web Developer | Designer</h3>
        <p>Nairobi, Kenya</p>
      </header>

      <hr />

      <section>
        <h2>About Me</h2>
        <p>
          I am a motivated developer focused on building modern web experiences and AI-driven solutions.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React / Vite</li>
          <li>Three.js (3D Web)</li>
          <li>JavaScript</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section>
        <h2>CV</h2>
        <a
          href="PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE"
          target="_blank"
        >
          📄 Download My CV
        </a>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
      </section>

    </div>
  );
}