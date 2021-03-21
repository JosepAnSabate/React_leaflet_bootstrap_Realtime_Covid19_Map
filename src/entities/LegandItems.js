import LegendItem from "./LegendItem";


const legendItems = [
    new LegendItem(
        "20,000,000 +",
        "#331a00",
        (cases) => cases >= 20_000_000,
            "white"
        ),
    new LegendItem(
        "5,000,000 - 19,999,999",
        "#663300",
        (cases) => cases >= 5_000_000 && cases < 19_999_999,
        "white"
    ),
    new LegendItem(
        "1,000,000 - 4,999,999",
        "#994d00",
        (cases) => cases >= 1_000_000 && cases < 4_999_999
        
    ),
    new LegendItem(
        "200,000 - 999,999",
        "#cc6600",
        (cases) => cases >= 200_000 && cases < 999_999
        
    ),
    new LegendItem(
        "50,000 - 199,999",
        "#ff9933",
        (cases) => cases >= 50_000 && cases < 199_999
        
    ),
    new LegendItem(
        "10,000 - 49,999",
        "#ffcc99",
        (cases) => cases >= 10_000 && cases < 49_999
        
    ),
    new LegendItem(
        "0 - 9,999",
        "#ffd9b3",
        (cases) => cases >= 0 && cases < 9_999 
    ),
    new LegendItem("No data", "#ffffff", (cases) => true),

];

export default legendItems;

