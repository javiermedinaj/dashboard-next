import Link from 'next/link'
import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue
} from "@chakra-ui/react"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            target="_blank"
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container as={Stack} maxW={"6xl"} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
                    spacing={8}
                >
                    <Stack spacing={6}>
                        <Box>
                            logo
                        </Box>

                        <Stack direction={"row"} spacing={6}>
                            <SocialButton label={"Twitter"} href={"https://twitter.com/medinajavierj"}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={"LinkedIn"} href={"https://www.linkedin.com/in/javier-medina-783b721a9/"}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={"Instagram"} href={"https://instagram.com/medinajavierj"}>
                                <FaInstagram />
                            </SocialButton>
                            <SocialButton label={"GitHub"} href={"https://github.com/javiermedinaj?tab=repositories"}>
                                <FaGithub />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={"flex-start"}>
                        <ListHeader>About</ListHeader>
                        <Link href={"https://www.linkedin.com/in/javier-medina-783b721a9/"}>Contact</Link>
                        <Link href="https://github.com/javiermedinaj?tab=repositories">My repositories</Link>
                        <Link href="https://github.com/javiermedinaj/next-palta">Repository for this project</Link>
                        <Link href="https://nextjs.org/">Framework</Link>
                        <Link href={"https://chakra-ui.com/getting-started"}> Styles</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
