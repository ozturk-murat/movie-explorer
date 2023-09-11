import React from 'react'
import { Box, Grid, Typography } from "@mui/material";



function MovieInfoCard({title, value, icon}) {
  return (
    <Grid item xs={6} sm={6} md={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #fbc500",
          borderRadius: 2,
          fontSize: "0.250rem",
          justifyContent: "space-around"
        }}
        minHeight={200}
        p={2}
      >
          <Typography variant="subtitle1">
            {title}
          </Typography>
          <Typography
            variant="body2"
          >
            {value}
          </Typography>
        <Box pt={2}>
        {icon}
        </Box>
      </Box>
    </Grid>
  )
}

export default MovieInfoCard