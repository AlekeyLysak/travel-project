import {Typography, Grid  } from "@mui/material"
import PopularTopicsItem from "./PopularTopicsItem"
import cardsArray from 'utils/cardsArray';

type Props = {}

type CardProps = {
   title: string
   date: string
   description: string
}

const PopularTopics = (props: Props) => {
  return (
     <>
        <Typography className="topics__title"
           variant="h5" align="left" component='h2'>Popular topics
        </Typography>

        <Grid container spacing={6} rowSpacing={4}>
           {
              cardsArray.map((product: CardProps) => (
               <Grid item xs={12} sm={6} md={4}>
                    <PopularTopicsItem
                       title={product.title}
                       date={product.date}
                       description={product.description} />
            </Grid>
              ))
           }
         </Grid>
      </>
  )
}
export default PopularTopics