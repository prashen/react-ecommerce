import {useSelector, useDispatch} from 'react-redux';
import { Banner } from '../../Components'

function HomeScreen(){
  const { 
    count
  } = useSelector((state)=>({
    count:state.home.count
  }))

  const dispatch = useDispatch();

  return <div>

    <Banner/>

    {/* <button onClick={() => dispatch({
      type:'INCREMENT',
      
    })}>click +</button>

    <button onClick={() => dispatch({
      type:'DECREMENT',
      
    })}>click -</button>

    {count} */}

  </div>
}

export default HomeScreen;