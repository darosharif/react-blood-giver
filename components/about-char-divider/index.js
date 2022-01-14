import Image from "next/image";

import Daro from "../../src/images/Daro.jpg";
import Ravyar from "../../src/images/Ravyar.jpg";
import Renwar from "../../src/images/Renwar.jpg";


import { Flex } from "@chakra-ui/layout";
import { Box } from '@chakra-ui/react'

export default function Divider() {
  return (
    <>
      <Flex
        color="white"
        bg="light"
        h="150px"
        pt={5}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Flex
          height="140px"
          flexBasis="60%"
          justifyContent="flex-start"
          pr={{ base: "50px" }}
        >
          <Image src={Daro} alt="charachter in divider section" className = "rounded-full border-8 border-white" />
          Daro Karim <br/> Full stack Developer
        </Flex>
        <Flex
          height="140px"
          justifyContent="flex-end"
          flex="1"
          pr={{ base: "120px" }}
        >
          <Image src={Renwar} alt="charachter in divider section" className = "rounded-full" />
          Renwar Baxtyar<br/> UI/UX Designer
        </Flex>

      </Flex>

      <Flex
        className="justify-center"
        color="white"
        bg="light"
        h="150px"
        pb={5}
        display={{ base: "none", sm: "flex" }}
      >
        <Flex height="140px" flexBasis="30%" justifyContent="flex-center">
          <Image src={Ravyar} alt="charachter in divider section" className = "rounded-full" />
          Ravyar Barzan <br/> Documentation Analysis
        </Flex>
      </Flex>
    </>
  );
}
