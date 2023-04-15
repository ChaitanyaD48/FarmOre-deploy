import { useNavigate } from "react-router-dom";
import "./blogpost.scss";
import "./utils.scss";
import "./style.scss";
import "./mobile.scss";
import IMG1 from "./img1.png";
import IMG2 from "./img2.png";
import IMG3 from "./img3.png";
import IMG4 from "./img4.png";
const BlogPost = () => {
  const navigate = useNavigate();
return (
<>
<center><img src={IMG1} className="vertical"/></center>
<div className="m-auto blog-post-content max-width-2 m-auto my-2">
  <h1 className="font1">"Vertical Farming: The Future of Sustainable Agriculture."</h1>
  <div className="blogpost-meta">
    <div className="author-info">
      <div>
        <b>Otis Gibson</b>
      </div>
      <pre><div>07 January 2023  |  8 min read</div></pre>
    </div>
    <div className="social">
      <svg width={29} height={29} className="hk">
        <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z" />
      </svg>
      <svg
        style={{ background: "black", borderRadius: 21 }}
        width={29}
        height={29}
        viewBox="0 0 29 29"
        fill="none"
        className="hk"
      >
        <path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"
          fill="#fff"
        />
      </svg>
      <svg width={29} height={29} className="hk">
        <path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79" />
      </svg>
    </div>
  </div>
  <p className="font1">
  <br />
  <br />
Vertical farming is a new and innovative way to grow crops in a controlled and efficient environment. By stacking layers of plants vertically, vertical farms can produce high yields in a small space, using less water and fertilizer than traditional farms. Additionally, vertical farms can operate year-round, providing fresh produce even in areas with limited growing seasons. Let's take a closer look at the benefits of vertical farming and how it's changing the future of agriculture.
<br />
<br />
Why vertical farming? Vertical farming offers many benefits over traditional agriculture, including:
<br />
<br />
Space efficiency: Vertical farms can produce high yields in a small footprint, making them ideal for urban areas where space is limited.
<br />
<br />
Water conservation: Vertical farms use up to 90% less water than traditional farming methods, making them a more sustainable option in areas with limited water resources.
<br />
<br />
Climate control: Vertical farms can control temperature, humidity, and light to optimize plant growth, resulting in faster growth and higher yields.
<br />
<br />
Year-round production: Vertical farms can operate year-round, providing fresh produce even in areas with limited growing seasons.
<br />
<br />
Applications of vertical farming: Vertical farming has a range of applications across a variety of industries. In the food industry, vertical farms can produce fresh produce for local markets, restaurants, and grocery stores. Additionally, vertical farms can be used to grow medicinal plants and herbs for the pharmaceutical industry. Vertical farms can also be used for research and development, testing new plant varieties and growing methods in a controlled environment.
<br />
<br />
Getting started with vertical farming: If you're interested in vertical farming, there are a few key steps to take to get started. First, you'll need to research the different vertical farming systems available and decide which one is best suited for your needs. You'll also need to invest in the proper equipment for planting, harvesting, and maintaining your vertical farm. Finally, it's important to establish a market for your vertical farm products, whether through direct sales or through partnerships with local retailers.
<br />
<br />
In conclusion, vertical farming is a sustainable and innovative way to grow crops in a controlled and efficient environment. By exploring the benefits of vertical farming and taking the time to plan and research your vertical farm, you can create a successful and sustainable business for the future.
</p>
</div>
<div className="max-width-1 m-auto">
  <hr />
</div>
<div className="home-articles max-width-1 m-auto font2">
  <h2>People who read this also read</h2>
  <div className="row">
    <div className="home-article more-post">
      <div className="home-article-img e">
      <img src={IMG2}/>
      </div>
      <div className="home-article-content font1 center extra">
        <a onClick={() => navigate("/blogpost2")}>
          <h3>
            Learn more about the sustainable crops of future in India by clicking on here.
          </h3>
        </a>
        <div>Hermione Portman</div>
          <pre><span>15 March 2023  |  6 min read</span></pre>
      </div>
    </div>
    <div className="home-article more-post">
      <div className="home-article-img ex">
      <img src={IMG3}/>
      </div>
      <div className="home-article-content font1 center extra">
        <a onClick={() => navigate("/blogpost3")}>
          <h3>
            Learn more about the power of side hustles in India by clicking on here.
          </h3>
        </a>
        <div>Chris Lockwood</div>
          <pre><span>19 July 2022  |  7 min read</span></pre>
      </div>
    </div>
    <div className="home-article more-post">
      <div className="home-article-img ex1">
      <img src={IMG4}/>
      </div>
      <div className="home-article-content font1 center extra">
        <a onClick={() => navigate("/blogpost4")}>
          <h3>
          Learn more about the science of apiculture in India by clicking on here.
          </h3>
        </a>
        <div>Martin Green</div>
          <pre><span>22 September 2022  |  8 min read</span></pre>
      </div>
    </div>
  </div>
</div>
</>
);
};

export default BlogPost;
