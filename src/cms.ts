import {createDirectus, readItems, rest } from '@directus/sdk'

export const directus = createDirectus('http://localhost:8055').with(rest());

export async function getCMSPosts(){
    const cmsPosts=  await directus.request(readItems('Posts', {
        filter: {
            status: {
                _eq: 'published',
            },
        },
    }));
    return cmsPosts.map(p => {
        return {
        data: {
            title: p.Title,
            description: p.Description,
            author: p.Author,
            categories: p.tags,
            slug: p.slug,
            date: new Date(p.date_created),
            preRendered: true,
        },
        body: p.Content,
        }
  })
}