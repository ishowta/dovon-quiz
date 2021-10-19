import {
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsCircle } from "react-icons/bs";
import { useHistory, useLocation } from "react-router";
import { TwitterIcon, TwitterShareButton } from "react-share";
import { useQuery } from "../App";

export const Play = () => {
  const history = useHistory();
  const query = useQuery();

  const odai = query.get("odai")!;
  const sentakusiList = query.get("sentakusis")!.split(",");
  const [sentakusiClickedList, setSentakusiClickedList] = useState(
    Array(sentakusiList.length).fill(false)
  );
  const dobon = Number.parseInt(query.get("dobon")!) % 387;

  console.log(sentakusiClickedList);

  const click = (i: number) => {
    console.log(i);
    setSentakusiClickedList((sentakusiClickedList) => [
      ...sentakusiClickedList.slice(0, i),
      !sentakusiClickedList[i],
      ...sentakusiClickedList.slice(i + 1),
    ]);
  };

  return (
    <Center bg="background" minH="100vh" flexDir="column" color="white">
      <VStack spacing="1rem">
        <Heading color="#fff3">Dovon quiz generator</Heading>
        <Heading>{odai}</Heading>
        <Center flexWrap="wrap" w="80vw">
          {sentakusiList.map((sentakusi, i) => {
            return (
              <>
                <Center
                  border="solid 1px #555"
                  key={i}
                  w="200px"
                  h="200px"
                  _hover={{
                    bg: "gray.800",
                  }}
                  cursor="pointer"
                  onClick={() => click(i)}
                >
                  <Text fontSize="3xl">{sentakusi}</Text>
                  {sentakusiClickedList[i] && (
                    <>
                      {i === dobon ? (
                        <Icon
                          opacity={0.8}
                          color="blue.500"
                          as={ImCross}
                          pos="absolute"
                          w="150px"
                          h="150px"
                        />
                      ) : (
                        <Icon
                          opacity={0.8}
                          color="red.500"
                          as={BsCircle}
                          pos="absolute"
                          w="150px"
                          h="150px"
                        />
                      )}
                    </>
                  )}
                </Center>
              </>
            );
          })}
        </Center>
        <TwitterShareButton url={location.href} title={odai}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <Button
          variant="link"
          size="lg"
          colorScheme="orange"
          onClick={() => history.push("/")}
        >
          Create new dovon quiz
        </Button>
      </VStack>
    </Center>
  );
};
