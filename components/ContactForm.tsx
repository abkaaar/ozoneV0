import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6 py-3 md:p-6">
              <div className="grid gap-2">
                <Input
                  id="fname"
                  type="text"
                  placeholder="First Name (Required)"
                  className="rounded-none  py-6 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="lname"
                  type="text"
                  placeholder="Last Name (Required)"
                  className="rounded-none  py-6 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="text"
                  placeholder="Email Address (Optional)"
                  className="rounded-none  py-6 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number (Required)"
                  className="rounded-none  py-6 text-sm"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="name"
                  type="text"
                  placeholder="Message (Required)"
                  className="rounded-none  py-6 text-sm"
                  required
                />
              </div>
            
              <Button type="submit" className="rounded-none py-6">
                Submit
              </Button>
            
            </div>
           
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
