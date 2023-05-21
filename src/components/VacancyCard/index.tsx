import { Container, Header, Title, Info, Description, Salary, Dot, Location, LocationText } from "./styles";
import StarIcon from "../svg/StartIcon";
import LocationIcon from "../svg/LocationIcon";
import { VacancyCardProps } from "./types";
import salaryFormater from "../../utils/salaryFormater";
import { ROUTE_NAMES } from "../../constants/routesNames";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

const VacancyCard: React.FC<VacancyCardProps> = ({isFavorite, updateFavorites, vacancy, main}) => {

    let navigate = useNavigate(); 

    const handleOnClickStar = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.stopPropagation();
        updateFavorites(vacancy.id);
        
    }

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
        if(!main) {; 
            navigate(`${ROUTE_NAMES.VACANCY}${vacancy.id}`);
        }
    }

    return (
        <ThemeProvider theme={{main}}>
            <Container onClick={handleOnClick} > 
                <Header>
                    <Title >{vacancy.profession}</Title>
                    <button onClick={handleOnClickStar}><StarIcon isFavorite={isFavorite}/> </button>               
                </Header>
                <Info >
                    <Salary >{salaryFormater(vacancy)}</Salary>
                    <Dot>•</Dot>
                    <Description >{vacancy.type_of_work.title}</Description>
                </Info>
                <Location>
                    <LocationIcon/>
                    <LocationText>{vacancy.town.title}</LocationText>
                </Location>
            </Container>
        </ThemeProvider>
    )
}

export default VacancyCard;