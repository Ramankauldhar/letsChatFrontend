import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pswd, setPswd] = useState();
  const [profilePic, setProfilePic] = useState();
  const [showPswd, setShowPswd] = useState();
  const toast = useToast();

  const showText = () => setShowPswd(!showPswd);
  const postInfo = (photo) => {
    if (photo === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (
      photo.type === "image/jpeg" ||
      photo.type === "image/jpg" ||
      photo.type === "image/png"
    ) {
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("upload_preset", "letschat");
      formData.append("cloud_name", "dh10myezw");
      fetch("https://api.cloudinary.com/v1_1/dh10myezw/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((formData) => {
          setProfilePic(formData.url.toString());
          console.log(formData.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };
  const submitButton = async () => {
    if (!name || !email || !pswd) {
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
        "/user",
        {
          name,
          email,
          pswd,
          profilePic,
        },
        connect
      );
      toast({
        title: "You are Sign Up successfully!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userDetails", JSON.stringify(data));
    } catch (error) {
      toast({
        title: "User already exist!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <VStack spacing="10px" color="black">
      <FormControl id="name" isRequired>
        <FormLabel color="blue">Display Name: </FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
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
            <Button h="1.5rem" size="sm" onClick={showText}>
              {showPswd ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel color="blue">Profile Picture: </FormLabel>
        <Input
          type="file"
          p="1"
          accept="image/*"
          onChange={(e) => postInfo(e.target.files[0])}
        />
      </FormControl>
      <Button bg="lightGrey" color="blue" border="1px" onClick={submitButton}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
