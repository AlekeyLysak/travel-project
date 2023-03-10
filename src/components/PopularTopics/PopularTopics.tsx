import {Typography, Grid  } from "@mui/material"
import PopularTopicsItem from "./PopularTopicsItem"


type Props = {}

const PopularTopics = (props: Props) => {
  return (
     <>
        <Typography className="topics__title"
           variant="h5" align="left" component='h2'>Popular topics
        </Typography>

        <Grid container spacing={6} rowSpacing={4}>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021" description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Taj Mahal, India" date="22.04.2019" description="The Taj Mahal is a mausoleum located in Agra, India. It was commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal, who died in 1631. The construction of the Taj Mahal began in 1632 and was completed in 1653. It is widely considered to be one of the most beautiful buildings in the world and is recognized as a UNESCO World Heritage Site. The Taj Mahal is also a symbol of India's rich history and cultural heritage, and is a popular destination for tourists from around the world."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="The Great Pyramid of Giza, Egypt" date="10.09.2020"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Navagio Beach, Greece" date="26.05.2023"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Great Wall of China" date="03.06.2017"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Grand Canyon, USA" date="14.06.2015"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Angel Falls, Valenzuela" date="22.04.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada." />
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
           <Grid item xs={12} sm={6} md={4}>
              <PopularTopicsItem title="Moraine lake, Canada" date="08.08.2021"description="Moraine Lake is a glacially-fed lake located in Banff National Park in Alberta, Canada. It is known for its crystal clear turquoise blue water and stunning mountain backdrop, and is one of the most photographed lakes in Canada."/>
           </Grid>
        </Grid>
      </>
  )
}
export default PopularTopics