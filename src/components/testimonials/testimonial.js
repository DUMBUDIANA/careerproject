
import Testmonialsdata from './Testmonialsdata';
import './Test.css'
import format from '../../assets/format.png'


const Testmonial = () => {
  return (
    <div className='test-outer'>
      <div>
        <p className='para-test'>Know Us</p>
        <h2>We are your partner in <br /> career development</h2>
      </div>
      <div className='test-content'>
        {Testmonialsdata.map((item) => (
          <div key={item.id} className="test-item">
            <img src={item.src} alt={item.title} className='img-test' /> 
            <br/>
            <img src={format} alt={format} className='format' /> 
            <p className='test-paragraph'>{item.text}</p>
            <p className='test-name'>{item.name}</p>
          </div>
      
        ))}
      </div>
    </div>
  );
}

export default Testmonial;

