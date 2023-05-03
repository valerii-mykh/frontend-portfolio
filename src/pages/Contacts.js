const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Kyiv, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone number </h2>
            <p>
              <a href="tel:+380502936993">+38 (050) 29-36-993</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram </h2>
            <p>
              <a href="https://t.me/ValMix11">@ValMix11</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:valerii_mih@ukr.net">valerii_mih@ukr.net</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
