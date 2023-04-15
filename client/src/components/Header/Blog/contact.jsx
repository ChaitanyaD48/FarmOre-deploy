{/* <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/utils.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/contact.css" />
  <link rel="stylesheet" href="css/mobile.css" />
  <title>iBlog - Heaven for bloggers</title> */}
import "./utils.scss";
import "./style.scss";
import "./contact.scss";
import "./mobile.scss";

const contact = () =>{
    return (
   <>
  <nav className="navigation max-width-1 m-auto">
    <div className="nav-left">
      <a href="/">
        <span>
          <img src="img/logo.png" width="94px" alt="" />
        </span>
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="/contact.html">Contact</a>
        </li>
      </ul>
    </div>
    <div className="nav-right">
      <form action="/search.html" method="get">
        <input
          className="form-input"
          type="text"
          name="query"
          placeholder="Article Search"
        />
        <button className="btn">Search</button>
      </form>
    </div>
  </nav>
  <div className="max-width-1 m-auto">
    <hr />
  </div>
  <div className="contact-content font1 max-width-1 m-auto">
    <div className="max-width-1 m-auto mx-1">
      <h2>Feel Free to Contact Us</h2>
      <div className="contact-form">
        <div className="form-box">
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className="form-box">
          <input type="text" placeholder="Enter Your Phone Number" />
        </div>
        <div className="form-box">
          <input type="text" placeholder="Enter Your Email Id" />
        </div>
        <div className="form-box">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="How may we help you?"
            defaultValue={""}
          />
        </div>
        <div className="form-box">
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  </div>
  <div className="footer">
    <p>Copyright © iBlog.com </p>
    <a href="https://www.vecteezy.com/free-vector/typewriter">
      Vector Credits: Vecteezy
    </a>
  </div>
</>
    );
};

export default contact;
