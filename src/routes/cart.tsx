import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon, MinusCircleIcon, Trash2Icon } from "lucide-react"

export const Route = createFileRoute("/cart")({
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
        <div className="flex flex-col py-10">
          <ContainerWrapper>
            <Container>
              <section className="flex flex-col gap-6 theme-container">
                <div className="text-2xl font-medium">Cart</div>

                <div className="grid grid-cols-3 gap-24">
                  <div className="col-span-2 flex flex-col gap-7">
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
                              <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted">
                                <div className="text-muted-foreground">Quantity</div>

                                <Button size="icon" variant="ghost" className="rounded-full">
                                  <MinusCircleIcon />
                                </Button>

                                <div>2</div>

                                <Button size="icon" variant="ghost" className="rounded-full">
                                  <PlusCircleIcon />
                                </Button>
                              </div>

                              <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full text-destructive hover:text-destructive-foreground"
                              >
                                <Trash2Icon />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-8">
                    <div className="text-2xl font-medium">Summary</div>

                    <div className="flex flex-col gap-7 border-b pb-5 text-xl">
                      <div className="flex flex-col gap-5 border-b pb-5">
                        <div className="flex items-center justify-between">
                          <div>Subtotal</div>
                          <div className="font-medium">$58.53</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>Estimated Delivery & Handling</div>
                          <div className="font-medium">$2.00</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between font-medium">
                        <div>Total</div>
                        <div>$60.53</div>
                      </div>
                    </div>

                    <Button size="lg" className="h-14 rounded-full text-xl font-medium">
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
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
