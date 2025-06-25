import "./Blog.css";
import img from "../Expertise/Star.png";
import img1 from './image 21.png'
const Blog = () => {
  return (
    <div className="blog syne">
      <div>
        <h1 className="Blog-text">
          <span>
            <img src={img} alt="" />
          </span>
          Blog
        </h1>
      </div>
      <div>
        <div className="crid">
          <div className="">
            <img src={img1} alt="" />
          </div>

          <div className="card-end">
            <div > 
                <p className="poppins text-time">Nov 9, 2023</p>
            <h2 className="test-hedig">How UX works in web</h2>
            <div className="text-avetar-hedar">
              <p className="text-avtar">UI</p>
              <p className="text-avtar">UX</p>
            </div>
            </div>
             <div>
            <button id="bt">Read</button>
          </div>
          </div>

         
        </div>
      </div>
      <div>
        <div className="crid">
          <div className="">
            <img src={img1} alt="" />
          </div>

          <div className="card-end">
            <div > 
                <p className="poppins text-time">Nov 9, 2023</p>
            <h2 className="test-hedig">Case study - Analysis Application.</h2>
            <div className="text-avetar-hedar">
              <p className="text-avtar">Design</p>
              <p className="text-avtar">Print</p>
            </div>
            </div>
             <div>
            <button id="bt">Read</button>
          </div>
          </div>

         
        </div>
      </div>
      <div>
        <div className="crid">
          <div className="">
            <img src={img1} alt="" />
          </div>

          <div className="card-end">
            <div > 
                <p className="poppins text-time">Nov 9, 2023</p>
            <h2 className="test-hedig">3 ways to develop your skill</h2>
            <div className="text-avetar-hedar">
              <p className="text-avtar">figma</p>
              <p className="text-avtar">web</p>
            </div>
            </div>
             <div>
            <button id="bt" className="">Read</button>
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Blog;
