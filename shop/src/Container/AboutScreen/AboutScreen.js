import {useSelector, useDispatch} from 'react-redux';
import { KitContainer } from '../../Kit'

function AboutScreen(){
  const { 
    count
  } = useSelector((state)=>({
    count:state.home.count
  }))
  const dispatch = useDispatch();
  return <section>

  <KitContainer>

    About
  </KitContainer>

  </section>
}

export default AboutScreen;