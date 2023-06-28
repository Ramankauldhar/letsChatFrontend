import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  const [showPswd, setShowPswd] = useState();
  const toast = useToast();

  const showText = () => setShowPswd(!showPswd);
  const submitButton = async () => {
    if (!email || !pswd) {
      toast({
        title: "* All Fields are required",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      const connect = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/user/login",
        {
          email,
          pswd,
        },
        connect
      );
      toast({
        title: "You are Sign In successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userDetails", JSON.stringify(data));
    } catch (error) {
      toast({
        title: "Email/Password is wrong!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <VStack spacing="10px" color="black">
      <FormControl id="email1" isRequired>
        <FormLabel color="blue">Email: </FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="pswd1" isRequired>
        <FormLabel color="blue">Password: </FormLabel>
        <InputGroup>
          <Input
            type={showPswd ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPswd(e.target.value)}
          />
          <InputRightElement width="75px">
            <Button h="1.5rem" size="sm" onClick={showText}>
              {showPswd ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button bg="lightGrey" color="blue" border="1px" onClick={submitButton}>
        Sign In
      </Button>
    </VStack>
  );
};

export default Signin;
