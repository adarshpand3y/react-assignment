import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import NewsItem from './NewsItem';

const News = (props) => {
    const [newsArray, setNewsArray] = useState([]);
    const navigate = useNavigate();
    const handleFetchNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setNewsArray(parsedData.articles);
    }

    useEffect(() => {
        if(props.isLoggedIn) {
            handleFetchNews();
        }
        else {
            navigate("/login");
        }
    }, []);

    useEffect(()=> {
        if(props.isLoggedIn===false) {
            navigate("/login");
        }
    }, [props.isLoggedIn]);
    
  return (
    <div className="container">
        <h1 className="text-center">Showing Latest News</h1>
        {
            newsArray.map((element) => {
                return <NewsItem description={element.description}
                title={element.title}
                key={element.url + Math.random()}
                urlToImage={element.urlToImage}
                url={element.url}
                source={element.source}
                date={element.publishedAt}
                />
            })
        }
    </div>
  )
}

export default News