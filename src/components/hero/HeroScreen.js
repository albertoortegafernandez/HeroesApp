import { useMemo } from 'react';
import {useParams,Navigate,useNavigate} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';


export const HeroScreen = () => {

  const {id} =useParams();
  
  const navigate=useNavigate();

  const hero = useMemo( ()=>getHeroById(id),[id]);

  const handleReturn = ()=>{
    navigate(-1)
  }

  if(!hero){
    return <Navigate to="/" />
  }

  const{superhero,publisher,alter_ego,first_appearance,characters}=hero;

  const imagePath=`/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
      <img src={imagePath} alt={superhero} className="img-thumbnail animate__animated animate__slideInLeft" />
      </div>
     <div className='col-8 animate__animated animate__fadeInRight'>
    <h3>{superhero}</h3>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
      <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
      <li className='list-group-item'><b>First_appearance: </b>{first_appearance}</li>
    </ul>
    <h5 className='mt-5'>Characters</h5>
    <p>{characters}</p>
    <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>
     </div>
    </div>
  );
};
