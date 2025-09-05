import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Button } from "@/components/ui/button"

const links = [
  {
    group: "Featired",
    items: [
      {
        title: "Air Force 1",
        href: "/",
      },
      {
        title: "Huarache",
        href: "/",
      },
      {
        title: "Air Max 90",
        href: "/",
      },
      {
        title: "Air Max 95",
        href: "/",
      },
    ],
  },
  {
    group: "Shoes",
    items: [
      {
        title: "All Shoes",
        href: "/",
      },
      {
        title: "Custom Shoes",
        href: "/",
      },
      {
        title: "Jordan Shoes",
        href: "/",
      },
      {
        title: "Running Shoes",
        href: "/",
      },
    ],
  },
  {
    group: "Clothing",
    items: [
      {
        title: "All Clothing",
        href: "/",
      },
      {
        title: "Modest Wear",
        href: "/",
      },
      {
        title: "Hoodies & Pullovers",
        href: "/",
      },
      {
        title: "Shirts & Tops",
        href: "/",
      },
    ],
  },
  {
    group: "Kids'",
    items: [
      {
        title: "Infant & Toddler Shoes",
        href: "/",
      },
      {
        title: "Kids' Shoes",
        href: "/",
      },
      {
        title: "Kids' Jordan Shoes",
        href: "/",
      },
      {
        title: "Kids' Basketball Shoes",
        href: "/",
      },
    ],
  },
]

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  return (
    <div className="relative z-10 flex min-h-svh flex-col ">
      <ContainerWrapper className="h-20 flex items-center">
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
        <div className="flex flex-col gap-10">
          <ContainerWrapper className="bg-[url(/hero-bg.png)] bg-no-repeat  bg-cover max-h-[715px] h-full">
            <Container>
              <section className="theme-container flex items-center justify-between">
                <div className="flex flex-col gap-6 basis-1/2">
                  <div className="max-w-lg w-full flex flex-col gap-4">
                    <div className="text-xl font-medium bg-linear-to-b from-[#E2418D] to-[#FB7C76] text-transparent bg-clip-text">
                      Bold & Sporty
                    </div>
                    <div className="text-6xl font-semibold">Style That Moves With You.</div>
                  </div>

                  <div className="w-full max-w-2xl text-2xl">
                    Not just style. Not just comfort. Footwear that effortlessly moves with your every step.
                  </div>

                  <Button size="lg" className="rounded-full w-fit text-2xl h-14">
                    Find Your Shoe
                  </Button>
                </div>

                <picture className="basis-1/2  py-20">
                  <img src="/hero-shoe.png" alt="" width={721} height={424} className="mx-auto" />
                </picture>
              </section>
            </Container>
          </ContainerWrapper>

          <ContainerWrapper>
            <Container>
              <section className="flex flex-col gap-9 theme-container">
                <div className="text-2xl font-medium">Best of Air Max</div>

                <div className="flex items-center gap-6">
                  <div className="basis-1/3 flex flex-col gap-3 relative">
                    <picture>
                      <img
                        src="/shoes/shoe-1.jpg"
                        alt="Shoe 1"
                        width={432}
                        height={432}
                        className="h-full w-full max-h-[432px] max-w-[432px]"
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

                  <div className="basis-1/3 flex flex-col gap-3 relative">
                    <picture>
                      <img
                        src="/shoes/shoe-2.webp"
                        alt="Shoe 2"
                        width={432}
                        height={432}
                        className="h-full w-full max-h-[432px] max-w-[432px]"
                      />
                    </picture>

                    <div className="flex flex-col gap-px">
                      <div className="flex items-center justify-between">
                        <div>Nike Court Vision Low Next Nature</div>
                        <div>$98.30</div>
                      </div>

                      <div className="text-muted-foreground">
                        <div>Men's Shoes</div>
                        <div>4 Colour</div>
                      </div>
                    </div>

                    <div className="absolute top-2 left-2 text-[#007D48] font-medium px-3.5 py-1 bg-background rounded-full">
                      Extra 20% off
                    </div>
                  </div>

                  <div className="basis-1/3 flex flex-col gap-3 relative">
                    <picture>
                      <img
                        src="/shoes/shoe-3.webp"
                        alt="Shoe 3"
                        width={432}
                        height={432}
                        className="h-full w-full max-h-[432px] max-w-[432px]"
                      />
                    </picture>

                    <div className="flex flex-col gap-px">
                      <div className="flex items-center justify-between">
                        <div>Nike Dunk Low Retro</div>
                        <div>$98.30</div>
                      </div>

                      <div className="text-muted-foreground">
                        <div>Men's Shoes</div>
                        <div>6 Colour</div>
                      </div>

                      <div className="absolute top-2 left-2 text-[#007D48] font-medium px-3.5 py-1 bg-background rounded-full">
                        Extra 10% off
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Container>
          </ContainerWrapper>

          <ContainerWrapper>
            <Container>
              <section className="flex flex-col gap-9 theme-container">
                <div className="text-2xl font-medium">Trending Now</div>

                <div className="grid  grid-cols-2 gap-6">
                  <div className="col-span-2 relative text-primary-foreground h-[490px]">
                    <picture className="absolute inset-0 pointer-events-none">
                      <img src="/trending-1.png" alt="" height={490} className="size-full" />
                    </picture>

                    <div className="absolute inset-0 size-full bg-linear-to-r from-black via-transparent to-transparent pointer-events-none opacity-70"></div>

                    <div className="px-10 py-12 flex flex-col gap-6 ">
                      <div className="flex flex-col gap-4 z-10">
                        <div className="font-bold text-6xl">React Presto</div>
                        <div className="text-2xl ">With React foam for the most comfortable Presto ever.</div>
                      </div>

                      <Button size="lg" variant="secondary" className="rounded-full z-10 w-fit">
                        Shop Now
                      </Button>
                    </div>
                  </div>

                  <div className=" bg-[url(/trending-2.png)] bg-cover bg-no-repeat bg-center min-h-[390px] px-8 py-9 text-primary-foreground text-2xl font-medium">
                    <div>Summer Must-Haves: Air Max Dia</div>
                  </div>

                  <div className=" bg-[url(/trending-3.png)] bg-cover bg-no-repeat bg-center min-h-[390px] px-8 py-9 text-primary-foreground text-2xl font-medium justify-end items-end ">
                    <div className="mt-auto">Air Jorden 11 Retro Low LE</div>
                  </div>
                </div>
              </section>
            </Container>
          </ContainerWrapper>

          <ContainerWrapper>
            <Container>
              <section className="theme-container flex items-center justify-between">
                <div className="flex flex-col gap-6 basis-1/2">
                  <div className="max-w-md w-full flex flex-col gap-4">
                    <div className="text-xl font-medium bg-linear-to-b from-[#E2418D] to-[#FB7C76] text-transparent bg-clip-text">
                      Bold & Sporty
                    </div>
                    <div className="text-6xl font-semibold">Nike React Presto by you</div>
                  </div>

                  <div className="w-full max-w-2xl text-2xl text-muted-foreground">
                    Take advantage of brand new, proprietary cushioning technology with a fresh pair of Nike react
                    shoes.
                  </div>

                  <Button size="lg" className="rounded-full w-fit text-2xl h-14">
                    Shop Now
                  </Button>
                </div>

                <picture className="basis-1/2">
                  <img src="/feature.png" alt="" width={721} height={424} className="mx-auto" />
                </picture>
              </section>
            </Container>
          </ContainerWrapper>
        </div>
      </main>

      <ContainerWrapper className="border-b bg-secondary-foreground pt-20">
        <Container>
          <footer>
            <div className="grid gap-12 md:grid-cols-6">
              <div className="md:col-span-2">
                <Link to="/" aria-label="go home" className="block size-fit">
                  <img src="/logo.svg" alt="Nike Logo" width={80} height={29} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-5 md:col-span-4">
                {links.map((link, index) => (
                  <div key={index} className="space-y-4 text-sm">
                    <span className="block font-medium text-primary-foreground">{link.group}</span>
                    {link.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="text-muted-foreground hover:text-primary-foreground block duration-150"
                      >
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                ))}

                <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X/Twitter"
                    className="text-muted-foreground hover:text-primary inline-flex bg-background size-8 rounded-full [&_svg]:size-5 items-center justify-center"
                  >
                    <svg
                      className="size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                      ></path>
                    </svg>
                  </Link>

                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-muted-foreground hover:text-primary inline-flex bg-background size-8 rounded-full [&_svg]:size-5 items-center justify-center"
                  >
                    <svg
                      className="size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                      ></path>
                    </svg>
                  </Link>

                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-muted-foreground hover:text-primary inline-flex bg-background size-8 rounded-full [&_svg]:size-5 items-center justify-center"
                  >
                    <svg
                      className="size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
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
