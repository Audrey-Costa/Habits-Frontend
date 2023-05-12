import './Header.css';
import logoImage from '../../assets/logo.svg';
import { Plus } from 'phosphor-react';

export function Header (): JSX.Element {
  return (
    <div className="header">
      <img src={logoImage} alt="Habits" />
      <button type='button'>
        <Plus size={20} color='rgb(139 92 246)'/>
        Novo hábito
      </button>
    </div>
)}