
export default function FormattedDate({ date }) {
    return (
        <time dateTime={date.toISOString()}>
            {
                date.toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })
            }
        </time>
     )
}