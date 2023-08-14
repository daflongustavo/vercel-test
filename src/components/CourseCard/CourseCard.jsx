import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Divider,
    Text,
    Stack,
    Heading,
    Image,
    ButtonGroup
} from '@chakra-ui/react';
import styles from "./CourseCard.module.css";

const CourseCard = ({ courseTittle, courseDescription, courseImage }) => {
    return (
        <div className={styles.CourseCard}>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={courseImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{courseTittle}</Heading>
                        <Text>
                            {courseDescription}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CourseCard
