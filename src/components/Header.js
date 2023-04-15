function Header() {
  return (
    <div className="header">
      <img src="../img/banner.jpg" alt="Banner" />
      <div className="userBlock">
        <div className="leftBlock">
          <img src="../img/avatar.png" />
          Ricardo Cooper
        </div>
        <div className="rightBlock">
          <button>
            <img height={15} src="../img/mail-icon.svg" />
            Message
          </button>
          <button>
            <img height={15} src="../img/phone-icon.svg" />
            Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
