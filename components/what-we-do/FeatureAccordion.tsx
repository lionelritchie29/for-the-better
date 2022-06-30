import { MinusIcon, PlusIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionProps = {
  i: number;
  expanded: number | false;
  setExpanded: Dispatch<SetStateAction<number | false>>;
  item: {
    title: string;
    content: string[];
  };
};

const Accordion = ({ i, expanded, setExpanded, item }: AccordionProps) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.div
        initial={false}
        className='flex justify-between items-center font-medium text-lg py-4 border-t border-black cursor-pointer'
        onClick={() => setExpanded(isOpen ? false : i)}>
        <div>{item.title}</div>
        {isOpen ? <MinusIcon className='w-5 h-5 block' /> : <PlusIcon className='w-5 h-5 block' />}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}>
            <div>
              {item.content.map((c, idx) => (
                <p className='text-black pb-4 font-light leading-7' key={idx}>
                  {c}
                </p>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function FeatureAccordion() {
  const [expanded, setExpanded] = useState<false | number>(0);

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
    <div className='border-b border-black mt-16 md:mt-0'>
      {items.map((item, idx) => (
        <Accordion key={idx} i={idx} expanded={expanded} setExpanded={setExpanded} item={item} />
      ))}
    </div>
  );
}
