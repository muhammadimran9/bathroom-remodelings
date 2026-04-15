"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { defaultBlogPost, secondBlogPost } from "@/lib/seed-blog"

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const defaultPosts = [
      {
        ...defaultBlogPost,
        id: "default-post-1",
        slug: "bathroom-remodeling-tips",
        readTime: 12,
      },
      {
        ...secondBlogPost,
        id: "default-post-2",
        slug: "bathroom-design-trends",
        readTime: 8,
      }
    ]
    setPosts(defaultPosts)
    setLoading(false)
  }, [])

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tips", name: "Tips" },
    { id: "trends", name: "Trends" },
    { id: "ideas", name: "Ideas" },
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Expert Insights
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
              Remodeling Tips & Inspiration
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Discover expert advice, design inspiration, and practical tips for your bathroom remodeling projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Info Sections */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-semibold text-foreground text-center mb-8">
              Expert Bathroom Design Tips
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Our blog features comprehensive guides written by experienced bathroom remodeling professionals. Learn about the latest design trends, cost-saving strategies, material selection tips, and innovative solutions for small spaces.
            </p>
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[16/10] bg-muted rounded-lg mb-4" />
                  <div className="h-4 bg-muted rounded w-1/4 mb-2" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <Link href={`/blog/${featuredPost.slug}`} className="group block">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                        <Image
                          src={featuredPost.featuredImage || "/images/blog-placeholder.jpg"}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                          {featuredPost.category}
                        </span>
                        <h2 className="mt-3 text-2xl md:text-3xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                          {featuredPost.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.createdAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {featuredPost.readTime} min read
                          </span>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Remaining Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post, index) => (
                  <article key={post.id}>
                    <Link href={`/blog/${post.slug}`} className="group block">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={post.featuredImage || "/images/blog-placeholder.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="mt-2 text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
