import React from 'react';
import './SettingOfPanel.css';
import UserSettingMenu from '../UserSettingMenu/UserSettingMenu';

const SettingOfPanel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 panelSpace">
            <UserSettingMenu></UserSettingMenu>
                </div>
            </div>
        </div>
    );
};

export default SettingOfPanel;