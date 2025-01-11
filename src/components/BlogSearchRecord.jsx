import FormattedDate from "./FormattedDate.jsx";

export default function BlogSearchRecord(props) {
  const { slug, date, author, title, categories, description } = props;

  return (
    <article key={title} className="blog-blurb">
      <h2>
        <a href={`/blog/${slug}/`}>{title}</a>
      </h2>
      {date && author ? (
        <div className="extra">
          Posted by {author} on <FormattedDate date={date} />
        </div>
      ) : date ? (
        <div className="extra">
          Posted on <FormattedDate date={date} />
        </div>
      ) : (
        (author ?? <div className="extra">Posted by {author}</div>)
      )}
      <div className="blog-description">{description}</div>
      {categories?.length && (
        <div className="extra">
          Tags:{' '}
          {categories
            .reduce(
              (elements, item) => [
                // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
                ...elements,
                [<strong key={item}>{item}</strong>, ", "],
              ],
              [],
            )
            .flat()
            .slice(0, -1)}
        </div>
      )}
    </article>
  );
}
