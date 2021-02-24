import styled from 'styled-components';
import { colors } from '../../styles';

const PortfolioWrapper = styled.div`
    padding-top: 60px;
    background: ${colors.tertiary};
    color: ${colors.quartenary};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ItemsWrapper = styled.div`
    display: grid;
    margin-bottom: ${props => props.isExpanded ? '0px' : '40px' };
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    @media (max-width: 770px) {
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`;

const PortfolioTitle = styled.h1`
    ::after {
        background: ${colors.quartenary};
        margin-bottom: 40px;    
    }
`;

export {PortfolioWrapper, ItemsWrapper, PortfolioTitle};