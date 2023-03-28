import {
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Button,
} from '@mui/material'
import { useState } from 'react'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = []

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setNewReview({
                name: '',
                text: '',
            })

            setReviews((prevState) => {
                return [...prevState, newReview]
            })
        }
    }

    return (
        <>
            <div>
                {reviews.map((item, i) => (
                    <Card
                        variant="outlined"
                        sx={{
                            margin: '15px 0',
                        }}
                        key={i}
                    >
                        <CardContent>
                            <div>{item.name}:</div>
                            <div>{item.text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={onSend}>
                <h4 className="comment-title">Please leave a review</h4>
                <div>
                    <TextField
                        label="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Text"
                        value={newReview.text}
                        style={{ width: 600 }}
                        minRows={5}
                        onChange={handleText}
                    />
                </div>
                <Button variant="contained" type="submit" className="btn-send">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
