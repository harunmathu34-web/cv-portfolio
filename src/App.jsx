export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        maxWidth: "900px",
        margin: "auto",
        padding: "40px",
        lineHeight: "1.6",
      }}
    >
      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Harun Wambugu Mathu
        </h1>

        <h3 style={{ color: "gray", fontWeight: "normal" }}>
          AI Specialist | Web Developer | Creative Technologist
        </h3>

        <p>Nairobi, Kenya</p>
      </header>

      {/* ABOUT */}
      <section style={{ marginBottom: "30px" }}>
        <h2>About Me</h2>

        <p>
          I am an ambitious and driven developer who enjoys building modern
          digital experiences that feel clean, interactive, and meaningful.
          I’m passionate about web development, creative technology, and
          continuously learning new skills that push my abilities further.
          I enjoy turning ideas into real projects and challenging myself
          to create work that stands out.
        </p>
      </section>

      {/* SKILLS */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>

        <ul>
          <li>React / Vite</li>
          <li>JavaScript</li>
          <li>Three.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Projects</h2>

        <ul>
          <li>
            <strong>Veleminour 3D Web Experience</strong> — Cinematic luxury
            website built using React, Vite, and Three.js.
          </li>
        </ul>
      </section>

      {/* CV DOWNLOAD */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Curriculum Vitae</h2>

        <a
          href="https://docs.google.com/document/d/1MYrwgeFo6GWUoJ0HtEdMAEXSwXHxKFaa/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 20px",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          Download My CV
        </a>
      </section>

      {/* CONTACT */}
      <section style={{ marginBottom: "30px" }}>
        <h2>Contact</h2>

        <p>Email: harunmathu34@gmail.com</p>

        <p>Location: Nairobi, Kenya</p>
      </section>
    </div>
  );
}