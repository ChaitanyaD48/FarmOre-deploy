{/* <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/utils.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/mobile.css" />
  <title>iBlog - Heaven for bloggers</title> */}

  
  import "./utils.scss";
  import "./style.scss";
  import "./mobile.scss";

  const search =() =>{
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
  <div className="home-articles max-width-1 m-auto font2">
    <h2>Search Results for Django (0.03 seconds)</h2>
    <div className="year-box adjust-year">
      <div>
        <h3>Year </h3>
      </div>
      <div>
        <input type="radio" name="year" id="" /> 2020
      </div>
      <div>
        <input type="radio" name="year" id="" /> 2021
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/home.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
    <div className="home-article">
      <div className="home-article-img">
        <img src="img/11.svg" alt="article" />
      </div>
      <div className="home-article-content font1">
        <a href="/blogpost.html">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </a>
        <span>Author Name</span>
        <span>07 January | 6 min read</span>
      </div>
    </div>
  </div>
  <div className="footer">
    <p>Copyright © iBlog.com </p>
    <a href="https://www.vecteezy.com/free-vector/typewriter">
      Vector Credits: Vecteezy
    </a>
  </div>
</>);
};

export default search;