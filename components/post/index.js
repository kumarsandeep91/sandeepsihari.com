import { format, parseISO } from "date-fns";

export const Title = ({ value }) => {
  return <h1 className="post-title">{value}</h1>;
};

export const Excerpt = ({ value }) => {
    return <p className="post-excerpt">{value}</p>
}

export const DateFormatter = ({ dateStr }) => {
    const date = parseISO(dateStr);
    return <time dateTime={dateStr}>{format(date, "do MMMM yyyy")}</time>
}

export const PostedBy = ({ date, author }) => {
    return (
      <div className="post-created-by">
        <span>Posted</span>
        <DateFormatter dateStr={date} />
        <span>by</span>
        <span>{author}</span>
      </div>
    );
}