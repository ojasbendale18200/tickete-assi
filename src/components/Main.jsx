import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BasicInfo from "./BasicInfo";
import CardDetails from "./CardDetails";
import Questions from "./Questions";
import PromiseSection from "./PromiseSection";
import Footer from "./Footer";
import TickitOverview from "./TickitOverview";

function Main() {
  return (
    <>
      <Text
        fontFamily={"Open Sans"}
        color={"#474747"}
        fontSize={{ base: "30px", md: "45px" }}
        fontWeight={"600"}
        lineHeight={"56px"}
        letterSpacing={"0.96px"}
        w={"80%"}
        margin={"auto"}
        mt={"80px"}
      >
        Confirm and pay
      </Text>
      <Box
        w={{ base: "90%", md: "80%" }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        margin={"auto"}
        height={{ base: "auto", md: "1400px" }}
        mt={"40px"}
        gap={"50px"}
      >
        <Box
          flex="0 0 60%"
          w={{ base: "100%", md: "60%" }}
          order={{ base: 2, md: 1 }}
        >
          <BasicInfo />
          <CardDetails />
        </Box>

        <Box
          display={"inline-flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"24px"}
          flex="0 0 30%"
          width={{ base: "90%", md: "30%" }}
          order={{ base: 1, md: 2 }}
        >
          <Box>
            <Image src="../Rectangle.png" borderRadius={"12px"} />
            <Text
              pt={"10px"}
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"26px"}
              letterSpacing={"0.36px"}
            >
              Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk
              House
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            my={"17px"}
            w={"90%"}
            gap={"12px"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.3 9.79688C21.6383 9.72603 21.9421 9.54121 22.1605 9.27331C22.3789 9.0054 22.4988 8.67065 22.5 8.325V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V8.325C1.50125 8.67065 1.6211 9.0054 1.83952 9.27331C2.05793 9.54121 2.36168 9.72603 2.7 9.79688C3.20663 9.90194 3.66157 10.1784 3.98818 10.5797C4.31479 10.981 4.49312 11.4826 4.49312 12C4.49312 12.5174 4.31479 13.019 3.98818 13.4203C3.66157 13.8216 3.20663 14.0981 2.7 14.2031C2.36168 14.274 2.05793 14.4588 1.83952 14.7267C1.6211 14.9946 1.50125 15.3293 1.5 15.675V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V15.675C22.4988 15.3293 22.3789 14.9946 22.1605 14.7267C21.9421 14.4588 21.6383 14.274 21.3 14.2031C20.7934 14.0981 20.3384 13.8216 20.0118 13.4203C19.6852 13.019 19.5069 12.5174 19.5069 12C19.5069 11.4826 19.6852 10.981 20.0118 10.5797C20.3384 10.1784 20.7934 9.90194 21.3 9.79688ZM3 15.675C3.84772 15.5029 4.60986 15.043 5.15728 14.3732C5.70471 13.7034 6.00376 12.865 6.00376 12C6.00376 11.135 5.70471 10.2966 5.15728 9.62681C4.60986 8.95705 3.84772 8.49714 3 8.325V6H8.25V18H3V15.675Z"
                  fill="#474747"
                />
              </svg>
              <Text ml={"20px"}>{"<variant name>"}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM19.5 7.5H4.5V4.5H6.75V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5Z"
                  fill="#474747"
                />
              </svg>
              <Text ml={"20px"}>{"<date>"}</Text>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.745 9.41566 20.7162 6.93859 18.8888 5.11118C17.0614 3.28378 14.5843 2.25496 12 2.25ZM17.25 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75V11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75Z"
                  fill="#474747"
                />
              </svg>
              <Text ml={"20px"}>{"<time>"}</Text>
            </Box>
          </Box>

          <Box position={"relative"} width={"90%"}>
            <Divider
              w={"100%"}
              h={"1px"}
              position={"absolute"}
              bottom={"10px"}
              backgroundColor={"#D6D6D6"}
            />
          </Box>
          <TickitOverview />
        </Box>
      </Box>
      <Box
        position={"relative"}
        display={{ base: "none", md: "block" }}
        margin={"auto"}
        width={"80%"}
      >
        <Divider
          w={"100%"}
          h={"1px"}
          position={"absolute"}
          bottom={"-40px"}
          backgroundColor={"#D6D6D6"}
        />
      </Box>
      <Questions />
      <PromiseSection />
      <Footer />
    </>
  );
}

export default Main;
