import {useSelector, useDispatch} from 'react-redux';

function AboutScreen(){
  const { 
    count
  } = useSelector((state)=>({
    count:state.home.count
  }))
  const dispatch = useDispatch();
  return <div>
    About

  </div>
}

export default AboutScreen;