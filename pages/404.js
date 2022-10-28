import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'

const error = () => {
    return (
        <><Container
            p={10}>
            <iframe src="https://giphy.com/embed/g01ZnwAUvutuK8GIQn" />
            <Box
                mt={5}
                mb={5}
            >
                <Text> Este sitio todavia no esta listo porfavor regrese a la pagina principal</Text>

            </Box>
        </Container>
        </>
    )
}


export default error