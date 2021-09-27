import React, { useState, useRef } from 'react';
import classes from './Content.module.css';
import { FiMoreHorizontal, FiBookmark, FiSmile } from 'react-icons/fi';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BiPlay } from 'react-icons/bi';
import { AiOutlinePause } from 'react-icons/ai';
import OwlCarousel from '../owl-carousel/OwlCarousel';

const Content = ({ page, description, music, likes, comments, shares, url }) => {

    const [play, setPlay] = useState(false);
    const videoRef = useRef(false);

    const handlePlay = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false)
        } else {
            videoRef.current.play();
            setPlay(true)
        }
    }


    return (
        <>
            <div className={classes.content}>
                <div className={classes.card}>
                    <div className={classes.card__header}>
                        <div className={classes.header__name}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqIFazLfXL8Vz_9bymdgByaDuuWki8NI-4A&usqp=CAU" alt="" />
                            <p>{page}</p>
                        </div>
                        <div className={classes.header__icon}>
                            <FiMoreHorizontal style={{ fontSize: "18px" }} />
                        </div>
                    </div>

                    <div className={classes.card__body} onClick={handlePlay}>
                        {play ?
                            <AiOutlinePause style={{ fontSize: "90px" }} className={classes.playing} /> :
                            <BiPlay style={{ fontSize: "90px" }} className={classes.playing} />
                        }
                        <video
                            className={classes.video__player}
                            loop
                            src={url}
                            ref={videoRef}
                        />
                    </div>
                    <div className={classes.card__footer}>
                        <div className={classes.footer__wrapper}>
                            <div className={classes.footer__head}>
                                <div className={classes.like__icons}>
                                    <FaRegHeart style={{ fontSize: "25px" }} className={classes.icn} />
                                    <FaRegComment style={{ fontSize: "25px" }} className={classes.icons} />
                                    <FiSend style={{ fontSize: "25px" }} className={classes.icn} />
                                </div>
                                <div className={classes.bookmark}>
                                    <FiBookmark style={{ fontSize: "25px" }} />
                                </div>
                            </div>
                            <p className={classes.like}>Like {likes} dogs</p>
                            <p>{description}</p>
                            <div className={classes.comments}>
                                <div className={classes.comment__icon}>
                                    <FiSmile style={{ fontSize: "28px" }} />
                                    <input type="text" placeholder="Comment..." />
                                </div>
                                <div className={classes.comment__post}>
                                    <p>posting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OwlCarousel />
        </>
    )
}

export default Content;