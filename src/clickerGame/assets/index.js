import lemon from "./Lemonade.png";
import car from "./Car.png";
import news from './Newspaper.png';
import pizza from './Pizza.png';
import donut from './Donut.png';
//export const lemonide=lemon;

function Img(imgName){
    switch(imgName){
        case "Lemonade":
            return lemon;
        case "Newspaper":
            return news;
        case "Car":
            return car;
        case "Pizza":
            return pizza;
        case "Donut":
            return donut;
        case "Shrimp":
            return donut;
    }
}
export default Img;