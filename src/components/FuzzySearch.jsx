
import Fuse from 'fuse.js';
import { useState } from 'react';

function FormattedDate({ date }) {
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


export default function({ data, props }) {
    const [query, setQuery] = useState("");

    const options = {
        keys: props,
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
    }

    const posts = query === ""
      ? data
      : new Fuse(data, options).search(query)
      .map((result) => result.item)
      .slice(0, 5)

    console.log(posts)
    
    return (<>
        <input id="search" type="search" onChange={e => setQuery(e.target.value)}/>
        {posts.map((post) => (
            <section className="blog-blurb">
                <h2><a href={`/blog/${post.id}/`}>{post.data.title}</a></h2>
                {
                    post.data.date && post.data.author ? 
                        <div className="extra">
                            Posted by {post.data.author} on <FormattedDate date={post.data.date} />
                        </div> :
                    post.data.date ?
                        <div className="extra">
                            Posted on <FormattedDate date={post.data.date} />
                        </div> :
                    post.data.author ??
                        <div className="extra">
                            Posted by {post.data.author}
                        </div>
                }
                <div className="blog-description">{post.data.description}</div>
                {
                    post.data.categories.length &&
                    <div className="extra">
                        Tags:&#20;
                        {
                            post.data.categories
                            .reduce((elements, item) => [...elements, [<strong>{item}</strong>, ", "]],[])
                            .flat()
                            .slice(0, -1)
                        }
                    </div>
                }
            </section>
        ))}
    </>
    )
    
}