const React = require('react');
const PropTypes = require('prop-types');
const classnames = require('classnames');
const NavTabButton = require('./NavTabButton');
const styles = require('./styles');

const VerticalNavBar = React.memo(({ className, detailsMenu, selected, tabs }) => {
    return (
        <nav className={classnames(className, styles['vertical-nav-bar-container'])}>
            {
                Array.isArray(tabs) ?
                    tabs.map((tab, index) => (
                        <NavTabButton
                            key={index}
                            className={styles['nav-tab-button']}
                            selected={tab.id === selected}
                            href={tab.href}
                            icon={tab.icon}
                            label={tab.label}
                            details={detailsMenu}
                            onClick={tab.onClick}
                        />
                    ))
                    :
                    null
            }
        </nav>
    );
});

VerticalNavBar.displayName = 'VerticalNavBar';

VerticalNavBar.propTypes = {
    className: PropTypes.string,
    detailsMenu: PropTypes.bool,
    selected: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.string,
        href: PropTypes.string,
        onClick: PropTypes.func
    }))
};

module.exports = VerticalNavBar;
