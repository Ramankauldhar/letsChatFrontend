import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";

const Signup = () => {
  const [displayName, setDisplayName] = useState(false);
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  const [profilePic, setProfilePic] = useState();
  const [showPswd, setShowPswd] = useState();
  const handleClick = () => setShowPswd(!showPswd);
  const postInfo = (photo) => {};
  const submitHandler = () => {};

  return (
    <VStack spacing="10px" color="black">
      <FormControl id="displayName" isRequired>
        <FormLabel color="blue">Display Name: </FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </FormControl>
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
      <FormControl id="displayName" isRequired>
        <FormLabel color="blue">Profile Picture: </FormLabel>
        <Input
          type="file"
          p="1"
          accept="image/*"
          onChange={(e) => postInfo(e.target.files[0])}
        />
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

export default Signup;
