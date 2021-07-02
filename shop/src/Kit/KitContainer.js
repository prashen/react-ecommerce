// export const KitContainer = Container;
import styled from 'styled-components';

const AppContainer = styled.section`
  max-width:1140px;
  margin:0 auto;
  padding:0 1.0rem;

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
