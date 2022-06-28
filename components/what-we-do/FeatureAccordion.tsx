import { PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function FeatureAccordion() {
  const [currentExpanededId, setCurrentExpandedId] = useState('');

  const items = [
    {
      title: 'The Consumer',
      content: [
        'All it takes to be part of the textile waste solution is to gather your waste ranging from old rags to unused clothes and placing them into plastic bags.',
      ],
    },
    {
      title: 'Pick Up Point',
      content: [
        'Place the bag at your reception or at your doorstep and we will pick up your unwarted fabrics for you.',
      ],
    },
    {
      title: 'For The Better',
      content: [
        'FTB will then sort your items into two categories ( Damaged / Salvageable goods ). Damaged goods will go straight to the up-cycle facility in Bandung while the salvageable good will continue it’s textile life into the Charity Sale.',
      ],
    },
    {
      title: 'Charity Sale',
      content: [
        'Not only do we host the sale to help Non Profit organizations. We also placed a low cost on the goods so that everyone from different social status has an opportunity to dress up for the better',
      ],
    },
    {
      title: 'NPO Organization',
      content: [
        'We’ve partnered with the Life Project in Bantar Gebang to provide free education for children in the slums.',
        'We will be giving the children a portion of the salvageable goods as well as financial support from the sales we made.',
      ],
    },
    {
      title: 'Up-cycle Facility',
      content: ['The Damaged goods will be cleaned and processed into a new raw material.'],
    },
    {
      title: 'Manufacturer',
      content: [
        'The raw materials will then be used to create new products. Giving wasted textile a new purpose in serving the consumer.',
        'Waste produced by these manufacturers will then be collected by us then upcycled into raw material.',
        'And the cycle continues…',
      ],
    },
  ];

  return (
    <Accordion
      className='mt-9 border-t border-b border-black'
      onChange={(ids: string[]) => setCurrentExpandedId(ids[0])}>
      {items.map((item) => (
        <AccordionItem key={item.title}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className='flex justify-between'>
                <span className='block'>{item.title}</span>
                <span className='block'>
                  <PlusIcon className='w-5 h-5' />
                </span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className='flex-col space-y-4'>
              {item.content.map((c, i) => (
                <p className='font-light -mt-5 leading-7' key={i}>
                  {c}
                </p>
              ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
