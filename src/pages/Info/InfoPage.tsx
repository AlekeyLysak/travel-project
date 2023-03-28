import { useParams } from 'react-router-dom'
import cardsArray, { getProductsObject, Cart  } from 'utils/cardsArray'

type Props = {
    productsObject?: {
        [id: number]:Cart
    }
}

const InfoPage = ({
    productsObject = getProductsObject (cardsArray),
}: Props) => {
    const { id } = useParams()
      return<div>{productsObject[parseInt(id!)].title}</div>
}

export default InfoPage
