import { Container, Header, Title, Info, Description, Salary, Dot, Location } from "./styles";
import StarIcon from "../svg/StartIcon";
import LocationIcon from "../svg/LocationIcon";
import { VacancyCardProps } from "./types";
import salaryFormater from "../../utils/salaryFormater";

const VacancyCard: React.FC<VacancyCardProps> = ({isFavorite, updateFavorites, vacancy}) => {
    return (
        <Container> 
            <Header>
                <Title>{vacancy.profession}</Title>
                <button onClick={() => updateFavorites(vacancy.id)}><StarIcon isFavorite={isFavorite}/> </button>               
            </Header>
            <Info>
                <Salary>{salaryFormater(vacancy)}</Salary>
                <Dot>•</Dot>
                <Description>{vacancy.type_of_work.title}</Description>
            </Info>
            <Location>
                <LocationIcon/>
                <Description>{vacancy.town.title}</Description>
            </Location>
        </Container>
    )
}

export default VacancyCard;