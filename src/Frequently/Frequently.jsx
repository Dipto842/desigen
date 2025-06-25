import img from '../Expertise/Star.png'
import './Frequently.css'
const Frequently = () => {
    return (
        <div id='Frequently'>
              <div>
        <h1 className="Frequently-text">
          <span>
            <img src={img} alt="" />
          </span>
          Frequently
        </h1>
      </div>


<div  className='syne'>
    <h3 className='hedig'>What is your design process?</h3>
    <p className='peregerap'>My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.</p>
    <h2 className='seken-hedig'>What tools and software do you use for UX design?</h2>
    <h2 className='seken-hedig'>How do you measure the success of your UX designs?</h2>
</div>


        </div>
    );
};

export default Frequently;