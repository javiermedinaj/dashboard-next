import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Link
} from "@chakra-ui/react"


export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/javiermedinaj')
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }

}


export default function About({ user }) {
    return (
        <Center py={6}>
            <Box
                maxW={"270px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
            >
                <Image
                    h={"120px"}
                    w={"full"}
                    src={
                        "images/code.jpg"
                    }
                    objectFit={"cover"}
                />
                <Flex justify={"center"} mt={-12}>
                    <Avatar
                        size={"xl"}
                        src={user.avatar_url}
                        alt={"Author"}
                        css={{
                            border: "2px solid white"
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={"center"} mb={5}>
                        <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                            {user.name}
                        </Heading>
                        <Text color={"gray.500"}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={"row"} justify={"center"} spacing={6}>
                        <Stack spacing={0} align={"center"} mb={5}>
                            <Text color={"gray.500"}><Link target="_blank" href={user.blog}> Linkedin</Link></Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={"full"}
                        mt={1}
                        bg={useColorModeValue("#151f21", "gray.900")}
                        color={"white"}
                        rounded={"md"}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "lg"
                        }}
                    >
                        <Link target="_blank" href={user.html_url}>Follow</Link>
                    </Button>
                </Box>
            </Box>
        </Center>
    )
}
