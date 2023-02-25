import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logoIgnite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Dois triangulos em cor verde, sobrepostos com transparência, e rotacionados em 45 graus"
      />
      <nav>
        <NavLink to="/" title="Cronômetro">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
