import React from "react";
import "./faqsection.css";
import { Col, Accordion } from "react-bootstrap";

const FaqSection = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="heading">FAQ</div>
          <Col lg={12} sm={12} md={12}>
            <Accordion  className="faqa">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is The Doge Pound?</Accordion.Header>
                <Accordion.Body className="faq accordion-body">
                  It is a collection of 10,000 unique Doge NFTs on Ethereum
                  Blockchain. Each one is thoughtfully designed, specifically
                  picked, and impeccably shaped.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* -------------------------------------------------------------------------------------------- */}

            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faqa">
                  How was The Doge Pound created?
                </Accordion.Header>
                <Accordion.Body className="faq accordion-body">
                  Each Doge Pound has constructed algorithmically by mixing a
                  variety of properties with different possibilities in the
                  following categories:
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* -------------------------------------------------------------------------------------------- */}

            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faqa">
                  What is the smart contract address of The Doge Pound?
                </Accordion.Header>
                <Accordion.Body className="faq accordion-body">
                  Verified smart contract
                  address:0x73883743Dd9894bd2D43e975465b50DF8d3aF3B2
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* -------------------------------------------------------------------------------------------- */}
            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faqa">
                  What is the smart contract address of Puppy?
                </Accordion.Header>
                <Accordion.Body className="faq accordion-body">
                  Verified smart contract address:
                  0x73883743Dd9894bd2D43e975465b50DF8d3aF3B2
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* -------------------------------------------------------------------------------------------- */}
            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="faqas">
                  How are the NFT's distributed?
                </Accordion.Header>
                <Accordion.Body className="faq accordion-body">
                  Each Doge Pound token ID is assigned to an artwork image from
                  the initial sequence with this formula: (tokenId +
                  startingIndex) % 10000 = Initial Sequence Index. Here is the
                  finalized starting index: 5120
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
