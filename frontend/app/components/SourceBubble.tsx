import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Heading } from "@chakra-ui/react";
import { sendFeedback } from "../utils/sendFeedback";

export type Source = {
  url: string;
  title: string;
  page: number;
};

export function SourceBubble({
  source,
  highlighted,
  onMouseEnter,
  onMouseLeave,
  runId,
}: {
  source: Source;
  highlighted: boolean;
  onMouseEnter: () => any;
  onMouseLeave: () => any;
  runId?: string;
}) {
  //   const pdfPath = "/assets/04.Trinity%20Island/ZD-WSP-G251-SP-XX-001.pdf";
  const pdfPath = "/assets/05.Canada Water/CWA10-FMD-XXX-XX-SP-SP-000001.pdf";
  const pdfUrlWithPage = `${pdfPath}#page=${source.page}`;

  return (
    <Card
      onClick={async () => {
        window.open(pdfUrlWithPage, "_blank");
        if (runId) {
          await sendFeedback({
            key: "user_click",
            runId,
            value: pdfPath,
            isExplicit: false,
          });
        }
      }}
      backgroundColor={highlighted ? "rgb(58, 58, 61)" : "rgb(78,78,81)"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      cursor={"pointer"}
      alignSelf={"stretch"}
      height="100%"
      overflow={"hidden"}
    >
      <CardBody>
        <Heading size={"sm"} fontWeight={"normal"} color={"white"}>
          {source.title}
        </Heading>
        {/* <Document file={pdfPath}>
          <Page pageNumber={source.page} />
        </Document> */}
      </CardBody>
    </Card>
  );
}
