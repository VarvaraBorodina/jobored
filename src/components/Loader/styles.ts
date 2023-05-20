import styled from 'styled-components'

const Container = styled.div
`
margin: 0 auto;
margin-top: 150px;
border: 16px solid #FFF;
border-top: 16px solid #5E96FC; 
border-radius: 50%;
width: 120px;
height: 120px;
animation: spin 2s linear infinite;

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`
export { Container };