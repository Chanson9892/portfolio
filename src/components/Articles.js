import React, {useState, useLayoutEffect, useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Articles = () => {
    const [articles, setArticles] = useState([])

    useLayoutEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        let allArticles = []
        await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chandler-hanson')
        .then(resp => resp.json())
        .then(articles => allArticles = articles.items)
        setArticles(allArticles)
    }

    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return (
        <div >
            {articles.map(article => {
                return(
                    <div data-aos="fade-up">
                        <h3><a href={article.link} target="_blank" rel="noreferrer">{article.title}</a></h3>
                        <img src={article.thumbnail} alt={article.tile} width="500" />
                        <br />
                        <hr />
                    </div>
                )})
        }
        </div>
    )
}

export default Articles