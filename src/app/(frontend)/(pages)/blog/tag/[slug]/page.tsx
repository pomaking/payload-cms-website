import React from 'react'
import { Metadata } from 'next'
import { mergeOpenGraph } from '@root/seo/mergeOpenGraph.js'
import { fetchBlogPostsByTag } from '@data'
import { RenderBlogPostsByTag } from './renderBlogPostsByTag.js'
import { unstable_cache } from 'next/cache'
import { draftMode } from 'next/headers.js'
const getBlogPosts = (slug, draft?) =>
  draft ? fetchBlogPostsByTag(slug) : unstable_cache(fetchBlogPostsByTag, ['blogPosts', `post-${slug}`])(slug)
const Page = async ({
  params,
}: {
  params: Promise<{
    slug: any
  }>
}) => {
  const { isEnabled: draft } = await draftMode()
  const { slug } = await params
  
  const blogPosts = await getBlogPosts(slug, draft)
  
  const url = `/blog/tag/${slug}`
  
  return <RenderBlogPostsByTag posts={blogPosts} />
}
export default Page
export const metadata: Metadata = {
  openGraph: mergeOpenGraph({
    url: '/blog/tag/${slug}',
  }),
}
