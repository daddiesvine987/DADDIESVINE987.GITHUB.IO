import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Premium</span>Deals
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#featured" className="text-sm font-medium hover:text-primary">
              Featured Deals
            </Link>
            <Link href="#categories" className="text-sm font-medium hover:text-primary">
              Categories
            </Link>
            <Link href="#trending" className="text-sm font-medium hover:text-primary">
              Trending
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-primary">
              Reviews
            </Link>
          </nav>
          <div>
            <Button>
              Exclusive Offers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Exclusive Deals & Save Big Today
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Unlock premium offers, discounts, and deals from top brands. Limited-time offers you won't find
                    anywhere else.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Browse Top Deals
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Join Premium Membership
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Verified Offers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Exclusive Discounts</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=350&width=500"
                    alt="Featured deals"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 right-6 bg-background rounded-lg shadow-lg p-4 border">
                  <div className="text-sm font-medium">Limited Time Offer</div>
                  <div className="text-2xl font-bold text-primary">50% OFF</div>
                  <div className="text-xs text-muted-foreground">Premium Electronics</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner Section */}
        <div className="container px-4 md:px-6 py-6">
          <div className="w-full h-24 bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50">
            <p className="text-muted-foreground">Premium Ad Space - Your Banner Ad Here</p>
          </div>
        </div>

        <section id="featured" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Featured Deals
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Today's Hottest Offers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Handpicked deals from our partners with exclusive discounts for our visitors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Product ${i}`}
                      alt={`Product ${i}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded">
                      {i === 1 ? "BEST SELLER" : i === 2 ? "HOT DEAL" : "NEW"}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Product {i}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1">
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className={`h-4 w-4 ${j < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
                            />
                          ))}
                        <span className="text-xs text-muted-foreground ml-1">4.0 (120 reviews)</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold">$49.99</span>
                      <span className="text-sm line-through text-muted-foreground">$99.99</span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">50% OFF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Limited time offer on this premium product. Exclusive deal for our visitors.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Get This Deal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Banner Section */}
        <div className="container px-4 md:px-6 py-6">
          <div className="w-full h-24 bg-muted rounded-lg flex items-center justify-center border border-dashed border-muted-foreground/50">
            <p className="text-muted-foreground">Premium Ad Space - Your Banner Ad Here</p>
          </div>
        </div>

        <section id="categories" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse By Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find the best deals in your favorite categories.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {["Electronics", "Fashion", "Home", "Beauty", "Travel", "Food"].map((category) => (
                <Link
                  href="#"
                  key={category}
                  className="flex flex-col items-center justify-center p-4 bg-background rounded-xl border hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary text-xl font-bold">{category.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{category}</span>
                  <span className="text-xs text-muted-foreground">100+ deals</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="trending" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Trending Now
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Most Popular This Week</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  See what other shoppers are loving right now.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Trending Deal #{i}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold">$29.99</span>
                      <span className="text-sm line-through text-muted-foreground">$59.99</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Limited time offer. Exclusive for our visitors.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Deal
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Thousands of satisfied customers have saved with our exclusive deals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-background">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">U{i}</span>
                      </div>
                      <div>
                        <CardTitle className="text-base">User Name {i}</CardTitle>
                        <CardDescription>Verified Customer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {Array(5)
                        .fill(0)
                        .map((_, j) => (
                          <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "I saved over $200 on my purchase using the exclusive coupon from this site. The deals are always
                      up-to-date and actually work. Highly recommended!"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Newsletter</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Get exclusive deals and offers sent directly to your inbox.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Us?</h2>
                  <p className="max-w-[600px] text-muted-foreground">
                    We partner with hundreds of retailers to bring you the best deals.
                  </p>
                </div>
                <ul className="grid gap-2">
                  {[
                    "Exclusive deals not available elsewhere",
                    "Verified and tested coupon codes",
                    "New offers added daily",
                    "Free to use, no registration required",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">Premium</span>Deals
            </div>
            <p className="text-sm text-muted-foreground">
              Your source for the best deals, discounts, and offers online.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Social</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6 mt-6 pt-6 border-t">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} PremiumDeals. All rights reserved. This site contains affiliate links.
          </p>
        </div>
      </footer>
    </div>
  )
}

