import img from '../Expertise/Star.png'
import './Say.css'
import img2 from './Dipto.jpg'
const Say = () => {
    return (
        <div className="say syne">
           <div className='backround-img'>
             <div>
                <h1 className='say-text syne'> <span><img src={img} alt="" /></span>What they say</h1>
            </div>
            <div className='crids syne'>
                <div className='card-img'>
                    <img id='img' className='im' src={img2} alt="" />
                    <div className='syne'>
                        <h6 className='name'>Floyd Miles</h6>
                        <p className='ebay'>eBay</p>
                    </div>
                </div>
                <div>
                    <p className='peragerap'>
                        Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
                    </p>
                    
                </div>
            </div>
           </div>


        </div>
    );
};

export default Say;