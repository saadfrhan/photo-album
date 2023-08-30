import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { AlbumIcon, MinusIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Folder } from '@/types'

export default function AlbumAccordion(
  { folders }: { folders: Folder[] }
) {
  return (
    <Accordion type="single" collapsible className="w-full border-none mx-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div
            className='w-full justify-start flex gap-2 text-sm items-center'
          >
            <AlbumIcon /> Albums
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Button
            variant="ghost"
            asChild
            className='w-full justify-start flex gap-2'
          >
            <Link
              href="/albums"
            >
              <MinusIcon />	All
            </Link>
          </Button>
          {folders.map(({ path, name }, index) => (
            <Button
              key={index}
              variant="ghost"
              asChild
              className='w-full justify-start flex gap-2'
            >
              <Link
                href={`/albums/${path}`}
              >
                <MinusIcon />	{name}
              </Link>
            </Button>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
