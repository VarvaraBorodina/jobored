import { COLORS } from "../../../constants/colors";

const SmallDownArrowSvg: React.FC = () => {
    return(
            <svg  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5" stroke={COLORS.MEDIUM_GREY} strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
    )
}

export default SmallDownArrowSvg;