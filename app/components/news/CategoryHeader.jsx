export default function CategoryHeader({ title, tagline }) {
  return (
    <header className="category-header">
      <h1>{title}</h1>
      {tagline ? <p>{tagline}</p> : null}
    </header>
  );
}
