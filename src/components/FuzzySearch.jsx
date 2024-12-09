
import Fuse from 'fuse.js';
import { useState } from 'react';
import BlogSearchRecord from './BlogSearchRecord';

export default function FuzzySearch({ data, keys  }) {
    const [query, setQuery] = useState("");
    const options = {
        keys: keys,
        includeMatches: true,
        minMatchCharLength: 2,
        threshold: 0.5,
    }

    const records = query === ""
      ? data
      : new Fuse(data, options).search(query)
      .map((result) => result.item)
      .slice(0, 10)

    return (<>
        <input  id="search" type="search" onChange={e => setQuery(e.target.value)}/>
            {records.map((e, i) => <BlogSearchRecord key={i.toString()} {...e} />)}
    </>
    )
    
}
