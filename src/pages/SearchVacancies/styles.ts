import styled from 'styled-components'

import "@fontsource/inter";

const Container = styled.div
`
display: flex;
justify-content: center;
@media(max-width: 1100px) {
    flex-direction: column;
    align-items: center;
}
`

export {Container}