import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="w-full px-16 py-12 flex flex-col md:flex-row gap-4 justify-between">
      <div className="mb-10">
        <h2 className="text-5xl font-medium mb-4">Frequently Asked <br /> Questions</h2>
        <p className="text-xl text-muted-foreground">Got questions? We have got answers.</p>
      </div>
<div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">
            What is the minimum and maximum investment amount?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            The minimum investment amount is ₦1,000,000, and the maximum is ₦100,000,000.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">
            What is the ROI, and when will I receive it?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            Details about return on investment and payment schedule.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">
            What do you use my principle money for?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            Information about how the invested funds are utilized.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">Is my investment safe?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            Details about investment security and protection measures.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">
            Can I invest in specific projects?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            Information about project-specific investment options.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-t border-b-0 py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">
            How can I monitor my investment?
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">
            Details about investment monitoring and tracking tools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-t border-b py-4">
          <AccordionTrigger className="text-lg font-normal hover:no-underline">How do I get started?</AccordionTrigger>
          <AccordionContent className="text-sm text-gray-400">Steps to begin your investment journey with us.</AccordionContent>
        </AccordionItem>
      </Accordion>
</div>
  
    </section>
  )
}

