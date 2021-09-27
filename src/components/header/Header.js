import React, { useState } from 'react';
import classes from './Header.module.css';
import { IoIosSearch } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5'
import { MdHome } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { AiOutlinePlusCircle, AiOutlineApi, AiOutlineHeart, AiOutlineSwap } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { VscBookmark } from 'react-icons/vsc';
import firebase from '../../fire';
import { useStateValue } from '../../StateProvider';

const Header = () => {

    const [handProfile, setHandProfile] = useState(false);
    const [user, dispatch] = useStateValue(null);
    console.log(user)

    const handleProfile = () => {
        const profile__card = document.getElementById('profile__card');

        if (!handProfile) {
            profile__card.style.display = 'block';
            setHandProfile(true)
        } else {
            profile__card.style.display = 'none';
            setHandProfile(false)
        }
    }

    const hideSearch = () => {
        const search = document.getElementById('search');
        const search_icon = document.getElementById('search_icon');

        search.classList.add('placeholder')
        search_icon.style.display = 'none';
    }

    const handleSearch = () => {
        const search_icon = document.getElementById('search_icon');
        search_icon.style.display = 'block';
    }

    const handleLogOut = () => {
        firebase.auth().signOut().then((err) => {
            dispatch({
                type: "LOG_OUT",
                user: null
            })
        })
            .catch(function (err) {
                // An error happened.
            });
    }

    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <div className={classes.logo}>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <form className={classes.form}>
                    <div className={classes.header__search}>
                        <IoIosSearch className={classes.search_icon} id="search_icon" />
                        <input type="text" placeholder="Search" className={classes.search} onBlur={handleSearch} onFocus={hideSearch} id="search" />
                    </div>
                </form>
                <div className={classes.header__icons}>
                    <MdHome style={{ fontSize: "30px" }} className={classes.fa__icon} />
                    <RiMessengerLine style={{ fontSize: "27px" }} className={classes.fa__icon} />
                    <AiOutlinePlusCircle style={{ fontSize: "27px" }} className={classes.fa__icon} />
                    <AiOutlineApi style={{ fontSize: "27px" }} className={classes.fa__icon} />
                    <AiOutlineHeart style={{ fontSize: "27px" }} className={classes.fa__icon} />
                    <img onClick={handleProfile} className={classes.avatar__svg} src="data:image/png;base64,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" alt="" />
                    <div className={classes.profile__card} id="profile__card">
                        <div className={classes.profile}>
                            <CgProfile style={{ fontSize: "20px" }} />
                            <p>Profile</p>
                        </div>
                        <div className={classes.saved}>
                            <VscBookmark style={{ fontSize: "20px" }} />
                            <p>Saved</p>
                        </div>
                        <div className={classes.settings}>
                            <IoSettingsOutline style={{ fontSize: "20px" }} />
                            <p>Settings</p>
                        </div>
                        <div className={classes.account}>
                            <AiOutlineSwap style={{ fontSize: "20px" }} />
                            <p>Account Switching</p>
                        </div>
                        <div className={classes.signOut} onClick={handleLogOut}>
                            <p>Sign Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;