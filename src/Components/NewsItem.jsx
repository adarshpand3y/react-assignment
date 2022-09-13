import React from 'react'

const NewsItem = (props) => {
    return (
        <div className={`w-100 card my-4 border border-secondary rounded`} style={{ padding: "10px"}}>
            <div className="row">
                <div className="col-4">
                    <img src={props.urlToImage} style={{ height: "100%", width: "100%", objectFit: "cover", border: "1px solid #dfdfdf" }} className="card-img-top" alt="Img Unavailable" />
                </div>
                <div className="col-8">
                    <h4>{props.title}</h4>
                    <span className={`badge rounded-pill bg-primary`}>{props.source["name"]}</span>
                    <p className="card-text">{props.description === null ? "No Description Available" : props.description}</p>
                    <p className="card-text"><small className="text-muted">{new Date(props.date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} IST</small></p>
                    <a href={props.url} target="_blank" rel="noreferrer" className={`btn btn-primary`}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem