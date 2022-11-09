import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    Link,
    Tooltip
} from '@chakra-ui/react'
import endPoints from '../../services/api'
import useFetch from '../../hooks/useFetch'
import { Chart } from '../../components/Chart'
import { CloseIcon } from '@chakra-ui/icons'

const PRODUCT_LIMIT = 10;
const PRODUCT_OFFSET = 10;

export default function Dashboard() {
    const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));

    const categoryNames = products?.map((product) => product.category);
    const categoryCount = categoryNames?.map((category) => category.name);

    const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

    const data = {
        datasets: [
            {
                label: 'Categories',
                data: countOccurrences(categoryCount),
                borderWidth: 2,
                backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
            },
        ],
    };

    return (
        <>
            <Chart chartData={data} />
            <TableContainer p={2}
                mt={10}>
                <Table variant='simple' size='sm'
                >
                    <TableCaption>Click sobre la foto para editar </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Foto</Th>
                            <Th>Category</Th>
                            <Th>Price</Th>
                            <Th>Del</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products?.map((product) => (
                            <Tr key={`Product-item-${product.id}`}>
                                <Td >
                                    <div>
                                        <div>
                                            <Link href="/edit">
                                                <Tooltip
                                                    label={product.title}
                                                    bg="white"
                                                    placement={'top'}
                                                    color={'gray.800'}
                                                    fontSize={'1.2em'}>
                                                    <Image borderRadius='full'
                                                        boxSize='50px' src={product.images[0]} alt=""
                                                    />

                                                </Tooltip>
                                            </Link>
                                        </div>
                                    </div>
                                </Td>
                                <Td>
                                    <div>{product.category.name}</div>
                                </Td>
                                <Td >
                                    <span>${product.price}</span>
                                </Td>
                                <Td >

                                    <Link href="/">
                                        <CloseIcon />
                                    </Link>
                                </Td>
                            </Tr>
                        ))}

                    </Tbody>
                </Table>

            </TableContainer>

        </>
    );
}