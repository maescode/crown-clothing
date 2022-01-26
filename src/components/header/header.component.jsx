import React from 'react';
//import { OptionLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.style';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
const Header = ({ currentUser, hidden }) => {
  console.log('current user', currentUser);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
