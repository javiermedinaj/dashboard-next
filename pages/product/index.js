import { useState, useEffect } from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
// import Link from 'next/link';
// import FormProduct from '../../components/FormProduct';
import axios from 'axios';
import endPoints from '../../services/api';
// import { deleteProduct } from '../../services/api/products';


export default function Products() {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get(endPoints.products.allProducts);
            setProducts(response.data);
        }
        try {
            getProducts();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            {products?.map((product) => (
                <div key={`Product-item-${product.id}`}>

                    <Center py={12}>
                        <Box
                            role={'group'}
                            p={6}
                            maxW={'330px'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            zIndex={1}>
                            <Box
                                rounded={'lg'}
                                mt={-12}
                                pos={'relative'}
                                height={'230px'}
                                _after={{
                                    transition: 'all .3s ease',
                                    content: '""',
                                    w: 'full',
                                    h: 'full',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    backgroundImage: `url(${product.images})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Image
                                    rounded={'lg'}
                                    height={230}
                                    width={282}
                                    objectFit={'cover'}
                                    src={product.images}
                                />
                            </Box>
                            <Stack pt={10} align={'center'}>
                                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                                    {product.category.name}
                                </Text>
                                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                    {product.title}
                                </Heading>
                                <Stack direction={'row'} align={'center'}>
                                    <Text fontWeight={800} fontSize={'xl'}>
                                        {product.price}
                                    </Text>
                                    {/* <Text textDecoration={'line-through'} color={'gray.600'}>
                                        $199
                                    </Text> */}
                                </Stack>
                            </Stack>
                        </Box>
                    </Center>
                </div>
            ))}
            {/* <FormProduct setOpen={setOpen} /> */}

        </>
    );
}

