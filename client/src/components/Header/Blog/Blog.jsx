import { useNavigate } from "react-router-dom";
import "./utils.scss";
import "./mobile.scss";
import "./style.scss";
import "./Blog.scss";
import IMG1 from "./img1.png";
import IMG2 from "./img2.png";
import IMG3 from "./img3.png";
import IMG4 from "./img4.png";
import IMG5 from "./img5.png";
import IMG6 from "./img6.png";
const Blog = () => {
  const navigate = useNavigate();
  return (<><div className="blog-banner"><div className="content">
    <div className="text-content">
      <h1>FarmOre Blogs</h1>
      <p>Join the Conversation, where Ideas Come to Life. <br />
        Creating Connections Through Words.</p>
    </div>
  </div>
  </div>
    <div className="home-articles max-width-1 m-auto font2">
      <h2>Featured Articles</h2>
      <div className="home-article">
        <div className="home-article-img">
          <img src={IMG1}/>
        </div>
        <div className="home-article-content font1 a">
          <a onClick={() => navigate("/blogpost1")}>
          <h3>Vertical Farming: The Future of Sustainable Agriculture.</h3>
          </a>
          <div>Otis Gibson</div>
          <pre><span>07 January 2023  |  8 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={IMG2}/>
        </div>
        <div className="home-article-content font1 b">
        <a onClick={() => navigate("/blogpost2")}>
            <h3>Bamboo Farming: The Sustainable Crop of the Future.</h3>
          </a>
          <div>Hermione Portman</div>
          <pre><span>15 March 2023  |  6 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={IMG3}/>
        </div>
        <div className="home-article-content font1 c">
        <a onClick={() => navigate("/blogpost3")}>
            <h3>Diversifying Farming Business: The Power of Side Hustles.</h3>
          </a>
          <div>Chris Lockwood</div>
          <pre><span>19 July 2022  |  7 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={IMG4}/>
        </div>
        <div className="home-article-content font1 d">
        <a onClick={() => navigate("/blogpost4")}>
            <h3>Sweet Success: The Art and Science of Apiculture.</h3>
          </a>
          <div>Martin Green</div>
          <pre><span>22 September 2022  |  8 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={IMG5}/>
        </div>
        <div className="home-article-content font1 e">
        <a onClick={() => navigate("/blogpost5")}>
            <h3>Animal Husbandry: Nurturing the Bonds Between Humans and Animals.</h3>
          </a>
          <div>Jennifer Knight</div>
          <pre><span>28 November 2022  |  7 min read</span></pre>
        </div>
      </div>
      <div className="home-article">
        <div className="home-article-img">
        <img src={IMG6}/>
        </div>
        <div className="home-article-content font1 f">
        <a onClick={() => navigate("/blogpost6")}>
            <h3>From Farm to Future: The Rise of Agrotech.</h3>
          </a>
          <div>Victor Hudson</div>
          <pre><span>2 May 2022  |  6 min read</span></pre>
        </div>
      </div>
    </div></>);
};

export default Blog;
