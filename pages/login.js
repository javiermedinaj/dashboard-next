import {
    Flex,
    Box,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,

} from '@chakra-ui/react';
import { useRef } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '../hooks/useAuth'


export default function login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = useAuth()
    const router = useRouter()

    const submitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        auth.signIn(email, password).then(() => {
            router.push('/dashboard')
        },
            (reason) => {
                console.log('Error en logeo');
                console.log(reason);
                auth.setError('Nombre de usuario o contraseña invalida')
            })



    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={2} mx={'auto'} py={2} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}
                        mb={10}>Sign in to your account</Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <form onSubmit={submitHandler}>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                id="email"
                                required
                                ref={emailRef}
                            />
                            <FormLabel>Password</FormLabel>
                            <Input type="password"
                                id="password"
                                name="password"
                                autoComplete="on"
                                required
                                ref={passwordRef}
                            />
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'} href="/recovery">Forgot password?</Link>
                                </Stack>
                                <Button
                                    type="submit"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                            {auth.error ? (
                                <Alert status='error'
                                    mt={2}>
                                    <AlertIcon />
                                    <AlertTitle>Error en logearse</AlertTitle>

                                    {auth.error}  </Alert>) : null}
                        </form>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}