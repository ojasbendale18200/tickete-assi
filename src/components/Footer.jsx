import {
  Box,
  Container,
  Divider,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box w={"100%"} mt={"70px"} height={"278px"} bgColor={"#0A0A0A"}>
      <Box pt={"60px"} pl={{ base: "20px", md: "80px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127"
          height="40"
          viewBox="0 0 127 40"
          fill="none"
        >
          <path
            d="M11.3281 31.6797C11.9271 31.6797 12.5195 31.6276 13.1055 31.5234C13.6914 31.4062 14.2253 31.2695 14.707 31.1133V34.5898C14.1992 34.8112 13.5417 35 12.7344 35.1562C11.9271 35.3125 11.0872 35.3906 10.2148 35.3906C8.99088 35.3906 7.89062 35.1888 6.91406 34.7852C5.9375 34.3685 5.16276 33.6589 4.58984 32.6562C4.01693 31.6536 3.73047 30.2669 3.73047 28.4961V16.875H0.78125V14.8242L3.94531 13.2031L5.44922 8.57422H8.33984V13.3789H14.5312V16.875H8.33984V28.4375C8.33984 29.5312 8.61328 30.3451 9.16016 30.8789C9.70703 31.4128 10.4297 31.6797 11.3281 31.6797Z"
            fill="white"
          />
          <path
            d="M22.8914 13.3789V35H18.3016V13.3789H22.8914ZM20.6258 5.09766C21.3289 5.09766 21.9344 5.28646 22.4422 5.66406C22.963 6.04167 23.2234 6.69271 23.2234 7.61719C23.2234 8.52865 22.963 9.17969 22.4422 9.57031C21.9344 9.94792 21.3289 10.1367 20.6258 10.1367C19.8966 10.1367 19.2781 9.94792 18.7703 9.57031C18.2755 9.17969 18.0281 8.52865 18.0281 7.61719C18.0281 6.69271 18.2755 6.04167 18.7703 5.66406C19.2781 5.28646 19.8966 5.09766 20.6258 5.09766Z"
            fill="white"
          />
          <path
            d="M37.3844 35.3906C35.3401 35.3906 33.5693 34.9935 32.0719 34.1992C30.5745 33.4049 29.4221 32.1875 28.6148 30.5469C27.8076 28.9062 27.4039 26.8229 27.4039 24.2969C27.4039 21.6667 27.8466 19.5182 28.732 17.8516C29.6174 16.1849 30.8414 14.9544 32.4039 14.1602C33.9794 13.3659 35.7828 12.9688 37.8141 12.9688C39.1031 12.9688 40.2685 13.099 41.3102 13.3594C42.3648 13.6068 43.2568 13.9128 43.9859 14.2773L42.6188 17.9492C41.8245 17.6237 41.0107 17.3503 40.1773 17.1289C39.344 16.9076 38.5432 16.7969 37.775 16.7969C36.512 16.7969 35.4573 17.0768 34.6109 17.6367C33.7776 18.1966 33.1526 19.0299 32.7359 20.1367C32.3323 21.2435 32.1305 22.6172 32.1305 24.2578C32.1305 25.8464 32.3388 27.1875 32.7555 28.2812C33.1721 29.362 33.7906 30.1823 34.6109 30.7422C35.4313 31.2891 36.4404 31.5625 37.6383 31.5625C38.8232 31.5625 39.8844 31.4193 40.8219 31.1328C41.7594 30.8464 42.6448 30.4753 43.4781 30.0195V34.0039C42.6578 34.4727 41.7789 34.8177 40.8414 35.0391C39.9039 35.2734 38.7516 35.3906 37.3844 35.3906Z"
            fill="white"
          />
          <path
            d="M52.3461 4.60938V19.2969C52.3461 19.9609 52.32 20.6901 52.268 21.4844C52.2159 22.2656 52.1638 23.0013 52.1117 23.6914H52.2094C52.5479 23.2357 52.9516 22.7018 53.4203 22.0898C53.9021 21.4779 54.3578 20.944 54.7875 20.4883L61.3891 13.3789H66.6625L58.0102 22.6758L67.2289 35H61.8383L54.9242 25.5078L52.3461 27.7148V35H47.7562V4.60938H52.3461Z"
            fill="white"
          />
          <path
            d="M78.4992 12.9688C80.4263 12.9688 82.0799 13.3659 83.4602 14.1602C84.8404 14.9544 85.9016 16.0807 86.6438 17.5391C87.3859 18.9974 87.757 20.7422 87.757 22.7734V25.2344H73.3234C73.3755 27.3307 73.9354 28.9453 75.0031 30.0781C76.0839 31.2109 77.5943 31.7773 79.5344 31.7773C80.9146 31.7773 82.1516 31.6471 83.2453 31.3867C84.3521 31.1133 85.4914 30.7161 86.6633 30.1953V33.9258C85.5826 34.4336 84.4823 34.8047 83.3625 35.0391C82.2427 35.2734 80.9016 35.3906 79.3391 35.3906C77.2167 35.3906 75.3482 34.9805 73.7336 34.1602C72.132 33.3268 70.8755 32.0898 69.9641 30.4492C69.0656 28.8086 68.6164 26.7708 68.6164 24.3359C68.6164 21.9141 69.0266 19.8568 69.8469 18.1641C70.6672 16.4714 71.8195 15.1823 73.3039 14.2969C74.7883 13.4115 76.5201 12.9688 78.4992 12.9688ZM78.4992 16.4258C77.0539 16.4258 75.882 16.8945 74.9836 17.832C74.0982 18.7695 73.5773 20.1432 73.4211 21.9531H83.2648C83.2518 20.8724 83.0695 19.9154 82.718 19.082C82.3794 18.2487 81.8586 17.5977 81.1555 17.1289C80.4654 16.6602 79.5799 16.4258 78.4992 16.4258Z"
            fill="white"
          />
          <path
            d="M100.18 31.6797C100.779 31.6797 101.371 31.6276 101.957 31.5234C102.543 31.4062 103.077 31.2695 103.559 31.1133V34.5898C103.051 34.8112 102.393 35 101.586 35.1562C100.779 35.3125 99.9388 35.3906 99.0664 35.3906C97.8424 35.3906 96.7422 35.1888 95.7656 34.7852C94.7891 34.3685 94.0143 33.6589 93.4414 32.6562C92.8685 31.6536 92.582 30.2669 92.582 28.4961V16.875H89.6328V14.8242L92.7969 13.2031L94.3008 8.57422H97.1914V13.3789H103.383V16.875H97.1914V28.4375C97.1914 29.5312 97.4648 30.3451 98.0117 30.8789C98.5586 31.4128 99.2812 31.6797 100.18 31.6797Z"
            fill="white"
          />
          <path
            d="M115.766 12.9688C117.693 12.9688 119.347 13.3659 120.727 14.1602C122.108 14.9544 123.169 16.0807 123.911 17.5391C124.653 18.9974 125.024 20.7422 125.024 22.7734V25.2344H110.591C110.643 27.3307 111.203 28.9453 112.27 30.0781C113.351 31.2109 114.861 31.7773 116.802 31.7773C118.182 31.7773 119.419 31.6471 120.512 31.3867C121.619 31.1133 122.759 30.7161 123.93 30.1953V33.9258C122.85 34.4336 121.749 34.8047 120.63 35.0391C119.51 35.2734 118.169 35.3906 116.606 35.3906C114.484 35.3906 112.615 34.9805 111.001 34.1602C109.399 33.3268 108.143 32.0898 107.231 30.4492C106.333 28.8086 105.884 26.7708 105.884 24.3359C105.884 21.9141 106.294 19.8568 107.114 18.1641C107.934 16.4714 109.087 15.1823 110.571 14.2969C112.055 13.4115 113.787 12.9688 115.766 12.9688ZM115.766 16.4258C114.321 16.4258 113.149 16.8945 112.251 17.832C111.365 18.7695 110.845 20.1432 110.688 21.9531H120.532C120.519 20.8724 120.337 19.9154 119.985 19.082C119.647 18.2487 119.126 17.5977 118.423 17.1289C117.733 16.6602 116.847 16.4258 115.766 16.4258Z"
            fill="white"
          />
        </svg>
      </Box>
      <Divider
        w={"90%"}
        h={"1px"}
        backgroundColor={"#999"}
        margin={"auto"}
        mt={"80px"}
        display={{ base: "none", md: "block" }}
      />
      <Box
        w={"90%"}
        py={4}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "left", md: "space-between" }}
        alignItems={{ base: "left", md: "center" }}
        margin={"auto"}
      >
        <Stack
          direction={"row"}
          spacing={14}
          color={"#EBEBEB"}
          order={{ base: 2, md: 1 }}
          py={{ base: "30px" }}
        >
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>

        <Box
          display={"flex"}
          px={"5px"}
          zIndex={{ base: "1", md: "0" }}
          order={{ base: 1, md: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              fill="#EBEBEB"
            />
            <path
              d="M13.4375 2.1875H6.5625C5.40218 2.1875 4.28938 2.64844 3.46891 3.46891C2.64844 4.28938 2.1875 5.40218 2.1875 6.5625V13.4375C2.1875 14.5978 2.64844 15.7106 3.46891 16.5311C4.28938 17.3516 5.40218 17.8125 6.5625 17.8125H13.4375C14.5978 17.8125 15.7106 17.3516 16.5311 16.5311C17.3516 15.7106 17.8125 14.5978 17.8125 13.4375V6.5625C17.8125 5.40218 17.3516 4.28938 16.5311 3.46891C15.7106 2.64844 14.5978 2.1875 13.4375 2.1875ZM10 13.75C9.25832 13.75 8.5333 13.5301 7.91661 13.118C7.29993 12.706 6.81928 12.1203 6.53545 11.4351C6.25162 10.7498 6.17736 9.99584 6.32206 9.26841C6.46675 8.54098 6.8239 7.8728 7.34835 7.34835C7.8728 6.8239 8.54098 6.46675 9.26841 6.32206C9.99584 6.17736 10.7498 6.25162 11.4351 6.53545C12.1203 6.81928 12.706 7.29993 13.118 7.91661C13.5301 8.5333 13.75 9.25832 13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75ZM14.0625 6.875C13.8771 6.875 13.6958 6.82002 13.5417 6.717C13.3875 6.61399 13.2673 6.46757 13.1964 6.29627C13.1254 6.12496 13.1068 5.93646 13.143 5.7546C13.1792 5.57275 13.2685 5.4057 13.3996 5.27459C13.5307 5.14348 13.6977 5.05419 13.8796 5.01801C14.0615 4.98184 14.25 5.00041 14.4213 5.07136C14.5926 5.14232 14.739 5.26248 14.842 5.41665C14.945 5.57082 15 5.75208 15 5.9375C15 6.18614 14.9012 6.4246 14.7254 6.60041C14.5496 6.77623 14.3111 6.875 14.0625 6.875Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.125 9.99997C18.121 11.985 17.3925 13.9004 16.0763 15.3863C14.76 16.8723 12.9466 17.8267 10.9766 18.0703C10.9326 18.0746 10.8882 18.0698 10.8462 18.0561C10.8042 18.0425 10.7655 18.0203 10.7325 17.9909C10.6994 17.9616 10.6729 17.9257 10.6544 17.8856C10.6359 17.8455 10.6259 17.8019 10.625 17.7578V11.875H12.5C12.5855 11.8751 12.6701 11.8578 12.7486 11.8239C12.8271 11.7901 12.8978 11.7406 12.9564 11.6783C13.0149 11.6161 13.0601 11.5425 13.0891 11.4621C13.1181 11.3817 13.1304 11.2962 13.125 11.2109C13.1112 11.0493 13.0366 10.8989 12.9162 10.7902C12.7959 10.6814 12.6388 10.6224 12.4766 10.625H10.625V8.74997C10.625 8.41845 10.7567 8.1005 10.9911 7.86608C11.2256 7.63166 11.5435 7.49997 11.875 7.49997H13.125C13.2105 7.50013 13.2951 7.48277 13.3736 7.44895C13.4521 7.41512 13.5228 7.36556 13.5814 7.30332C13.6399 7.24108 13.6851 7.16749 13.7141 7.08709C13.7431 7.0067 13.7554 6.92121 13.75 6.83591C13.7362 6.67429 13.6616 6.52394 13.5412 6.41519C13.4209 6.30645 13.2638 6.2474 13.1016 6.24997H11.875C11.212 6.24997 10.5761 6.51336 10.1073 6.9822C9.63841 7.45104 9.37502 8.08693 9.37502 8.74997V10.625H7.50002C7.41455 10.6248 7.32995 10.6422 7.25146 10.676C7.17297 10.7098 7.10225 10.7594 7.04367 10.8216C6.98509 10.8839 6.9399 10.9574 6.91089 11.0378C6.88189 11.1182 6.86967 11.2037 6.87502 11.289C6.88884 11.4506 6.96346 11.601 7.08381 11.7097C7.20415 11.8185 7.36127 11.8775 7.52345 11.875H9.37502V17.7578C9.37524 17.8016 9.36624 17.8449 9.34862 17.8851C9.331 17.9252 9.30514 17.9611 9.27273 17.9906C9.24032 18.02 9.20207 18.0424 9.16047 18.0561C9.11887 18.0698 9.07485 18.0747 9.03127 18.0703C4.90627 17.5703 1.71877 13.9843 1.88283 9.69528C1.97493 7.57714 2.89131 5.5789 4.43637 4.12708C5.98143 2.67526 8.03278 1.88488 10.1525 1.92465C12.2723 1.96441 14.2926 2.83117 15.7821 4.33992C17.2716 5.84866 18.1124 7.87986 18.125 9.99997Z"
              fill="#EBEBEB"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.1953 6.07026L16.836 8.42183C16.3672 13.8828 11.7578 18.125 6.25002 18.125C5.11721 18.125 4.17971 17.9453 3.46878 17.5937C2.89846 17.3046 2.66409 17 2.60159 16.9062C2.54988 16.8277 2.51655 16.7385 2.50411 16.6453C2.49166 16.552 2.5004 16.4572 2.52969 16.3679C2.55897 16.2785 2.60805 16.1969 2.67325 16.1291C2.73845 16.0614 2.81811 16.0092 2.90628 15.9765C2.9219 15.9687 4.76565 15.2656 5.96096 13.914C5.21967 13.3862 4.56811 12.7426 4.03127 12.0078C2.96096 10.5546 1.82815 8.0312 2.50784 4.26558C2.5292 4.15363 2.58041 4.04953 2.65604 3.96427C2.73167 3.87901 2.82892 3.81576 2.93752 3.7812C3.04647 3.74553 3.16313 3.74051 3.27475 3.76669C3.38636 3.79287 3.48862 3.84924 3.57034 3.92964C3.59378 3.96089 6.19534 6.52339 9.37502 7.35151V6.87495C9.37809 6.37941 9.47874 5.88933 9.67121 5.43269C9.86368 4.97605 10.1442 4.56179 10.4968 4.21357C10.8494 3.86535 11.2671 3.58998 11.7261 3.4032C12.1851 3.21641 12.6764 3.12186 13.1719 3.12495C13.8223 3.13423 14.4592 3.31181 15.0205 3.6404C15.5819 3.969 16.0485 4.43739 16.375 4.99995H18.75C18.8734 4.99957 18.9942 5.03571 19.097 5.10384C19.1999 5.17196 19.2803 5.26901 19.3281 5.38276C19.3732 5.49821 19.3846 5.62404 19.3611 5.74571C19.3376 5.86737 19.2801 5.9799 19.1953 6.07026Z"
              fill="#EBEBEB"
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;