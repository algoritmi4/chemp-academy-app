import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo-180x128.png';

export function Logo(): ReactElement {
  const navigate = useNavigate();

  return (
    <img className="w-[122px] h-[86px]" onClick={() => navigate('/')} src={logo} alt="Академия чемпионов" />
  )
}
