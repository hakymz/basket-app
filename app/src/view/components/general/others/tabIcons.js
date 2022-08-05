import React from 'react';
import {Svg} from '.';
import Home from '../../../../assets/svgs/icons/tabIcons/home';
import HomeActive from '../../../../assets/svgs/icons/tabIcons/homeActive';
import Saved from '../../../../assets/svgs/icons/tabIcons/saved';
import SavedActive from '../../../../assets/svgs/icons/tabIcons/savedActive';
import Account from '../../../../assets/svgs/icons/tabIcons/account';
import AccountActive from '../../../../assets/svgs/icons/tabIcons/accountActive';
import Cart from '../../../../assets/svgs/icons/tabIcons/cart';
import CartActive from '../../../../assets/svgs/icons/tabIcons/cartActive';

const width = 30;
const height = 30;
export const TabsIcons = {
  Home: pros => <Svg {...{style: {height, width}, ...pros}} file={Home} />,
  HomeActive: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={HomeActive} />
  ),
  Account: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={Account} />
  ),
  AccountActive: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={AccountActive} />
  ),
  Saved: pros => <Svg {...{style: {height, width}, ...pros}} file={Saved} />,
  SavedActive: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={SavedActive} />
  ),
  Cart: pros => <Svg {...{style: {height, width}, ...pros}} file={Cart} />,
  CartActive: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={CartActive} />
  ),
};
