import React from 'react';
import { useState } from 'react';
import LogoImage from './MediaLogo/index';
import logo from '../../../assets/updatedLogo.png';
import CategoriesDropDown from './Categories/index';
import ShowCategories from './Categories/showCategories/index';
import SearchBar from './SearchBar/index';
import NotificationBadge from './NavNotification/index';
import ProfileMenuIcon from './Profile/index';

const Index = () => {

    const [showCategories, setShowCategories] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    }

    const Styles = {
        headerContainer: { position: 'sticky', left: 0, top: 0, zIndex: 99, boxShadow: '0.1rem 0.2rem 0.8rem #232323' },
        navBarContainer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: '#232323' },
        leftNavContainer: { display: 'flex', alignItems: 'center', gap: '4rem', position: 'relative' },
        xPriceLogoContainer: { paddingLeft: '3.5rem' },
        rightNavContainer: { display: 'flex', gap: '1.5rem', alignItems: 'center', width: '45%', paddingRight: '3rem' },
    }

    return (
        <header style={Styles.headerContainer}>
            <nav>
                <section style={Styles.navBarContainer}>
                    <div className='left-container' style={Styles.leftNavContainer}>
                        <div style={Styles.xPriceLogoContainer}>
                            <LogoImage logoName={logo} width={5} height={3} />
                        </div>
                        <CategoriesDropDown toogleOption={toggleCategories} showCategories={showCategories} />

                    </div>
                    <div style={Styles.rightNavContainer}>
                        <SearchBar watermark='Search Items' />
                        <NotificationBadge badgeCount={4} />
                        <ProfileMenuIcon width={40} />
                    </div>
                </section>
                <ShowCategories showCategories={showCategories} />
            </nav>
        </header>
    )
}

export default Index;