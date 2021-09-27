import React, { useState, useEffect } from 'react';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import SignUp from '../components/signUp/SignUp';
import classes from '../default/Default.module.css';
import { db } from '../fire';
import { useStateValue } from '../StateProvider';
import SignIn from '../components/signIn/SignIn';

const Default = () => {
    const [user] = useStateValue(null);
    const [videos, setVideos] = useState([]);
    const [hasAccount, setHasAccount] = useState(false);

    useEffect(() => {
        db.collection("videos").onSnapshot((snapshot) =>
            setVideos(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])

    const handleLogin = () => {
        setHasAccount(current => !current)
    }

    const handleSignIn = () => {
        setHasAccount(current => !current)
    }

    return (
        <div className={classes.default}>
            {user.user ?
                <>
                    <Header />
                    {videos.map(
                        ({ page, description, music, likes, comments, shares, url }) => (
                            <Banner
                                page={page}
                                description={description}
                                music={music}
                                likes={likes}
                                comments={comments}
                                shares={shares}
                                url={url}
                            />
                        )
                    )}
                </>
                :
                <>

                    {
                        !hasAccount ?
                            <SignUp handleLogin={handleLogin} />
                            :
                            <SignIn handleSignIn={handleSignIn} />
                    }
                </>
            }
        </div>
    )
}

export default Default;