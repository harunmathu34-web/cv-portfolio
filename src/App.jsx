export default function App() {
  return (
    <div style={{ fontFamily: "Arial", maxWidth: "900px", margin: "auto", padding: "40px", lineHeight: "1.6" }}>
      
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Harun Wambugu Mathu
        </h1>
        <h3 style={{ color: "gray", fontWeight: "normal" }}>
          AI Specialist | Web Developer | Creative Technologist
        </h3>
        <p>Nairobi, Kenya</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <h2>About Me</h2>
        <p>
          I am a developer focused on building modern web applications, AI tools,
          and immersive digital experiences using React and Three.js.
        </p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>
        <ul>
          <li>React / Vite</li>
          <li>JavaScript</li>
          <li>Three.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Projects</h2>
        <ul>
          <li>Veleminour 3D Web Experience</li>
          <li>CV Portfolio Website (This project)</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Contact</h2>
        <p>Email: harunwambugu.mathu@gmail.com</p>
      </section>

    </div>
  );
}