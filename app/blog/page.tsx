"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getPublishedPosts, getCategories } from "@/lib/actions/blog"
import type { BlogPost, Category } from "@/lib/types"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { defaultBlogPost, secondBlogPost } from "@/lib/seed-blog"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bathroom Remodel Blog | Chandler AZ Tips",
  description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
  keywords: ["bathroom remodel blog", "bathroom design tips", "chandler bathroom ideas", "remodel inspiration", "bathroom trends"],
  authors: [{ name: "Airforshare.online" }],
  publisher: "Airforshare.online",
  openGraph: {
    title: "Bathroom Remodel Blog | Chandler AZ Tips",
    description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/blog`,
    type: "website",
    locale: "en_US",
    siteName: "Airforshare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Blog | Chandler AZ Tips",
    description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const [postsData, categoriesData] = await Promise.all([
        getPublishedPosts(),
        getCategories()
      ])
      // If no posts from database, use default blog posts
      if (postsData.length === 0) {
        const defaultPosts: BlogPost[] = [
          {
            ...defaultBlogPost,
            id: "default-post-1",
            readTime: 12,
            keywords: ["bathroom remodeling chandler arizona", "bathroom renovation chandler az", "bathroom contractor chandler", "shower remodel chandler arizona", "bathroom design arizona"],
          },
          {
            ...secondBlogPost,
            id: "default-post-2",
            readTime: 8,
            keywords: ["bathroom design trends 2024", "chandler arizona bathroom", "modern bathroom design", "smart bathroom technology", "sustainable bathroom materials"],
          }
        ]
        setPosts(defaultPosts)
      } else {
        setPosts(postsData)
      }
      setCategories(categoriesData)
      setLoading(false)
    }
    fetchData()
  }, [])

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
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Expert Insights
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Remodeling Tips & Inspiration
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Discover expert advice, design inspiration, and practical tips for your 
                bathroom remodeling projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory("all")}
                >
                  All Posts
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.slug)}
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
            {/* Expert Insights Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-semibold text-foreground text-center mb-8">
                Expert Bathroom Design Tips
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Our blog features comprehensive guides written by experienced bathroom remodeling professionals. 
                Learn about the latest design trends, cost-saving strategies, material selection tips, and innovative 
                solutions for small spaces. Whether you're planning a complete renovation or minor updates, our expert 
                insights will help you make informed decisions for your dream bathroom.
              </p>
            </div>

            {/* Design Trends Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-semibold text-foreground text-center mb-8">
                Latest Bathroom Trends & Materials
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Stay updated with the newest bathroom design trends and innovative materials. From smart technology 
                integration to sustainable fixtures, we cover everything that's shaping modern bathroom design. 
                Discover popular color schemes, tile patterns, lighting solutions, and storage innovations that can 
                transform your space into a functional and stylish retreat.
              </p>
            </div>

            {/* Cost & Planning Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-semibold text-foreground text-center mb-8">
                Budget Planning & Cost Guides
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                Make smart financial decisions with our detailed cost breakdowns and budget planning guides. 
                Learn how to prioritize expenses, find affordable alternatives without compromising quality, and 
                understand the factors that influence bathroom remodeling costs in Chandler, AZ. Our articles provide 
                realistic estimates and money-saving tips from industry professionals.
              </p>
            </div>

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
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                  >
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
                              {new Date(featuredPost.publishedAt || featuredPost.createdAt).toLocaleDateString('en-US', {
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
                  </motion.div>
                )}

                {/* Remaining Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
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
                            {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
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
                    </motion.article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
