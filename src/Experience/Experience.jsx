import './Experience.css'
import img from '../Expertise/Star.png'

const Experience = () => {
    return (
        <div className='Experience syne'> 
            <div>
                 <h1 className='Experience-text'><span><img src={img} alt="" /></span> Expertise</h1>
                 <div>

<div className='Experience-carid'>
    <h1 className='hedig'>Lead Product Designer
 </h1>
<div className=''>
    <h5 className='end '>Fortknox</h5>
    <p>Mar 2022 - Oct 2023</p>

</div>
</div>
<hr />
<div className='Experience-carid'>
    <h1 className='hedig'>Intern Designer
 </h1>
<div className=''>
    <h5 className='end '>OmniSafe</h5>
    <p>Mar 2022 - Oct 2023</p>

</div>
</div>
<hr />
<div className='Experience-carid'>
    <h1 className='hedig'>UI Designer
 </h1>
<div className=''>
    <h5 className='end '>Doradesign</h5>
    <p>Mar 2022 - Oct 2023</p>

</div>
</div>
<hr />
<div className='Experience-carid'>
    <h1 className='hedig'>Frontend Developer
 </h1>
<div className=''>
    <h5 className='end '>OpacityAuthor</h5>
    <p>    Mar 2022 - Oct 2023</p>

</div>
</div>
<hr />


                 </div>
            </div>
        </div>
    );
};

export default Experience;