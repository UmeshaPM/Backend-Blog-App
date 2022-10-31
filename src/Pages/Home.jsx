import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const Home = () => {
    const[data, setData] = useState([])
    const fetchData = async () => {
        const responseFromServer = await axios.get("https://nodejs-backend-data.herokuapp.com/api/content");
        setData(responseFromServer.data);
      };
      useEffect(() => {
        fetchData();
      },[]);
    return (
        <div><br /><br />
            <div className="welcomeImages">
                <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg" alt=" " className="welcomeImage" /> &nbsp;&nbsp;&nbsp;
                <img src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg" alt=' ' className="welcomeImage welcomeImage2" />
            </div><br /><br />
            <div className="containsAllArticles">
                <h2>The Best Tourist Place <hr className="hrInHome" /></h2>
                <div className="homePageTechnologySection">
                    {
                        data.filter((data) => data.category === "Tourism").map((data) => (
                            <>
                                <div className="leftSideContentInHome">
                                    <div key={data.id}>
                                        <Link to={`/Tourism/${data.id}`}>
                                            <img src={data.image} alt=' ' className="imageInHomePage" />
                                        </Link>
                                        <div><h3 className="titleLeftSideInHome">{data.title}</h3></div>
                                        <div><p className="descriptionLeftSideInHome">{data.descriptionSmall}</p></div>
                                        <div><p className="categoryLeftSideInHome">{data.category}</p></div>
                                    </div>
                                </div><br />
                            </>
                        ))
                    }
                </div>
                <h2>The Latest Techology Lists <hr className="hrInHome" /></h2>
                <div className="homePageTechnologySection">
                    {
                        data.filter((data) => data.category === "Technology").map((data) => (
                            <>
                                <div className="leftSideContentInHome">
                                    <div key={data.id}>
                                        <Link to={`/Technology/${data.id}`}>
                                            <img src={data.image} alt=' ' className="imageInHomePage" />
                                        </Link>
                                        <div><h3 className="titleLeftSideInHome">{data.title}</h3></div>
                                        <div><p className="descriptionLeftSideInHome">{data.descriptionSmall}</p></div>
                                        <div><p className="categoryLeftSideInHome">{data.category}</p></div>
                                    </div>
                                </div><br />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;