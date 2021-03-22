import React from "react";

function Header() {
  return (
    <div class="header">
      <div class="header__logo">
        <a href="index.html">
          <img
            src="https://res.cloudinary.com/diimwnnmj/image/upload/v1616123198/GEM_-BI_fgzah7.png"
            class="logo"
            alt="gem"
          />
        </a>
      </div>
      <div class="header__search">
        <input class="header__search__box" type="search" name="search" />
        <i class="fa fa-search header__search__icon"></i>
      </div>
    </div>
  );
}

export default Header;
