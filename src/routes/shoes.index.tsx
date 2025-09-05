import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { Settings2Icon, ChevronDownIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute("/shoes/")({
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

            <nav>
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
            <Container className="flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <div className="font-medium text-2xl">New (500)</div>

                <div className="flex items-center gap-1.5">
                  <Button variant="ghost">
                    <span>Hide Filters</span>
                    <Settings2Icon />
                  </Button>
                  <Button variant="ghost">
                    <span>Sort By</span>
                    <ChevronDownIcon />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-9 gap-16">
                <div className="col-span-2 flex flex-col gap-7 divide-y *:not-last:pb-7">
                  <ul className="flex flex-col gap-2.5">
                    <li>Low Top</li>
                    <li>High Top</li>
                    <li>Skateboarding</li>
                    <li>Nike By You</li>
                  </ul>

                  <Collapsible defaultOpen className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>Gender</div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                          <ChevronDownIcon />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Men</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Women</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Unisex</Label>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>Kids</div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                          <ChevronDownIcon />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Boys</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Girls</Label>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>Shop By Price</div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                          <ChevronDownIcon />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>$25 - $50</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>$50 - $100</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>$100 - $150</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Over $150</Label>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>Shoe Height</div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                          <ChevronDownIcon />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Men</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Women</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Unisex</Label>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible defaultOpen className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>Sports</div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8 rounded-full">
                          <ChevronDownIcon />
                          <span className="sr-only">Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Lifestyle</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Skateboarding</Label>
                        </li>
                        <li className="flex items-center gap-1.5">
                          <Checkbox />
                          <Label>Dance</Label>
                        </li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="col-span-7 grid grid-cols-3 gap-6">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="basis-1/3 flex flex-col gap-3 relative">
                      <picture>
                        <img
                          src="/shoes/shoe-1.jpg"
                          alt="Shoe 1"
                          width={348}
                          height={348}
                          className="h-full w-full max-h-[348px] max-w-[348px]"
                        />
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
                  ))}
                </div>
              </div>
            </Container>
          </ContainerWrapper>
        </div>
      </main>

      <ContainerWrapper className="border-b bg-secondary-foreground">
        <Container>
          <footer>
            <div className="flex flex-wrap items-end justify-between gap-6 py-6">
              <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
                © {new Date().getFullYear()} Nike, Inc., All rights reserved
              </span>
              <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
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
