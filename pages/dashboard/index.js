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
} from '@chakra-ui/react'

import endPoints from '../../services/api'
import useFetch from '../../hooks/useFetch'

import { Chart } from '../../components/Chart'

const people = [
    {
        name: 'Jane Cooper',
        title: 'Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }, {
        name: 'Jane Cooper',
        title: 'Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    }, {
        name: 'Jane Cooper',
        title: 'Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
];



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
            <Chart chartData={data}

                mt={10}
            />
            <TableContainer p={2}
                mt={10}>
                <Table variant='simple' size='sm'
                >
                    <TableCaption>Click sobre la foto para editar </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Foto</Th>
                            <Th>Name</Th>
                            {/* <Th>Title</Th> */}
                            <Th> Status</Th>
                            <Th>Role</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {people.map((person, i) => (
                            <Tr key={i}>
                                <Td>

                                    <Link href="/edit">
                                        <Image src={person.image}
                                            borderRadius='full'
                                            boxSize='50px'
                                        >
                                        </Image>
                                    </Link>
                                </Td>
                                <Td>{person.name}</Td>
                                {/* <Td>{person.title}</Td> */}
                                <Td>{person.department}</Td>
                                <Td>{person.role}</Td>

                            </Tr>
                        ))}
                    </Tbody>
                </Table>

            </TableContainer>
        </>
    );
}