"use client";
const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="navbar">
        <span>
          <a href="#home">Home</a>
        </span>
        <span>
          <a href="#news">News</a>
        </span>
        <span>
          <a href="#news">News 2</a>
        </span>
        <span>
          <a href="#home">Home className 3</a>
        </span>
        <span>
          <div className="dropdown">
            <button className="dropbtn">
              Dropdown
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </span>
        <span>
          <div className="dropdown">
            <button className="dropbtn">
              Dropdown 2<i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 12</a>
              <a href="#">Link 22</a>
              <a href="#">Link 32</a>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};
export default NavigationMenu;
