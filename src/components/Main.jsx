import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BasicInfo from "./BasicInfo";
import CardDetails from "./CardDetails";

function Main() {
  return (
    <>
      <Text
        fontFamily={"Open Sans"}
        color={"#474747"}
        fontSize={"48px"}
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
        border={"1px solid black"}
        margin={"auto"}
        height={{ base: "auto", md: "1500px" }}
        mt={"40px"}
        gap={"50px"}
      >
        <Box
          flex="0 0 60%"
          w={{ base: "100%", md: "60%" }}
          border={"1px solid red"}
        >
          <BasicInfo />
          <CardDetails />
          <Divider w={"100%"} h={"1px"} backgroundColor={"#D6D6D6"} />
        </Box>

        <Box flex="0 0 30%" width="30%" border={"1px solid red"}>
          hii
        </Box>
      </Box>
    </>
  );
}

export default Main;
