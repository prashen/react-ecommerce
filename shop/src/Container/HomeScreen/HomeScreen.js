import {useSelector, useDispatch} from 'react-redux';

function HomeScreen(){
  const { 
    count
  } = useSelector((state)=>({
    count:state.home.count
  }))
  const dispatch = useDispatch();
  return <div>
    <button onClick={() => dispatch({
      type:'INCREMENT',
      
    })}>click +</button>

    <button onClick={() => dispatch({
      type:'DECREMENT',
      
    })}>click -</button>

    {count}

  </div>
}

export default HomeScreen;