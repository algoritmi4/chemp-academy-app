import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo-180x128.png';
import lgLogo from '../../images/lg-logo.png';

export function Logo(): ReactElement {
  const navigate = useNavigate();

  return (
    <picture>
      <source srcSet={lgLogo} media="(min-width: 1024px)"/>
      <img className="w-[50px] cursor-pointer lg:w-[80px]" onClick={() => navigate('/')} src={logo} alt="Академия чемпионов" />
    </picture>
  )
}
