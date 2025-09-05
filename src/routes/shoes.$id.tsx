import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { HeartIcon, ChevronDownIcon, StarIcon } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { type CarouselApi } from "@/components/ui/carousel"
import * as React from "react"

export const Route = createFileRoute("/shoes/$id")({
  component: RouteComponent,
})

function RouteComponent() {
  const isMobile = useIsMobile()

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <ContainerWrapper className="h-20 flex items-center bg-background sticky top-0 z-50 w-full">
        <Container>
          <header className="flex items-center justify-between">
            <Link to="/" className="inline-flex shrink-0 items-center gap-1.5">
              <img src="/logo.svg" alt="Nike Logo" width={32} height={12} className="bg-background" />
              <span className="text-3xl font-semibold sr-only">Nike</span>
            </Link>

            <nav className="hidden sm:block">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to="/" activeProps={{ className: "font-semibold" }} className=" transition-colors duration-200">
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" transition-colors duration-200">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" transition-colors duration-200">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" transition-colors duration-200">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" transition-colors duration-200">
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-6">
              <div>Search</div>
              <div>My Cart</div>
            </div>
          </header>
        </Container>
      </ContainerWrapper>

      <main className="flex flex-1 flex-col">
        <div className="flex flex-col py-10">
          <ContainerWrapper>
            <Container className="flex flex-col gap-12 sm:gap-14">
              <div className="flex flex-col gap-5 sm:gap-12 sm:flex-row">
                <div className="flex flex-col gap-3.5 sm:hidden">
                  <div className="flex flex-col gap-2">
                    <div className="text-xl font-medium">Nike Air Max 90 SE</div>
                    <div className="text-muted-foreground">Women's Shoes</div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="text-2xl font-medium">$140</div>
                    <div className="font-medium text-[#007D48]">Extra 20% off w/ code SPORT</div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <img key={index} src="https://placehold.co/70x70" alt="" width={70} height={70} />
                    ))}
                  </div>
                </div>

                <div className="sm:order-first flex flex-col sm:flex-row gap-5 sm:gap-7 sm:basis-1/2">
                  <Carousel setApi={setApi} className="relative isolate h-fit">
                    <CarouselContent>
                      {Array.from({ length: 8 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <picture>
                            <source
                              media="(min-width: 440px)"
                              srcSet="https://placehold.co/566x665.png"
                              width={566}
                              height={665}
                            />
                            <img src="https://placehold.co/408x479.png" alt="" width={408} height={479} />
                          </picture>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <div className="absolute bottom-4 right-4 sm:flex items-center gap-2.5 hidden">
                      <CarouselPrevious className="relative inset-0 translate-y-0" />
                      <CarouselNext className="relative inset-0 translate-y-0" />
                    </div>
                  </Carousel>

                  <ScrollArea className="max-sm:w-full sm:h-[480px] whitespace-nowrap sm:order-first">
                    <div className="flex w-max gap-4 sm:flex-col h-max">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://placehold.co/60x60.png"
                          alt=""
                          width={60}
                          height={60}
                          className={cn(current === index + 1 ? "border-2 border-primary rounded-sm" : "")}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation={isMobile ? "horizontal" : "vertical"} />
                  </ScrollArea>
                </div>

                <div className="sm:order-last sm:basis-1/2 flex flex-col gap-3.5 sm:gap-7">
                  <div className="hidden flex-col gap-3.5 sm:gap-7 sm:flex">
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col gap-2">
                        <div className="text-xl font-medium">Nike Air Max 90 SE</div>
                        <div className="text-muted-foreground">Women's Shoes</div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <div className="text-2xl font-medium">$140</div>
                        <div className="font-medium text-[#007D48]">Extra 20% off w/ code SPORT</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <img key={index} src="https://placehold.co/70x70" alt="" width={70} height={70} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">Select Size</div>

                      <div className="flex items-center gap-1">
                        <img src="/size-guide-icon.svg" alt="Size Guide Icon" width={24} height={24} />
                        <div>Size Guide</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 sm:grid-cols-6 gap-1.5">
                      {[
                        {
                          id: "SIZE-00001",
                          title: "5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00002",
                          title: "5.5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00003",
                          title: "6",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00004",
                          title: "6.5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00005",
                          title: "7",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00006",
                          title: "7.5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00007",
                          title: "8",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00008",
                          title: "8.5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00009",
                          title: "9",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-000010",
                          title: "9.5",
                          isOutOfStock: false,
                        },
                        {
                          id: "SIZE-00011",
                          title: "10",
                          isOutOfStock: true,
                        },
                        {
                          id: "SIZE-000011",
                          title: "10.5",
                          isOutOfStock: true,
                        },
                        {
                          id: "SIZE-00011",
                          title: "11",
                          isOutOfStock: true,
                        },
                        {
                          id: "SIZE-000012",
                          title: "11.5",
                          isOutOfStock: true,
                        },
                        {
                          id: "SIZE-00013",
                          title: "12",
                          isOutOfStock: true,
                        },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className={cn("py-4 rounded-md border inline-flex items-center justify-center", {
                            "bg-muted border-input line-through text-muted-foreground": item.isOutOfStock,
                          })}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button size="lg" className="h-12 w-full rounded-full">
                      Add to Bag
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 w-full rounded-full">
                      <HeartIcon />
                      <span>Favorite</span>
                    </Button>
                  </div>

                  <div className="flex flex-col gap-3.5 sm:gap-7 *:not-last:border-b *:not-last:pb-7">
                    <div className="flex flex-col gap-6">
                      <div className="font-medium text-xl">Product Details</div>

                      <div className="flex flex-col gap-6">
                        <div>
                          The Air Max 90 stays true to its running roots with the iconic Waffle sole. Plus, stitched
                          overlays and textured accents create the '90s look you love. Complete with romantic hues, its
                          visible Air cushioning adds comfort to your journey.
                        </div>

                        <ul className="list-inside list-disc">
                          <li>Padded collar</li>
                          <li>Foam midsole</li>
                          <li>Shown: Dark Team Red/Platinum Tint/Pure Platinum/White</li>
                          <li>Style: HM9451-600</li>
                        </ul>
                      </div>
                    </div>

                    <Collapsible className="flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-medium text-xl">Shipping & Returns</div>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-8 rounded-full">
                            <ChevronDownIcon />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent></CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="font-medium text-xl">Reviews (10)</div>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon key={index} className="size-4 text-primary fill-current stroke-1" />
                          ))}

                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8 rounded-full">
                              <ChevronDownIcon />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                      </div>
                      <CollapsibleContent></CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 sm:gap-9">
                <div className="font-medium text-xl">You Might Also Like</div>

                <Carousel>
                  <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <CarouselItem className="sm:basis-1/3">
                        <div key={index} className="basis-1/3 flex flex-col gap-3 relative">
                          <picture>
                            <source
                              media="(min-width: 440px)"
                              srcSet="https://placehold.co/432x432.png"
                              width={566}
                              height={665}
                            />
                            <img src="https://placehold.co/408x408.png" alt="" width={408} height={408} />
                          </picture>

                          <div className="flex flex-col gap-px">
                            <div className="flex items-center justify-between">
                              <div>Nike Air Force 1 Mid '07</div>
                              <div>$98.30</div>
                            </div>

                            <div className="text-muted-foreground">
                              <div>Men's Shoes</div>
                              <div>6 Colour</div>
                            </div>
                          </div>

                          <div className="absolute top-2 left-2 text-[#D33918] font-medium px-3.5 py-1 bg-background rounded-full">
                            Best Seller
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </Container>
          </ContainerWrapper>
        </div>
      </main>

      <ContainerWrapper className="border-b bg-secondary-foreground">
        <Container>
          <footer>
            <div className="flex flex-wrap items-end justify-between gap-6 py-6">
              <span className="text-muted-foreground order-last block text-center max-sm:w-full text-xs sm:text-sm md:order-first">
                © {new Date().getFullYear()} Nike, Inc., All rights reserved
              </span>
              <div className="order-first flex flex-wrap justify-center gap-6 text-xs sm:text-sm md:order-last">
                <Link to="/" className="text-muted-foreground hover:text-primary-foreground block">
                  <span>Guides</span>
                </Link>
                <Link to="/" className="text-muted-foreground hover:text-primary-foreground block">
                  <span>Terms of Sale</span>
                </Link>
                <Link to="/" className="text-muted-foreground hover:text-primary-foreground block">
                  <span>Terms of Use</span>
                </Link>
                <Link to="/" className="text-muted-foreground hover:text-primary-foreground block">
                  <span>Nike Privacy Policy</span>
                </Link>
              </div>
            </div>
          </footer>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
