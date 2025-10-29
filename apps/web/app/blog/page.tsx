import { Metadata } from 'next'
import { getPublishedPosts } from '@/lib/reader'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts and insights',
}

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Stay updated with our latest thoughts and insights
          </p>
        </div>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post: any) => (
              <article key={post.slug} className="flex flex-col">
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="flex-1">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <time dateTime={post.entry.publishedAt}>
                          {post.entry.publishedAt && new Date(post.entry.publishedAt).toLocaleDateString()}
                        </time>
                        <span className="mx-2">•</span>
                        <span>{post.entry.author || 'Anonymous'}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block">
                        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                          {post.entry.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.entry.description}
                        </p>
                      </Link>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.entry.tags?.slice(0, 3).map((tag: any, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
