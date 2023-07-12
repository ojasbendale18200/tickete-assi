import React from "react";
import {
  Box,
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

function BasicInfo() {
  return (
    <>
      {" "}
      {/* <Box
        display={"inline-flex"}
        flexDirection={"column"}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={"32px"}
        width={"auto"}
        height={"auto"}
      >
        <Flex direction={"column"} gap={"6px"}>
          <Text
            fontFamily={"Open Sans"}
            color={"#474747"}
            fontSize={"24px"}
            fontWeight={"600"}
            lineHeight={"32px"}
            margin={"0"}
          >
            Enter your details
          </Text>
          <Text
            color={"#595959"}
            fontSize={"15px"}
            fontWeight={"400"}
            lineHeight={"24px"}
            margin={"0"}
          >
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </Text>
        </Flex>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={"15px"}
        mt={"30px"}
      >
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input type="text" placeholder="Tickete Inc" w={"384px"} h={"60px"} />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Phone Number</FormLabel>

          <InputGroup>
            <InputLeftElement
              mt={"8px"}
              pointerEvents="none"
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_325_988)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.8148 24.3382H-1.74634V-0.272705H33.8148V24.3382Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5286 11.6385C15.5286 11.6385 13.0197 10.5714 13.3795 7.80265C13.7247 6.47116 14.3422 5.56267 15.4556 5.06757C15.9807 4.90894 16.5156 4.83684 17.0601 4.79358C16.9143 4.92817 16.7976 5.06276 16.7344 5.22619C16.6177 5.53383 16.7052 5.82224 16.8656 6.11545C17.065 6.45193 17.1865 6.79802 17.2254 7.24986C17.262 7.55777 17.2156 7.86975 17.0909 8.15421C16.9662 8.43868 16.7678 8.68553 16.5156 8.86976C16.1947 9.11491 15.8154 9.20143 15.5043 9.48023C15.2612 9.71095 15.1153 9.94649 15.0667 10.3503C15.057 11.1242 15.266 11.2347 15.5286 11.6385Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0983 7.62V7.63442H14.9962V7.62H15.0983Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5422 9.44137C14.55 10.1677 14.7707 10.9005 15.2415 11.3124L15.1739 11.388C14.6722 10.9491 14.4481 10.1822 14.4401 9.44245C14.4361 9.07132 14.4864 8.70382 14.5852 8.38293C14.6839 8.06262 14.832 7.78538 15.0262 7.59839L15.0975 7.67071C14.9197 7.84182 14.7786 8.10174 14.6829 8.41233C14.5874 8.72234 14.5383 9.07946 14.5422 9.44137Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.6599 7.15388L15.8203 7.41826L15.5286 7.29809L15.3001 7.53843L15.339 7.22598L15.0472 7.10581L15.3633 7.03371L15.4022 6.72607L15.5626 6.99045L15.8835 6.91835"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7425 11.456C15.7425 11.456 16.0342 8.76896 18.8202 8.2979C20.2108 8.24021 21.2707 8.55266 22.0778 9.46595C22.3841 9.91299 22.6078 10.3985 22.8071 10.8984C22.6369 10.8022 22.4765 10.7301 22.2917 10.7205C21.966 10.6965 21.7083 10.8647 21.4749 11.1003C21.2024 11.3985 20.8626 11.6291 20.483 11.7732C20.1963 11.8986 19.8812 11.9468 19.5696 11.913C19.2579 11.8793 18.9608 11.7647 18.7084 11.581C18.3778 11.3454 18.1833 11.0137 17.8235 10.8022C17.5311 10.6304 17.1845 10.5721 16.8511 10.6388C16.0975 10.8599 16.0586 11.0907 15.7425 11.456Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4863 9.8817H19.4717V9.78076H19.4863V9.8817Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5782 9.88051C16.878 10.1008 16.2326 10.5244 15.9688 11.0924L15.876 11.0503C16.1568 10.4455 16.8339 10.0087 17.5473 9.78432C17.9051 9.67176 18.2751 9.61161 18.6141 9.61085C18.9525 9.61008 19.2637 9.66851 19.501 9.79651L19.4521 9.88513C19.2349 9.76799 18.9425 9.71105 18.6144 9.71179C18.2868 9.71253 17.9272 9.77075 17.5782 9.88051Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.1184 10.2686L19.9093 10.4945L19.9385 10.1821L19.6468 10.0378L19.9531 9.98978L19.9822 9.66772L20.1476 9.95613L20.4587 9.89845L20.2497 10.1244L20.4101 10.4128"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9273 11.6482C15.9273 11.6482 18.6014 11.0714 19.9336 13.5373C20.4344 14.8207 20.4684 15.9118 19.851 16.9549C19.5203 17.3875 19.1217 17.748 18.7084 18.0989C18.7473 17.9067 18.7619 17.7336 18.7132 17.5606C18.6354 17.2433 18.3923 17.0559 18.0909 16.9117C17.7169 16.75 17.3869 16.5028 17.1282 16.1906C16.9184 15.9616 16.7734 15.6819 16.7077 15.3798C16.642 15.0777 16.6579 14.7639 16.7538 14.4698C16.8705 14.0853 17.1282 13.7968 17.2157 13.3931C17.2885 13.0652 17.2347 12.7224 17.065 12.4317C16.6128 11.7972 16.3794 11.8309 15.9273 11.6482Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6695 14.6332L18.6791 14.6428L18.6695 14.6332Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6431 14.6785L18.6334 14.6689L18.7056 14.5975L18.7153 14.6071L18.6431 14.6785Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.0235 12.8713C17.5906 12.2843 16.9808 11.814 16.3545 11.7465L16.3655 11.6461C17.0325 11.718 17.665 12.2139 18.106 12.8118C18.3272 13.1117 18.5023 13.4398 18.6107 13.7581C18.7189 14.0758 18.7618 14.3869 18.7149 14.6516L18.6143 14.6342C18.6573 14.3917 18.6189 14.0984 18.5139 13.7903C18.4091 13.4828 18.2393 13.1638 18.0235 12.8713Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.4555 15.3783L18.1687 15.2533L18.4847 15.1812L18.5236 14.8591L18.6743 15.1331L18.9904 15.061L18.7716 15.3014L18.9174 15.5753L18.6354 15.4504L18.4166 15.6955"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8689 11.9222C15.8689 11.9222 17.1768 14.2967 15.1639 16.2483C14.0554 17.0847 13.0052 17.426 11.8188 17.1328C11.3083 16.9405 10.8464 16.6665 10.3845 16.3685C10.579 16.3541 10.7589 16.3204 10.9145 16.2243C11.1965 16.0608 11.3083 15.7772 11.3667 15.4552C11.4173 15.0535 11.5639 14.6696 11.7945 14.3352C11.9577 14.0713 12.1883 13.8546 12.4631 13.7069C12.738 13.5592 13.0474 13.4858 13.3601 13.494C13.7685 13.4988 14.1186 13.667 14.5367 13.6382C14.8722 13.5949 15.1348 13.5036 15.4313 13.2152C15.9176 12.6143 15.8203 12.398 15.8689 11.9174V11.9222Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.7393 15.3639L13.7345 15.3735L13.7393 15.3639Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6888 15.3509L13.6937 15.3413L13.785 15.3865L13.7801 15.3961L13.6888 15.3509Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2705 14.2528C15.7185 13.6766 16.0022 12.964 15.8868 12.3496L15.9872 12.3312C16.1101 12.9857 15.8079 13.7272 15.3515 14.3143C15.1225 14.6088 14.8529 14.867 14.5741 15.0586C14.2957 15.2499 14.0052 15.3769 13.7349 15.4045L13.7244 15.3041C13.9718 15.2788 14.2459 15.1612 14.5158 14.9757C14.7851 14.7906 15.0473 14.5399 15.2705 14.2528Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.9566 15.3687L13.0003 15.061L13.1608 15.335L13.4817 15.287L13.258 15.5081L13.4184 15.7821L13.1219 15.6427L12.8982 15.8638L12.9371 15.5561L12.6405 15.4167"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5723 11.8693C15.5723 11.8693 13.7442 13.8786 11.2062 12.6577C10.0393 11.903 9.36834 11.0329 9.25652 9.83125C9.2711 9.28807 9.37321 8.76894 9.50448 8.245C9.58714 8.41804 9.67952 8.57186 9.82052 8.68722C10.0685 8.89392 10.3797 8.90353 10.7103 8.85065C11.1071 8.76474 11.5191 8.77463 11.9112 8.8795C12.2183 8.9434 12.5028 9.08643 12.7359 9.2941C12.969 9.50177 13.1424 9.76668 13.2385 10.062C13.3698 10.4417 13.3261 10.8263 13.4962 11.206C13.6421 11.504 13.8171 11.7155 14.1915 11.8982C14.9305 12.1529 15.1007 11.9895 15.5723 11.8741V11.8693Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5805 11.0329L11.5709 11.0281L11.5805 11.0329Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5937 10.9829L11.6034 10.9877L11.5578 11.078L11.548 11.0732L11.5937 10.9829Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1499 12.087C13.8484 12.3132 14.6216 12.3418 15.1677 12.0323L15.2185 12.1198C14.6366 12.4496 13.8296 12.4133 13.1181 12.1829C12.7612 12.0673 12.4252 11.9019 12.1494 11.706C11.8742 11.5105 11.6561 11.2825 11.5394 11.0403L11.6315 10.9968C11.7384 11.2185 11.9421 11.4345 12.209 11.6241C12.4754 11.8133 12.8019 11.9742 13.1499 12.087Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.318 10.3023L11.6244 10.2398L11.4153 10.4801L11.566 10.7637L11.284 10.6291L11.0749 10.8695L11.109 10.5426L10.8221 10.408L11.1284 10.3455L11.1625 10.0187"
                      fill="#BA0000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_325_988">
                      <rect
                        width="33.1034"
                        height="24.5455"
                        fill="white"
                        transform="translate(-0.551727 -0.272705)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <Input
              type="text"
              placeholder='+85 2345345678"'
              color={"black"}
              w={"384px"}
              h={"60px"}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Hi@tickete.com"
            w={"384px"}
            h={"60px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Hi@tickete.com"
            w={"384px"}
            h={"60px"}
            outlineColor={"red"}
          />
          <FormLabel color={"red"} pt={"3px"}>
            error message >
          </FormLabel>
        </FormControl>
      </Grid>
      <Flex direction={"column"} gap={"6px"} mt={"50px"}>
        <Text
          fontFamily={"Open Sans"}
          color={"#474747"}
          fontSize={"24px"}
          fontWeight={"600"}
          lineHeight={"32px"}
          margin={"0"}
        >
          Additional information
        </Text>
        <Text
          color={"#595959"}
          fontSize={"15px"}
          fontWeight={"400"}
          lineHeight={"24px"}
          margin={"0"}
        >
          We need a few more details to complete your reservation.
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={"15px"}
        mt={"40px"}
      >
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="<Custom Input>"
            w={"384px"}
            h={"60px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>dropdown</FormLabel>
          <Select placeholder="dropdown" w={"384px"} h={"60px"}></Select>
        </FormControl>
      </Grid> */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ base: "center", md: "flex-start" }}
        gap={"32px"}
        width={"100%"}
        height={"auto"}
      >
        <Flex direction={"column"} gap={"6px"}>
          <Text
            fontFamily={"Open Sans"}
            color={"#474747"}
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"600"}
            lineHeight={"28px"}
            margin={"0"}
          >
            Enter your details
          </Text>
          <Text
            color={"#595959"}
            fontSize={{ base: "13px", md: "15px" }}
            fontWeight={"400"}
            lineHeight={"20px"}
            margin={"0"}
          >
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </Text>
        </Flex>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={"15px"}
        mt={"30px"}
      >
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input type="text" placeholder="Tickete Inc" w={"100%"} h={"40px"} />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Phone Number</FormLabel>

          <InputGroup>
            <InputLeftElement
              //   mt={"8px"}
              pointerEvents="none"
              children={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_325_988)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.8148 24.3382H-1.74634V-0.272705H33.8148V24.3382Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5286 11.6385C15.5286 11.6385 13.0197 10.5714 13.3795 7.80265C13.7247 6.47116 14.3422 5.56267 15.4556 5.06757C15.9807 4.90894 16.5156 4.83684 17.0601 4.79358C16.9143 4.92817 16.7976 5.06276 16.7344 5.22619C16.6177 5.53383 16.7052 5.82224 16.8656 6.11545C17.065 6.45193 17.1865 6.79802 17.2254 7.24986C17.262 7.55777 17.2156 7.86975 17.0909 8.15421C16.9662 8.43868 16.7678 8.68553 16.5156 8.86976C16.1947 9.11491 15.8154 9.20143 15.5043 9.48023C15.2612 9.71095 15.1153 9.94649 15.0667 10.3503C15.057 11.1242 15.266 11.2347 15.5286 11.6385Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.0983 7.62V7.63442H14.9962V7.62H15.0983Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5422 9.44137C14.55 10.1677 14.7707 10.9005 15.2415 11.3124L15.1739 11.388C14.6722 10.9491 14.4481 10.1822 14.4401 9.44245C14.4361 9.07132 14.4864 8.70382 14.5852 8.38293C14.6839 8.06262 14.832 7.78538 15.0262 7.59839L15.0975 7.67071C14.9197 7.84182 14.7786 8.10174 14.6829 8.41233C14.5874 8.72234 14.5383 9.07946 14.5422 9.44137Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.6599 7.15388L15.8203 7.41826L15.5286 7.29809L15.3001 7.53843L15.339 7.22598L15.0472 7.10581L15.3633 7.03371L15.4022 6.72607L15.5626 6.99045L15.8835 6.91835"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7425 11.456C15.7425 11.456 16.0342 8.76896 18.8202 8.2979C20.2108 8.24021 21.2707 8.55266 22.0778 9.46595C22.3841 9.91299 22.6078 10.3985 22.8071 10.8984C22.6369 10.8022 22.4765 10.7301 22.2917 10.7205C21.966 10.6965 21.7083 10.8647 21.4749 11.1003C21.2024 11.3985 20.8626 11.6291 20.483 11.7732C20.1963 11.8986 19.8812 11.9468 19.5696 11.913C19.2579 11.8793 18.9608 11.7647 18.7084 11.581C18.3778 11.3454 18.1833 11.0137 17.8235 10.8022C17.5311 10.6304 17.1845 10.5721 16.8511 10.6388C16.0975 10.8599 16.0586 11.0907 15.7425 11.456Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4863 9.8817H19.4717V9.78076H19.4863V9.8817Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5782 9.88051C16.878 10.1008 16.2326 10.5244 15.9688 11.0924L15.876 11.0503C16.1568 10.4455 16.8339 10.0087 17.5473 9.78432C17.9051 9.67176 18.2751 9.61161 18.6141 9.61085C18.9525 9.61008 19.2637 9.66851 19.501 9.79651L19.4521 9.88513C19.2349 9.76799 18.9425 9.71105 18.6144 9.71179C18.2868 9.71253 17.9272 9.77075 17.5782 9.88051Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.1184 10.2686L19.9093 10.4945L19.9385 10.1821L19.6468 10.0378L19.9531 9.98978L19.9822 9.66772L20.1476 9.95613L20.4587 9.89845L20.2497 10.1244L20.4101 10.4128"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9273 11.6482C15.9273 11.6482 18.6014 11.0714 19.9336 13.5373C20.4344 14.8207 20.4684 15.9118 19.851 16.9549C19.5203 17.3875 19.1217 17.748 18.7084 18.0989C18.7473 17.9067 18.7619 17.7336 18.7132 17.5606C18.6354 17.2433 18.3923 17.0559 18.0909 16.9117C17.7169 16.75 17.3869 16.5028 17.1282 16.1906C16.9184 15.9616 16.7734 15.6819 16.7077 15.3798C16.642 15.0777 16.6579 14.7639 16.7538 14.4698C16.8705 14.0853 17.1282 13.7968 17.2157 13.3931C17.2885 13.0652 17.2347 12.7224 17.065 12.4317C16.6128 11.7972 16.3794 11.8309 15.9273 11.6482Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6695 14.6332L18.6791 14.6428L18.6695 14.6332Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6431 14.6785L18.6334 14.6689L18.7056 14.5975L18.7153 14.6071L18.6431 14.6785Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.0235 12.8713C17.5906 12.2843 16.9808 11.814 16.3545 11.7465L16.3655 11.6461C17.0325 11.718 17.665 12.2139 18.106 12.8118C18.3272 13.1117 18.5023 13.4398 18.6107 13.7581C18.7189 14.0758 18.7618 14.3869 18.7149 14.6516L18.6143 14.6342C18.6573 14.3917 18.6189 14.0984 18.5139 13.7903C18.4091 13.4828 18.2393 13.1638 18.0235 12.8713Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.4555 15.3783L18.1687 15.2533L18.4847 15.1812L18.5236 14.8591L18.6743 15.1331L18.9904 15.061L18.7716 15.3014L18.9174 15.5753L18.6354 15.4504L18.4166 15.6955"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8689 11.9222C15.8689 11.9222 17.1768 14.2967 15.1639 16.2483C14.0554 17.0847 13.0052 17.426 11.8188 17.1328C11.3083 16.9405 10.8464 16.6665 10.3845 16.3685C10.579 16.3541 10.7589 16.3204 10.9145 16.2243C11.1965 16.0608 11.3083 15.7772 11.3667 15.4552C11.4173 15.0535 11.5639 14.6696 11.7945 14.3352C11.9577 14.0713 12.1883 13.8546 12.4631 13.7069C12.738 13.5592 13.0474 13.4858 13.3601 13.494C13.7685 13.4988 14.1186 13.667 14.5367 13.6382C14.8722 13.5949 15.1348 13.5036 15.4313 13.2152C15.9176 12.6143 15.8203 12.398 15.8689 11.9174V11.9222Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.7393 15.3639L13.7345 15.3735L13.7393 15.3639Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6888 15.3509L13.6937 15.3413L13.785 15.3865L13.7801 15.3961L13.6888 15.3509Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2705 14.2528C15.7185 13.6766 16.0022 12.964 15.8868 12.3496L15.9872 12.3312C16.1101 12.9857 15.8079 13.7272 15.3515 14.3143C15.1225 14.6088 14.8529 14.867 14.5741 15.0586C14.2957 15.2499 14.0052 15.3769 13.7349 15.4045L13.7244 15.3041C13.9718 15.2788 14.2459 15.1612 14.5158 14.9757C14.7851 14.7906 15.0473 14.5399 15.2705 14.2528Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.9566 15.3687L13.0003 15.061L13.1608 15.335L13.4817 15.287L13.258 15.5081L13.4184 15.7821L13.1219 15.6427L12.8982 15.8638L12.9371 15.5561L12.6405 15.4167"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5723 11.8693C15.5723 11.8693 13.7442 13.8786 11.2062 12.6577C10.0393 11.903 9.36834 11.0329 9.25652 9.83125C9.2711 9.28807 9.37321 8.76894 9.50448 8.245C9.58714 8.41804 9.67952 8.57186 9.82052 8.68722C10.0685 8.89392 10.3797 8.90353 10.7103 8.85065C11.1071 8.76474 11.5191 8.77463 11.9112 8.8795C12.2183 8.9434 12.5028 9.08643 12.7359 9.2941C12.969 9.50177 13.1424 9.76668 13.2385 10.062C13.3698 10.4417 13.3261 10.8263 13.4962 11.206C13.6421 11.504 13.8171 11.7155 14.1915 11.8982C14.9305 12.1529 15.1007 11.9895 15.5723 11.8741V11.8693Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5805 11.0329L11.5709 11.0281L11.5805 11.0329Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5937 10.9829L11.6034 10.9877L11.5578 11.078L11.548 11.0732L11.5937 10.9829Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1499 12.087C13.8484 12.3132 14.6216 12.3418 15.1677 12.0323L15.2185 12.1198C14.6366 12.4496 13.8296 12.4133 13.1181 12.1829C12.7612 12.0673 12.4252 11.9019 12.1494 11.706C11.8742 11.5105 11.6561 11.2825 11.5394 11.0403L11.6315 10.9968C11.7384 11.2185 11.9421 11.4345 12.209 11.6241C12.4754 11.8133 12.8019 11.9742 13.1499 12.087Z"
                      fill="#BA0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.318 10.3023L11.6244 10.2398L11.4153 10.4801L11.566 10.7637L11.284 10.6291L11.0749 10.8695L11.109 10.5426L10.8221 10.408L11.1284 10.3455L11.1625 10.0187"
                      fill="#BA0000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_325_988">
                      <rect
                        width="33.1034"
                        height="24.5455"
                        fill="white"
                        transform="translate(-0.551727 -0.272705)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
            <Input
              type="text"
              placeholder='+85 2345345678"'
              color={"black"}
              w={"100%"}
              h={"40px"}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Email</FormLabel>
          <Input
            type="text"
            placeholder="Hi@tickete.com"
            w={"100%"}
            h={"40px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Hi@tickete.com"
            w={"100%"}
            h={"40px"}
            outlineColor={"red"}
          />
          <FormLabel color={"red"} pt={"3px"}>
            error message >
          </FormLabel>
        </FormControl>
      </Grid>
      <Flex direction={"column"} gap={"6px"} mt={"50px"}>
        <Text
          fontFamily={"Open Sans"}
          color={"#474747"}
          fontSize={{ base: "20px", md: "24px" }}
          fontWeight={"600"}
          lineHeight={"28px"}
          margin={"0"}
        >
          Additional information
        </Text>
        <Text
          color={"#595959"}
          fontSize={{ base: "13px", md: "15px" }}
          fontWeight={"400"}
          lineHeight={"20px"}
          margin={"0"}
        >
          We need a few more details to complete your reservation.
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={"15px"}
        mt={"40px"}
      >
        <FormControl>
          <FormLabel color={"#595959"}>Full Name</FormLabel>
          <Input
            type="text"
            placeholder="<Custom Input>"
            w={"100%"}
            h={"40px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel color={"#595959"}>Dropdown</FormLabel>
          <Select placeholder="Dropdown" w={"100%"} h={"40px"}></Select>
        </FormControl>
      </Grid>
    </>
  );
}

export default BasicInfo;
