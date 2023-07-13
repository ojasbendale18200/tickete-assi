import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function Questions() {
  return (
    <Box
      w={{ base: "90%", md: "80%" }}
      margin={"auto"}
      height={"auto"}
      mt={"100px"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      gap={"24px"}
      pb={"30px"}
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"32px"}
        margin={{ base: "auto", md: "initial" }}
      >
        <Text
          fontSize={"24px"}
          fontWeight={"600"}
          lineHeight={"32px"}
          letterSpacing={"0.48px"}
        >
          Frequently asked questions
        </Text>
        <Accordion
          allowMultiple
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          width={"100%"}
          gap={"24px"}
        >
          {data.map((item) => (
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        fontSize={"18px"}
                        fontWeight={"600"}
                        lineHeight={"26px"}
                        letterSpacing={"0.36px"}
                        color={"#474747"}
                      >
                        {item.title}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize={"16px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    color={"#595959"}
                  >
                    {item.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      <Box
        w={{ base: "90%", md: "30%" }}
        margin={{ base: "auto", md: "initial" }}
        height={"188px"}
        borderRadius={"12px"}
        backgroundColor={"#FFF7ED"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"24px"}
          color={"#7F2D0F"}
        >
          <Box>
            {" "}
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"26px"}
              letterSpacing={"0.36px"}
            >
              Need help?
            </Text>
            <Text fontSize={"16px"} fontWeight={"400"} lineHeight={"24px"}>
              We're here to help, 24*7
            </Text>
          </Box>
          <Button
            padding={"0px 24px 1px 24px"}
            variant="outline"
            gap={"8px"}
            borderColor={"#7F2D0F"}
            backgroundColor={"#FFF7ED"}
            color={"#7F2D0F"}
            _hover={{ borderColor: "#7F2D0F" }}
          >
            Chat with us
          </Button>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M43.2188 35.5875C44.3709 33.437 44.9811 31.038 44.9965 28.5984C45.0119 26.1588 44.432 23.7522 43.3071 21.5874C42.1822 19.4225 40.5462 17.5647 38.541 16.1751C36.5359 14.7854 34.222 13.9058 31.8 13.6125C31.0026 11.7526 29.837 10.0732 28.3735 8.67558C26.91 7.27792 25.1788 6.19085 23.2842 5.47981C21.3895 4.76877 19.3706 4.44845 17.3489 4.53815C15.3272 4.62784 13.3446 5.1257 11.5203 6.00173C9.69609 6.87777 8.06798 8.11388 6.73401 9.63565C5.40003 11.1574 4.38777 12.9334 3.75817 14.8566C3.12856 16.7799 2.89463 18.8106 3.07046 20.8267C3.24628 22.8427 3.82822 24.8023 4.78125 26.5875L3.61875 30.6375C3.48402 31.088 3.47367 31.5666 3.58882 32.0225C3.70397 32.4784 3.94032 32.8947 4.27283 33.2272C4.60533 33.5597 5.02159 33.796 5.47751 33.9112C5.93342 34.0263 6.41199 34.016 6.8625 33.8813L10.9125 32.7188C12.5573 33.5955 14.3499 34.1613 16.2 34.3875C17.0172 36.3028 18.2243 38.0269 19.7443 39.4501C21.2643 40.8734 23.064 41.9645 25.0289 42.6542C26.9937 43.3438 29.0805 43.6168 31.1566 43.4557C33.2327 43.2947 35.2525 42.7031 37.0875 41.7188L41.1375 42.8812C41.588 43.016 42.0666 43.0263 42.5225 42.9112C42.9784 42.796 43.3947 42.5597 43.7272 42.2272C44.0597 41.8947 44.296 41.4784 44.4112 41.0225C44.5263 40.5666 44.516 40.088 44.3813 39.6375L43.2188 35.5875ZM40.3313 34.6313C40.2221 34.8019 40.1506 34.9938 40.1215 35.1943C40.0924 35.3948 40.1064 35.5991 40.1625 35.7938L41.325 39.825L37.2938 38.6625C37.0991 38.6064 36.8948 38.5924 36.6943 38.6215C36.4938 38.6506 36.3019 38.7221 36.1313 38.8313C34.7567 39.6423 33.2346 40.1719 31.6535 40.3892C30.0724 40.6066 28.4639 40.5074 26.9215 40.0974C25.3791 39.6873 23.9336 38.9747 22.6692 38.0009C21.4048 37.0271 20.3466 35.8115 19.5563 34.425C23.2428 34.0321 26.6543 32.2911 29.1356 29.5364C31.6169 26.7817 32.9931 23.2075 33 19.5C32.9958 18.6009 32.9142 17.7039 32.7563 16.8188C35.3877 17.4398 37.7323 18.9312 39.4101 21.0514C41.0879 23.1716 42.0005 25.7963 42 28.5C41.9975 30.6556 41.4215 32.7717 40.3313 34.6313Z"
            fill="#7F2D0F"
          />
        </svg>
      </Box>
    </Box>
  );
}

export default Questions;
