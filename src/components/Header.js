import React from 'react';
import '@style/components/Header.scss';

export  function Header({ app }) {
    return (
        <div className="app__header">
            <h3 className="header__title">{ app.name }</h3>
        </div>
    );
}
Header.propTypes = {
    app: PropTypes.object,
};
