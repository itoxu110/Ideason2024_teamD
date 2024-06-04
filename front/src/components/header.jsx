// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheet/header.css'; // スタイルシートをインポート

const Header = () => {
  return (
    <header className="header">
      
      <nav>
        <ul>
          <li><Link to="/">ゲーム説明</Link></li>
          <li><Link to="/about">ホーム画面に戻る</Link></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;