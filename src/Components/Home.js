import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Signin from "./Signin";
import Signup from "./Signup";

const Home = () => {
  return (
    <Container maxW="x1" centerContent>
      <Box
        color="blue"
        bg={"white"}
        d="flex"
        justifyContent="center"
        textAlign="center"
        fontSize="25px"
        p={2}
        w="50%"
        m="10px"
        borderRadius="10px"
      >
        <Text>Let's Chat</Text>
      </Box>
      <Box
        bg={"white"}
        min-height="400px"
        fontSize="25px"
        p={2}
        w="50%"
        m="10px"
        borderRadius="5px"
        color="blue"
      >
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Sign In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signin />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
