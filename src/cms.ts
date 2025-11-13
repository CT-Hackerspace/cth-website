import {createDirectus, readItems, rest } from '@directus/sdk'

const directusURL = import.meta.env.PUBLIC_DIRECTUS_URL || "http://localhost:8055";
//https://docs.astro.build/en/guides/environment-variables/
export const directus = createDirectus(directusURL).with(rest());

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