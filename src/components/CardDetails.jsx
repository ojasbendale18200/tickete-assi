import {
  Box,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CardDetails() {
  return (
    <Box
      mt={"50px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"32px"}
      w={"100%"}
    >
      <Flex direction={"column"} gap={"6px"}>
        <Text
          fontSize={"24px"}
          fontWeight={"600"}
          lineHeight={"32px"}
          color={"#474747"}
        >
          Select your mode of payment
        </Text>
        <Text
          fontSize={"15px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          color={"#595959"}
        >
          Payments with Tickete are secure and encrypted.
        </Text>
      </Flex>
      <Flex alignItems="center" gap="10px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V9.08437V17.9906C1.5 18.3884 1.65804 18.77 1.93934 19.0513C2.22064 19.3326 2.60218 19.4906 3 19.4906H21C21.3978 19.4906 21.7794 19.3326 22.0607 19.0513C22.342 18.77 22.5 18.3884 22.5 17.9906V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5ZM18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5ZM3 8.33437V6H21V8.33437H3Z"
            fill="#474747"
          />
        </svg>
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          w={{ base: "300px", md: "701px" }}
          fontWeight={"600"}
          lineHeight={"20px"}
          pl={"20px"}
          color={"#474747"}
        >
          Credit & debit card
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#0A0A0A"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            fill="#F5F5F5"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={"15px"}
        mt={"30px"}
        w={"100%"}
      >
        <FormControl>
          <FormLabel color={"#595959"}>Name On Card</FormLabel>
          <Input
            type="text"
            placeholder="Tickete Inc"
            w={{ base: "100%", md: "384px" }}
            h={"60px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Card Number</FormLabel>
          <InputGroup>
            <Input
              type="number"
              placeholder="1234 1234 1234 1234"
              color={"black"}
              w={{ base: "100%", md: "384px" }}
              h={"60px"}
            />
            <InputRightElement
              mt={"8px"}
              mr={"10px"}
              pointerEvents="none"
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="48"
                  viewBox="0 0 70 48"
                  fill="none"
                >
                  <rect width="70" height="48" rx="6" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.2505 32.5165H17.0099L13.8299 20.3847C13.679 19.8267 13.3585 19.3333 12.8871 19.1008C11.7106 18.5165 10.4142 18.0514 9 17.8169V17.3498H15.8313C16.7742 17.3498 17.4813 18.0514 17.5991 18.8663L19.2491 27.6173L23.4877 17.3498H27.6104L21.2505 32.5165ZM29.9675 32.5165H25.9626L29.2604 17.3498H33.2653L29.9675 32.5165ZM38.4467 21.5514C38.5646 20.7346 39.2717 20.2675 40.0967 20.2675C41.3931 20.1502 42.8052 20.3848 43.9838 20.9671L44.6909 17.7016C43.5123 17.2345 42.216 17 41.0395 17C37.1524 17 34.3239 19.1008 34.3239 22.0165C34.3239 24.2346 36.3274 25.3992 37.7417 26.1008C39.2717 26.8004 39.861 27.2675 39.7431 27.9671C39.7431 29.0165 38.5646 29.4836 37.3881 29.4836C35.9739 29.4836 34.5596 29.1338 33.2653 28.5494L32.5582 31.8169C33.9724 32.3992 35.5025 32.6338 36.9167 32.6338C41.2752 32.749 43.9838 30.6502 43.9838 27.5C43.9838 23.5329 38.4467 23.3004 38.4467 21.5514ZM58 32.5165L54.82 17.3498H51.4044C50.6972 17.3498 49.9901 17.8169 49.7544 18.5165L43.8659 32.5165H47.9887L48.8116 30.3004H53.8772L54.3486 32.5165H58ZM51.9936 21.4342L53.1701 27.1502H49.8723L51.9936 21.4342Z"
                    fill="#172B85"
                  />
                </svg>
              }
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Expiry Date</FormLabel>
          <Input
            type="number"
            placeholder="6/26"
            w={{ base: "100%", md: "384px" }}
            h={"60px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>CVV/CVC</FormLabel>
          <Input
            type="password"
            placeholder="***"
            w={{ base: "100%", md: "384px" }}
            h={"60px"}
          />
        </FormControl>
      </Grid>
      <Divider
        w={"100%"}
        h={"1px"}
        backgroundColor={"#D6D6D6"}
        order={{ base: 2, md: 1 }}
      />

      <Flex alignItems="center" gap="10px" order={{ base: 2, md: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="24"
          viewBox="0 0 35 24"
          fill="none"
        >
          <rect y="6.10352e-05" width="35" height="24" rx="4" fill="#FEB4C7" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.42416 15.3797H4V9.00006H5.42416V15.3797ZM8.97973 9.00006H7.58645C7.58645 10.1741 7.06142 11.2516 6.14601 11.9566L5.59402 12.3816L7.73282 15.3799H9.49132L7.52334 12.621C8.4562 11.666 8.97973 10.3812 8.97973 9.00006ZM11.2513 15.3779H9.90633V9.00128H11.2513V15.3779ZM15.3148 10.9669V11.2491C14.9519 10.9946 14.5139 10.845 14.0415 10.845C12.7911 10.845 11.7775 11.8871 11.7775 13.1725C11.7775 14.458 12.7911 15.5 14.0415 15.5C14.5139 15.5 14.9519 15.3505 15.3148 15.096V15.3779H16.5995V10.9669H15.3148ZM15.3109 13.1727C15.3109 13.7995 14.7898 14.3076 14.1469 14.3076C13.5041 14.3076 12.9829 13.7995 12.9829 13.1727C12.9829 12.5459 13.5041 12.0379 14.1469 12.0379C14.7898 12.0379 15.3109 12.5459 15.3109 13.1727ZM28.8671 11.2491V10.9669H30.1517V15.3779H28.8671V15.096C28.5042 15.3505 28.0662 15.5 27.5937 15.5C26.3433 15.5 25.3297 14.458 25.3297 13.1725C25.3297 11.8871 26.3433 10.845 27.5937 10.845C28.0662 10.845 28.5042 10.9946 28.8671 11.2491ZM27.6991 14.3076C28.342 14.3076 28.8631 13.7995 28.8631 13.1727C28.8631 12.5459 28.342 12.0379 27.6991 12.0379C27.0563 12.0379 26.5352 12.5459 26.5352 13.1727C26.5352 13.7995 27.0563 14.3076 27.6991 14.3076ZM23.047 10.8484C22.5338 10.8484 22.0482 11.0122 21.7235 11.4641V10.9673H20.4445V15.378H21.7392V13.06C21.7392 12.3893 22.1768 12.0608 22.7035 12.0608C23.2681 12.0608 23.5927 12.4075 23.5927 13.0509V15.378H24.8757V12.573C24.8757 11.5465 24.0819 10.8484 23.047 10.8484ZM18.5866 10.9669V11.5414C18.8442 11.1968 19.324 10.9672 19.8456 10.9672V12.2507L19.8411 12.2506L19.8385 12.2504L19.8304 12.2502C19.3221 12.2502 18.5896 12.6236 18.5896 13.3184V15.3779H17.2714V10.9669H18.5866ZM30.7092 14.6421C30.7092 14.1843 31.0701 13.8133 31.5153 13.8133C31.9605 13.8133 32.3214 14.1843 32.3214 14.6421C32.3214 15.0997 31.9605 15.4708 31.5153 15.4708C31.0701 15.4708 30.7092 15.0997 30.7092 14.6421Z"
            fill="#17120F"
          />
        </svg>
        <Text
          fontSize={"16px"}
          fontWeight={"600"}
          lineHeight={"20px"}
          pl={"20px"}
          color={"#474747"}
          w={{ base: "290px", md: "701px" }}
        >
          Klarna
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 6.47721 17.5228 2.00006 12 2.00006C6.47715 2.00006 2 6.47721 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z"
            fill="#F5F5F5"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Flex>

      <Divider
        w={"100%"}
        h={"1px"}
        backgroundColor={"#D6D6D6"}
        order={{ base: 2, md: 1 }}
      />

      <Box
        w="100%"
        h="50px"
        display="flex"
        flexShrink="0"
        alignItems="center"
        borderRadius="8px"
        backgroundColor="#F5F5F5"
        order={{ base: 1, md: 2 }}
      >
        <Box
          display="flex"
          w="390px"
          justifyContent="space-between"
          pl={{ base: "15px", md: "30px" }}
          alignItems={"center"}
          order={{ base: 1, md: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clipPath="url(#clip0_0_1230)">
              <path
                d="M6 11C9.31371 11 12 8.31371 12 5C12 1.68629 9.31371 -1.90735e-06 6 -1.90735e-06C2.68629 -1.90735e-06 -1.90735e-06 1.68629 -1.90735e-06 5C-1.90735e-06 8.31371 2.68629 11 6 11Z"
                fill="#474747"
                stroke="#474747"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
                fill="#EBEBEB"
                stroke="#EBEBEB"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1230">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Text
            color="#474747"
            fontSize="12px"
            fontWeight="600"
            lineHeight="18px"
            height="18.015px"
          >
            Receive travel tips, suggestions and offers in&lt;city&gt; by email
          </Text>
        </Box>
      </Box>
      <Text
        fontSize="12px"
        fontWeight="400"
        lineHeight="20px"
        color="#595959"
        order={{ base: 1, md: 2 }}
      >
        With payment, you agree to the general
        <Text as="span" color="#1733B6">
          terms and conditions of Tickete
        </Text>{" "}
        &amp; the{" "}
        <Text as="span" color="#1733B6">
          activity provider.
        </Text>
      </Text>
      <Box
        display={{ base: "block", md: "inline-flex" }}
        flexDirection="column"
        gap="6px"
        alignItems={{ base: "flex-start", md: "center" }}
        order={{ base: 2, md: 1 }}
      >
        <Text
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight="600"
          lineHeight={{ base: "24px", md: "28px" }}
          letterSpacing={{ base: "0.36px", md: "0.44px" }}
        >
          Total: &lt;price&gt;
        </Text>
        <Text
          fontSize={{ base: "10px", md: "12px" }}
          fontWeight="400"
          lineHeight={{ base: "14px", md: "16px" }}
          textDecorationLine="underline"
        >
          You will pay in &lt;currency&gt;
        </Text>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        padding={"16px 20px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"10px"}
        borderRadius={"12px"}
        w="100%"
        bgColor={"#F5F5F5"}
        order={{ base: 2, md: 1 }}
      >
        <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"16px"}>
          Free cancellation
        </Text>
        <Text
          color={"#595959"}
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"22px"}
        >
          {"Cancel before <date> for a full refund"}
        </Text>
      </Box>
      <Box
        margin={{ base: "auto", md: "initial" }}
        display="flex"
        height="48px"
        px="20px"
        justifyContent="center"
        alignItems="center"
        gap="8px"
        borderRadius="8px"
        backgroundColor="#0A0A0A"
        order={{ base: 1, md: 2 }}
      >
        <Text
          fontSize="16px"
          fontWeight="600"
          lineHeight="20px"
          color="#F6F6F7"
        >
          Confirm and pay
        </Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M16.25 3.62503H3.75C3.41848 3.62503 3.10054 3.75673 2.86612 3.99115C2.6317 4.22557 2.5 4.54351 2.5 4.87503V9.46097C2.5 16.4453 8.42188 18.7657 9.60938 19.1563C9.8631 19.2398 10.1369 19.2398 10.3906 19.1563C11.5781 18.7657 17.5 16.4453 17.5 9.46097V4.87503C17.5 4.54351 17.3683 4.22557 17.1339 3.99115C16.8995 3.75673 16.5815 3.62503 16.25 3.62503ZM10 17.9688C9.00781 17.6407 4.35156 15.8125 3.80469 10.5H10V4.87503H16.25V9.46097C16.2519 9.80809 16.2336 10.155 16.1953 10.5H10V17.9688Z"
            fill="white"
          />
        </svg>
      </Box>
      <Box
        display={{ base: "block", md: "none" }}
        padding={"16px 20px"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"10px"}
        borderRadius={"12px"}
        w="100%"
        bgColor={"#F5F5F5"}
        order={{ base: 1, md: 2 }}
      >
        <Text fontSize={"14px"} fontWeight={"600"} lineHeight={"16px"}>
          Free cancellation
        </Text>
        <Text
          color={"#595959"}
          fontSize={"14px"}
          fontWeight={"400"}
          lineHeight={"22px"}
        >
          {"Cancel before <date> for a full refund"}
        </Text>
      </Box>
    </Box>
  );
}

export default CardDetails;
