import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { PUBLIC_URL } from "../App";

export const Index = () => {
  const [odai, setOdai] = useState("");
  const [sentakusiList, setSentakusiList] = useState<string[]>([]);
  const [dobon, setDobon] = useState(0);

  const generate = () => {
    const rand = Math.floor(Math.random() * 100000000);
    const data = new URLSearchParams({
      odai,
      sentakusis: sentakusiList.join(","),
      dobon: (rand * 387 + dobon).toString(),
    }).toString();
    window.open(`${PUBLIC_URL}play?${data}`, "_blank");
  };

  return (
    <Center bg="background" minH="100vh" flexDir="column" color="white">
      <VStack spacing="2rem">
        <Heading>Dovon quiz generator</Heading>
        <Input
          size="lg"
          placeholder="お題"
          w="400px"
          value={odai}
          onChange={(e) => setOdai(e.target.value)}
        />
        <HStack w="400px" spacing="20px">
          <Text fontSize="1rem" flexShrink={0}>
            ドボン
          </Text>
          <Select
            bg="white"
            color="#333"
            value={dobon}
            onChange={(e) => setDobon(Number.parseInt(e.target.value))}
          >
            {sentakusiList.map((sentakusi, i) => {
              return (
                <option value={i} key={i}>
                  {sentakusi}
                </option>
              );
            })}
          </Select>
        </HStack>
        <Center flexWrap="wrap" w="80vw">
          {sentakusiList.map((sentakusi, i) => {
            return (
              <Center border="solid 1px #555" key={i} w="200px" h="200px">
                <Input
                  placeholder="選択肢"
                  _placeholder={{
                    color: "#fff3",
                  }}
                  fontSize="3xl"
                  w="full"
                  h="full"
                  value={sentakusi}
                  onChange={(e) =>
                    setSentakusiList((sentakusiList) => [
                      ...sentakusiList.slice(0, i),
                      e.target.value,
                      ...sentakusiList.slice(i + 1),
                    ])
                  }
                />
              </Center>
            );
          })}
          <Center
            border="solid 1px #555"
            w="200px"
            h="200px"
            cursor="pointer"
            onClick={() => {
              setSentakusiList((sentakusiList) => [...sentakusiList, ""]);
            }}
          >
            <Icon
              as={FaPlus}
              w="100px"
              h="100px"
              color="gray.500"
              _hover={{ color: "gray.400" }}
            />
          </Center>
        </Center>
        <Button size="lg" colorScheme="orange" onClick={generate}>
          Generate
        </Button>
      </VStack>
    </Center>
  );
};
