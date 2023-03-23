import { useParams } from 'react-router-dom'
import cardsArray, { getProductsObject, Card  } from 'utils/cardsArray'

type Props = {
    productsObject?: {
        [id: number]:Card
    }
}

const InfoPage = ({
    productsObject = getProductsObject (cardsArray),
}: Props) => {
    const { id } = useParams()
      return<div>{productsObject[parseInt(id!)].title}</div>
}

export default InfoPage
