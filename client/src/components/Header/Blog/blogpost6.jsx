import { useNavigate } from "react-router-dom";
import "./blogpost.scss";
import "./utils.scss";
import "./style.scss";
import "./mobile.scss";
import IMG2 from "./img2.png";
import IMG3 from "./img3.png";
import IMG6 from "./img6.png";
import IMG1 from "./img1.png";
const BlogPost = () => {
  const navigate = useNavigate();
return (
<>
<center><img src={IMG6}/></center>
<div className="m-auto blog-post-content max-width-2 m-auto my-2">
  <h1 className="font1">"From Farm to Future: The Rise of Agrotech."</h1>
  <div className="blogpost-meta">
    <div className="author-info">
    <div>Victor Hudson</div>
          <pre><span>2 May 2022  |  6 min read</span></pre>
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
Agriculture has always been the backbone of human civilization. It has not only been a source of food but also an integral part of our cultural and social fabric. As the world population grows, so does the demand for food. However, with limited resources and a changing climate, traditional agricultural practices are no longer sufficient to meet the growing demand. This is where Agrotech comes in - the application of technology to agriculture.
<br />
  <br />
Agrotech encompasses a range of technologies that are transforming the way we produce and distribute food. From precision farming and hydroponics to food processing and distribution, Agrotech is redefining the future of agriculture. Let's take a closer look at some of the key areas where Agrotech is making a difference:
<br />
  <br />
Precision farming: Precision farming involves the use of technology to optimize crop yield and reduce waste. Drones, sensors, and satellite imagery are used to monitor crop health and soil conditions, enabling farmers to make informed decisions about planting, fertilizing, and harvesting. This not only reduces the use of resources like water and fertilizer but also improves crop quality and yield.
<br />
  <br />
Vertical farming: Vertical farming is a sustainable alternative to traditional agriculture, where crops are grown in stacked layers. This method uses LED lights, hydroponic systems, and controlled environments to grow crops year-round, without the need for soil or pesticides. This reduces the carbon footprint of food production and provides fresh, healthy produce to urban areas.
<br />
  <br />
Food processing: Agrotech is also transforming the way food is processed, packaged, and distributed. Automated systems and AI are being used to improve food safety and reduce waste, while blockchain technology is being used to increase transparency and traceability in the supply chain. This ensures that food reaches consumers quickly and safely.
<br />
  <br />
Smart logistics: Logistics is a critical component of the food supply chain, and Agrotech is making it smarter and more efficient. From automated warehouses to self-driving trucks, technology is being used to streamline the movement of food from farm to table. This reduces food waste and ensures that consumers have access to fresh, high-quality food.
<br />
  <br />
In conclusion, Agrotech is transforming the agricultural landscape, making it more sustainable, efficient, and resilient. As the demand for food continues to grow, Agrotech will play an increasingly important role in ensuring that we can feed the world's population while preserving our planet's resources. From farm to future, Agrotech is leading the way.
</p>
</div>
<div className="max-width-1 m-auto">
  <hr />
</div>
<div className="home-articles max-width-1 m-auto font2">
  <h2>People who read this also read</h2>
  <div className="row">
    <div className="home-article more-post">
      <div className="home-article-img ex2">
      <img src={IMG1}/>
      </div>
      <div className="home-article-content font1 center extra">
      <a onClick={() => navigate("/blogpost1")}>
      <h3>Learn more about the future of sustainable agriculture by clicking on here.</h3>
          </a>
          <div>Otis Gibson</div>
          <pre><span>07 January 2023  |  8 min read</span></pre>
      </div>
    </div>
    <div className="home-article more-post">
      <div className="home-article-img ex3">
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
      <div className="home-article-img">
      <img src={IMG3}/>
      </div>
      <div className="home-article-content font1 center extra">
      <a onClick={() => navigate("/blogpost3")}>
      <h3>Learn about the Power of Side Hustles in India by clicking on here.</h3>
          </a>
          <div>Chris Lockwood</div>
          <pre><span>19 July 2022  |  7 min read</span></pre>
      </div>
    </div>
  </div>
</div>
</>
);
};

export default BlogPost;
