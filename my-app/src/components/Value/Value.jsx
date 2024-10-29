import React from 'react';
import hero from '../../Assets/Images/Hero-img.png';

import './Value.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "react-accessible-accordion/dist/fancy-example.css";

const Value = () => {
  return (
    <div className="value-section">
       <div className="flexCenter ">
              <div className="image-container">
              <img src={hero} width={100} alt="Logo" />
              </div>
        </div>
      <div className="accordion-content">
        <h2>Our Value</h2>
        <h3>Value We Give to You</h3>
        <p className="description">
          We always ready to help by providing the best services for you. We believe a good place to live can make your life better.
        </p>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Best interest rates on the market</span>
                <MdOutlineArrowDropDown className="accordion__icon" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Get the most competitive interest rates available for you.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Prevent unstable prices</span>
                <MdOutlineArrowDropDown className="accordion__icon" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exert our best to maintain stable prices for your investment.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span>Best price on the market</span>
                <MdOutlineArrowDropDown className="accordion__icon" />
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Enjoy the best value for your money with competitive pricing.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Value;
