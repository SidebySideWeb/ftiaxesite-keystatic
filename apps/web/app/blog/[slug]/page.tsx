import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPost, getAllPosts } from '@/lib/reader'
import Link from 'next/link'

interface PostProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.entry.title,
    description: post.entry.description,
    openGraph: {
      title: post.entry.title,
      description: post.entry.description,
      type: 'article',
      publishedTime: post.entry.publishedAt,
    },
  }
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </nav>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.entry.title}
            </h1>
            {post.entry.description && (
              <p className="text-xl text-gray-600 mb-6">
                {post.entry.description}
              </p>
            )}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <span className="text-xs font-medium text-gray-700">
                    {post.entry.author?.charAt(0) || 'A'}
                  </span>
                </div>
                <span className="font-medium text-gray-900">
                  {post.entry.author || 'Anonymous'}
                </span>
              </div>
              <span className="mx-2">•</span>
              <time dateTime={post.entry.publishedAt}>
                {post.entry.publishedAt && new Date(post.entry.publishedAt).toLocaleDateString()}
              </time>
            </div>
            {post.entry.tags && post.entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.entry.tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <p>Content will be rendered here. For now, this is a placeholder.</p>
            <p>You can edit this content in the Keystatic admin panel at <code>/keystatic</code></p>
          </div>
        </article>
      </div>
    </div>
  )
}
