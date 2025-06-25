import "./Benar.css"
import img from './Rectangle (1).png'
import img2 from './Rectangle.png'
import img3 from './Vector.png'
import img4 from './Vector (1).png'

const Benar = () => {
    return (
        <div className='benar'>
           
            <div className='text '>
               <h1 className="">I AM A <span className="imges"><img width={'90px'}  src={img} alt="" /></span>
FREELANCE
DESIGNER
 <span><img width={'90px'} src={img2} alt="" /></span> FROM
San Francisco</h1>
            </div>

            <div className="">
              <div class="footer-nav">
  <div class="item">

<div className="img4"><img width={'16px'} src={img4} alt="" /></div>
<div ><h5 className="text1 text2">doradesign</h5></div>

  </div>
  <div class="item">
    <div><img width={'25px'} src={img3} alt="" /></div>
    <div><h3 className="text1">wave</h3></div>
  </div>
  <div class="item">SILOLA</div>

  <div className="text4">
    <h6 className="text3">Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</h6>
</div>
</div>



            </div>
        </div>
    );
};

export default Benar;