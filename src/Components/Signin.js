import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  const [showPswd, setShowPswd] = useState();
  const handleClick = () => setShowPswd(!showPswd);
  const submitHandler = () => {};

  return (
    <VStack spacing="10px" color="black">
      <FormControl id="email" isRequired>
        <FormLabel color="blue">Email: </FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="pswd" isRequired>
        <FormLabel color="blue">Password: </FormLabel>
        <InputGroup>
          <Input
            type={showPswd ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPswd(e.target.value)}
          />
          <InputRightElement width="75px">
            <Button h="1.5rem" size="sm" onClick={handleClick}>
              {showPswd ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg="lightGrey"
        color="blue"
        border="1px"
        onClick={{ submitHandler }}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signin;
