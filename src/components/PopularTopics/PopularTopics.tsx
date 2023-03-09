import {Typography, Grid  } from "@mui/material"
import PopularTopicsItem from "./PopularTopicsItem"
import './PopularTopics.scss'


type Props = {}
const PopularTopics = (props: Props) => {
  return (
     <>
        <Typography className="topics__title"
           variant="h5" align="left" component='h2'>Popular topics
        </Typography>

        <Grid container spacing={6} rowSpacing={4}>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem />
           </Grid>
        </Grid>
      </>
  )
}
export default PopularTopics