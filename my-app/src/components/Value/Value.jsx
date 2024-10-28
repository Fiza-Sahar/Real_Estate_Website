import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "react-accessible-accordion/dist/fancy-example.css"; // You can customize this as needed

const Value = () => {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span>Section 1</span>
            <MdOutlineArrowDropDown style={{ marginLeft: '10px' }} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            This is the content of section 1. It can be any React node, such as text, images, or even other components.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span>Section 2</span>
            <MdOutlineArrowDropDown style={{ marginLeft: '10px' }} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            This is the content of section 2. You can add more detailed information or components here.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span>Section 3</span>
            <MdOutlineArrowDropDown style={{ marginLeft: '10px' }} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            This is the content of section 3. Feel free to include any relevant content you want.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Value;
