import { Box, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
  const lectureTitle = 'LectureTitle';
  const lectureNumber = 0;

  const lectures = [
    {
      _id: 'dbsadjd',
      title: 'sample',
      description: 'sdks skdskdn dasdsd asdsa',
      video: {
        url: 'asasd',
      },
    },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>

        {/* <Heading m="4" children={`#${lectureNumber + 1} ${lectureTitle}`} /> */}
        <Heading
          m="4"
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />

        <Heading m="4" children="Description" />
        <Text m="4" children={'helooooooooooooo'} />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
    </Grid>
  );
};

export default CoursePage;
