import './navigation.styles.scss'
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as BurgerLogo } from '../../assets/logo.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <BurgerLogo className='logo' />
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;