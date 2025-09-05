import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Trash2Icon } from "lucide-react"

export const Route = createFileRoute("/profile")({
  component: RouteComponent,
})

function RouteComponent() {
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
        <div className="flex flex-col flex-1 py-10">
          <ContainerWrapper>
            <Container>
              <section className="theme-container flex flex-col gap-14">
                <div className="flex items-center gap-6">
                  <Avatar className="size-28">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-2.5">
                    <div className="text-2xl font-medium">Ronald O. Williams</div>
                    <div>ronald@mail.com</div>
                  </div>
                </div>

                <Tabs defaultValue="tab-1">
                  <TabsList className="h-auto rounded-none border-b bg-transparent p-0 gap-10">
                    <TabsTrigger
                      value="tab-1"
                      className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xl font-medium"
                    >
                      My Orders
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-2"
                      className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xl font-medium"
                    >
                      Favorites
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-3"
                      className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xl font-medium"
                    >
                      My Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-4"
                      className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xl font-medium"
                    >
                      Payment Methods
                    </TabsTrigger>
                    <TabsTrigger
                      value="tab-5"
                      className="data-[state=active]:after:bg-primary relative rounded-none py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none text-xl font-medium"
                    >
                      Address Book
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab-1" className="grid grid-cols-3">
                    <div className="col-span-2 flex flex-col gap-7 py-12 pb-0">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-3 w-full">
                          <picture>
                            <img src="https://placehold.co/170x170.png" alt="" width={170} height={170} />
                          </picture>

                          <div className="flex flex-col gap-2.5 w-full">
                            <div className="text-[#D37918] font-medium">Estimated arrival 24 Sep 2025</div>

                            <div className="flex items-center justify-between flex-1 w-full">
                              <div className="font-medium text-xl">Nike Air Force 1 Mid '07</div>

                              <div>$98.30</div>
                            </div>

                            <div className="text-muted-foreground">Men's Shoes</div>
                            <div className="flex items-center gap-5">
                              <div className="flex items-center gap-1.5">
                                <div className="text-muted-foreground">Size</div>
                                <div>10</div>
                              </div>

                              <div className="flex items-center justify-between flex-1 w-full">
                                <div className="flex items-center gap-1.5">
                                  <div className="text-muted-foreground">Quantity</div>

                                  <div>2</div>
                                </div>

                                <Button
                                  size="lg"
                                  variant="ghost"
                                  className="rounded-full text-destructive hover:text-destructive-foreground hover:bg-destructive/10"
                                >
                                  <Trash2Icon />
                                  <span>Cancel Order</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="tab-2">
                    <div className="grid grid-cols-3 gap-6 py-12 pb-0">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="basis-1/3 flex flex-col gap-3 relative">
                          <picture>
                            <img
                              src="https://placehold.co/412x412.png"
                              alt="Shoe 1"
                              width={412}
                              height={412}
                              className="size-full"
                            />
                          </picture>

                          <div className="flex flex-col gap-px">
                            <div className="flex items-center justify-between font-medium">
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
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="tab-3">
                    <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
                  </TabsContent>
                  <TabsContent value="tab-4">
                    <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
                  </TabsContent>
                  <TabsContent value="tab-5">
                    <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
                  </TabsContent>
                </Tabs>
              </section>
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
