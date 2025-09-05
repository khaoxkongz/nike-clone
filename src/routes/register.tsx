import { createFileRoute, Link } from "@tanstack/react-router"
import { RegisterForm } from "@/components/register-form"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/register")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>
      </div>

      <div className="bg-secondary-foreground relative hidden lg:flex lg:order-first p-12 flex-col justify-between">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-12 items-center justify-center rounded-md">
              <img src="/logo.svg" alt="Nike Logo Icon" width={24} height={24} />
            </div>
            <span className="sr-only">Nike Inc.</span>
          </Link>
        </div>

        <div className="flex flex-col gap-8 text-primary-foreground">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">Just Do It</div>

            <div className="w-full max-w-md">
              Join millions of athletes and fitness enthusiasts who trust Nike for their performance needs.
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className={cn("size-2 rounded-full bg-background/30", index === 0 ? "bg-background" : "")}
              ></div>
            ))}
          </div>
        </div>

        <div className="text-primary-foreground">© {new Date().getFullYear()} Nike, Inc., All rights reserved</div>
      </div>
    </div>
  )
}
