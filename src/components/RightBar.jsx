import React from 'react'
import  Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const RightBar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
            <Box position="fixed" >
              <Typography fontWeight="100"> Online Friends</Typography>
              <AvatarGroup max={4}>
      <Avatar alt="guddu" src="/static/images/avatar/1.jpg" />
      <Avatar alt="shubham" src="/static/images/avatar/2.jpg" />
      <Avatar alt="baghad" src="/static/images/avatar/3.jpg" />
      <Avatar alt="akki" src="/static/images/avatar/4.jpg" />
      <Avatar alt="kannu" src="/static/images/avatar/5.jpg" />
      <Avatar alt="jonny" src="/static/images/avatar/5.jpg" />
      <Avatar alt="annu" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
        <Typography variant='h6' fontWeight={100}> Latest Post </Typography>

            </Box>
        </Box>
    )
}

export default RightBar