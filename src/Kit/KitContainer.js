// export const KitContainer = Container;
import styled from 'styled-components';

const AppContainer = styled.section`
  margin: 0 auto;
  max-width: 1170px;
  width: 86.7%;

  @media (max-width: 768px) {
    width:100%;
  }
  
`
function KitContainer(props) {
  return (
    <AppContainer>
      {props.children}
    </AppContainer>
  )
}



export {KitContainer}
