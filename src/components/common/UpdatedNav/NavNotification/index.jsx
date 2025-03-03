import React from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";

const Index = ({ badgeCount }) => {

    const Styles = {
        notificationContainer: { position: 'relative' },
        badgeContainer: { position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', top: 0, right: 0, width: '0.95rem', height: '0.95rem', borderRadius: '50%', backgroundColor: 'red', color: '#fff', fontSize: '0.7rem', fontWeight: '700' }
    }

    return (
        <div style={Styles.notificationContainer}>
            <IoMdNotificationsOutline color='#fff' size={28} />
            <span style={Styles.badgeContainer}>{badgeCount}</span>
        </div>
    )
}

export default Index;