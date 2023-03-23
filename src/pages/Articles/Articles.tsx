import ArticleContent from "components/ArticleContent/ArticleContent"
import articlesArray from "utils/articlesArray"


type Props = {
  cardOfArticles:string
}

const Articles = ({cardOfArticles}: Props) => {
    return (
       <>
        {articlesArray.map(({id, image, title, description, category}) =>
          cardOfArticles === title ? (
            <ArticleContent id={id} image={image} title={title} description={description} category={category}/>
          ) : null
        )}
       </>
    )
}

export default Articles
