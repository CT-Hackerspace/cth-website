TODO:

- Index.md to Index.astro?
-- Pull top 5 blog posts for it
```const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
);```
- Scale images to not be ludicrously huge.
- New events page
-- events.astro in the menu.
-- Placeholder content.