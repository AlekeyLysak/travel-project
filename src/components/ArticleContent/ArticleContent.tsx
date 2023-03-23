import { Typography } from '@mui/material'
import './ArticleContent.scss'


type Props = {
    id: number
    image: string
    title: string
    description: string
    category: string
}

const ArticleContent = ({category}: Props) => {
    return (
        <>
            <Typography
                className="category"
                sx={{
                    backgroundColor: 'blue',
                    width: '880px',
                    height: '27px',
                    marginRight: '20px',
                    borderRadius: '7px',
                }}
            >
                {category}
            </Typography>
        </>
    )
}

export default ArticleContent
