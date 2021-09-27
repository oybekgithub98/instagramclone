import React from 'react';
import Content from '../content/Content';
import Sidebar from '../sidebar/Sidebar';
import classes from './Banner.module.css';

const Banner = ({page, description, music, likes, comments, shares, url}) => {
    return (
        <div className={classes.banner}>
            <div className={classes.banner__wrapper}>
                <div className={classes.content}>
                    <Content 
                        page={page}
                        description={description}
                        music={music}
                        likes={likes}
                        comments={comments}
                        shares={shares}
                        url={url}
                    />
                </div>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}

export default Banner
