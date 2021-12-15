import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/team">
          <a>Team</a>
        </Link>
      </nav>
      <main>
        <h1>Contact</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <footer>
        <p>all rights reserved</p>
        <div>
          Contact: GitHub:{" "}
          <a href="https://github.com/mateuszdobija97" target="_blank">
            mateuszdobija97
          </a>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mateusz-dobija-9278a71a9/"
            target="_blank"
          >
            Mateusz Dobija
          </a>
        </div>
      </footer>
    </div>
  );
}
