import { Container, Header, Title, Info, Description, Salary, Dot, Location } from "./styles";
import StarIcon from "../svg/StartIcon";
import LocationIcon from "../svg/LocationIcon";

const VacancyCard: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Менеджер-дизайнер</Title>
                <button><StarIcon favorite/> </button>               
            </Header>
            <Info>
                <Salary>{`з/п от ${70000} rub`}</Salary>
                <Dot>•</Dot>
                <Description>Полный рабочий день</Description>
            </Info>
            <Location>
                <LocationIcon/>
                <Description>Новый Уренгой</Description>
            </Location>
        </Container>
    )
}

export default VacancyCard;