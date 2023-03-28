import './ArticleContent.scss'
import cardsArray from '../../utils/cardsArray'
import ArticleListItem from './ArticleListItem'
import { useParams } from 'react-router-dom'

type Props = {}

const ArticleContent = (props: Props) => {
  const { id } = useParams();
const articleId = id ? parseInt(id) : undefined;
    const article = cardsArray.find((x) => x.id === articleId)

    return (
        <>
            {article && (
                <ArticleListItem
                    id={article.id}
                    image={article.image}
                    article={article.article}
                    title={article.title}
                    description={article.description}
                    category={article.category}
                    date={article.date}
                    picture={article.picture}
                    desc={article.desc}
                />
            )}
        </>
    )
}

export default ArticleContent
