import { Typography, Grid } from '@mui/material'
import PopularTopicsItem from './PopularTopicsItem'
import cardsArray from 'utils/cardsArray'

type Props = {}

const PopularTopics = (props: Props) => {
    return (
        <>
            <Typography
                className="topics__title"
                variant="h5"
                align="left"
                component="h2"
            >
                Popular topics
            </Typography>

            <Grid container spacing={6} rowSpacing={4}>
                {cardsArray.map(({ id, title, date, description, image }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <PopularTopicsItem
                            title={title}
                            date={date}
                            description={description}
                            image={image}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default PopularTopics
