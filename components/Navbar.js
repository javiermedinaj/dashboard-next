import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Stack,

} from "@chakra-ui/react"
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
// import { useAuth } from '../hooks/useAuth'

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    // const auth = useAuth();

    // const userData = {
    //     name: auth?.user?.name,
    //     email: auth?.user?.email,
    //     imageUrl: `https://ui-avatars.com/api/?name=?{auth?.user?.name}`,
    //     role: auth?.user?.role
    // }

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Button ml={50} onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    <HStack spacing={8} alignItems={"center"}>

                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            <Link href="/"> Inicio</Link>
                            <Link href="/login">Login</Link>
                            <Link href="/dashboard"> Dashboard</Link>
                            <Link href="/about"> About</Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    size={"sm"}
                                    src="images/dashboard.jpg"
                                />

                            </MenuButton>
                            <MenuList>

                                {/* <MenuItem>{userData.name}</MenuItem>
                                <MenuItem>{userData.email}</MenuItem>
                                <MenuItem>{userData.role}</MenuItem>
                                <MenuDivider /> */}
                                <MenuItem>
                                    <Link href="/">Salir</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            <Link href="/"> Inicio</Link>
                            <Link href="/login">Login</Link>
                            <Link href="/dashboard"> Dashboard</Link>
                            <Link href="/about"> About</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>


        </>
    )
}
