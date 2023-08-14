import { useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import data from "./data.json";
import VideoPlayer from "../VideoPlayer";
import styles from "./Accordion.module.css";

function Course({ changeVideo }) {
  const [courseData, setCourseData] = useState(data);

  return (
    <div className={styles.courses}>
      <div className={styles.courseaccordion}>
        {" "}
        <Accordion allowMultiple minWidth={100}>
          {courseData.map((item) => (
            <AccordionItem key={item.name}>
              <h2>
                <AccordionButton>
                  <Box flex="3" minWidth={200} w={260} textAlign="left">
                    {item.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>{item.description}</Text>
                <Accordion allowMultiple>
                  {item.topics.map((topic) => (
                    <AccordionItem key={topic.name}>
                      <h3>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {topic.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4}>
                        <Text>{topic.description}</Text>
                        <VStack align="flex-start" spacing={4} mt={4}>
                          {topic.classes.map((lesson) => (
                            <Box key={lesson.title}>
                              <Button
                                colorScheme="teal"
                                onClick={() => changeVideo(lesson.video_url)}
                              >
                                {lesson.title}
                              </Button>
                              <Text>{lesson.description}</Text>
                            </Box>
                          ))}
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Course;
