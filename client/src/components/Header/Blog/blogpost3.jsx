import { useNavigate } from "react-router-dom";
import "./blogpost.scss";
import "./utils.scss";
import "./style.scss";
import "./mobile.scss";
import IMG3 from "./img3.png";
import IMG4 from "./img4.png";
import IMG5 from "./img5.png";
import IMG6 from "./img6.png";
const BlogPost = () => {
  const navigate = useNavigate();
return (
<>
<center><img src={IMG3}/></center>
<div className="m-auto blog-post-content max-width-2 m-auto my-2">
  <h1 className="font1">"Diversifying Farming Business: The Power of Side Hustles."</h1>
  <div className="blogpost-meta">
    <div className="author-info">
    <div>Chris Lockwood</div>
          <pre><span>19 July 2022  |  7 min read</span></pre>
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
For many farmers, diversifying their income streams is an essential part of staying profitable and sustainable. Side hustles can be a great way to supplement traditional farming income, providing a steady source of revenue and expanding your reach in the community. From agritourism to value-added products, there are many different ways to start a side business as a farmer. Let's take a closer look at the benefits of diversifying your farming business and some potential side hustle ideas to explore.
<br />
  <br />
Why diversify your farming business? Diversifying your income streams can help you weather economic ups and downs, reducing your reliance on a single source of income. It can also help you connect with new customers and markets, building brand awareness and customer loyalty. Additionally, side hustles can be a great way to use your existing skills and resources in new and creative ways, adding variety and excitement to your work.
<br />
  <br />
Side hustle ideas for farmers: There are many different side hustle ideas that farmers can explore, depending on their interests and resources. Some potential options include:
<br />
  <br />
Agritourism: Opening up your farm to visitors can be a great way to generate additional income and build community relationships. This can include activities like farm tours, petting zoos, and seasonal events like pumpkin patches and Christmas tree farms.
<br />
  <br />
Value-added products: Turning your farm products into value-added products like jams, jellies, and sauces can be a great way to increase profits and appeal to a wider audience. This can be done through direct sales or through local markets and online platforms.
<br />
  <br />
Livestock sales: Raising and selling livestock can be a profitable side business for farmers with experience in animal husbandry. This can include selling breeding stock, show animals, and meat products.
<br />
  <br />
Specialty crops: Growing and selling specialty crops like herbs, flowers, and mushrooms can be a great way to differentiate yourself in the marketplace and capture premium prices.
<br />
  <br />
In conclusion, diversifying your farming business with side hustles can be a smart and rewarding way to generate additional income, build community relationships, and add excitement to your work. By exploring different side hustle ideas and finding what works best for you and your farm, you can create a more resilient and sustainable business for the long term.

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
    <div className="home-article more-post">
      <div className="home-article-img ex">
      <img src={IMG5}/>
      </div>
      <div className="home-article-content font1 center extra">
      <a onClick={() => navigate("/blogpost5")}>
          <h3>
          Learn more about the science of animal husbandry in India by clicking on here.
          </h3>
        </a>
        <div>Jennifer Knight</div>
          <pre><span>28 November 2022  |  7 min read</span></pre>
      </div>
    </div>
    <div className="home-article more-post">
      <div className="home-article-img">
      <img src={IMG6}/>
      </div>
      <div className="home-article-content font1 center extra">
        <a onClick={() => navigate("/blogpost6")}>
          <h3>
          Learn more about the rise of agro tech in India by clicking on here.
          </h3>
        </a>
          <div>Victor Hudson</div>
          <pre><span>2 May 2022  |  6 min read</span></pre>
      </div>
    </div>
  </div>
</div>
</>
);
};

export default BlogPost;
