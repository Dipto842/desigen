import React from 'react';
import './Works.css'
import img from '../Benar/Vector (1).png'
import img1 from "./img/image 21.png"
import img2 from "./img/image 21 (1).png"
import img3 from "./img/image 22.png"
const Works = () => {
    return (
        <div className='work'>
           <div className='work-hedig'>
            <h1 className='hedig'><span><img width={'28px'} src={img} alt="" /></span> Works </h1>
           
            <p ><a className=' link' href="">view all</a></p>
           </div>


<div className='card'>
    {/* IMG */}
    <div>
        <img className='img' src={img1} alt="" />
    </div>

{/* TEXT */}
    <div className='card-ditels syne'>
<h1 className='card-titel '>Analysis Application</h1>
<p className='card-discepchon poppins'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
<div className='tag'>
    <div ><p className='tag-item'>figma</p></div>

    <div><p className='tag-item' >ux</p></div>
</div>
<div>
    <button className='btn'>View Case Study</button>
</div>
    </div>
</div>
<div className='card'>
    {/* IMG */}
    <div>
        <img className='img' src={img2} alt="" />
    </div>

{/* TEXT */}
    <div className='card-ditels syne'>
<h1 className='card-titel '>Fortknox Application</h1>
<p className='card-discepchon poppins'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
<div className='tag'>
    <div ><p className='tag-item'>figma</p></div>

    <div><p className='tag-item' >ux</p></div>
</div>
<div>
    <button className='btn'>View Case Study</button>
</div>
    </div>
</div>
<div className='card'>
    {/* IMG */}
    <div>
        <img className='img' src={img3} alt="" />
    </div>

{/* TEXT */}
    <div className='card-ditels syne'>
<h1 className='card-titel '>Zenocide Application</h1>
<p className='card-discepchon poppins'>With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.</p>
<div className='tag'>
    <div ><p className='tag-item'>figma</p></div>

    <div><p className='tag-item' >ux</p></div>
</div>
<div>
    <button className='btn'>View Case Study</button>
</div>
    </div>
</div>

        </div>
    );
};

export default Works;