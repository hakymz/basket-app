import React from 'react';
import {Svg} from '.';
import Arrow from '../../../../assets/svgs/icons/arrow.svg';
import Mail from '../../../../assets/svgs/icons/mail.svg';
import Key from '../../../../assets/svgs/icons/key.svg';
import Eye from '../../../../assets/svgs/icons/eyeOff.svg';
import Facebook from '../../../../assets/svgs/icons/facebook.svg';
import Google from '../../../../assets/svgs/icons/google.svg';
import Menu from '../../../../assets/svgs/icons/menu.svg';
import Bell from '../../../../assets/svgs/icons/bell.svg';
import Edit from '../../../../assets/svgs/icons/edit.svg';
import Star from '../../../../assets/svgs/icons/star.svg';
import Order from '../../../../assets/svgs/icons/order.svg';
import Location from '../../../../assets/svgs/icons/location.svg';
import Payment from '../../../../assets/svgs/icons/payment.svg';
import Settings from '../../../../assets/svgs/icons/settings.svg';
import Logout from '../../../../assets/svgs/icons/logout.svg';
import Search from '../../../../assets/svgs/icons/search.svg';

const width = 30;
const height = 30;
export const Icons = {
  Arrow: pros => <Svg {...{style: {height, width}, ...pros}} file={Arrow} />,
  Mail: pros => <Svg {...{style: {height, width}, ...pros}} file={Mail} />,
  Key: pros => <Svg {...{style: {height, width}, ...pros}} file={Key} />,
  Eye: pros => <Svg {...{style: {height, width}, ...pros}} file={Eye} />,
  Facebook: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={Facebook} />
  ),
  Google: pros => <Svg {...{style: {height, width}, ...pros}} file={Google} />,
  Menu: pros => <Svg {...{style: {height, width}, ...pros}} file={Menu} />,
  Bell: pros => <Svg {...{style: {height, width}, ...pros}} file={Bell} />,
  Edit: pros => <Svg {...{style: {height, width}, ...pros}} file={Edit} />,
  Star: pros => <Svg {...{style: {height, width}, ...pros}} file={Star} />,
  Order: pros => <Svg {...{style: {height, width}, ...pros}} file={Order} />,
  Location: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={Location} />
  ),
  Payment: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={Payment} />
  ),
  Settings: pros => (
    <Svg {...{style: {height, width}, ...pros}} file={Settings} />
  ),
  Logout: pros => <Svg {...{style: {height, width}, ...pros}} file={Logout} />,
  Search: pros => <Svg {...{style: {height, width}, ...pros}} file={Search} />,
};
