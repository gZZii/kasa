import Collapse from "./Collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';

// Informations component: Displays detailed information of a lodging
function Informations (props){
    
    // State: Stores the rating value provided through props
    const rating = props.rating;

    // ratingStars: Generates a list of star elements for the rating
    const ratingStars = (rating) => {
        const stars = [];
        const maxStars = 5;
        const numericRating = parseInt(rating, 10);

        for (let i = 1; i <= maxStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={`star-${i}`}
                    icon={fasFaStar}
                    style={{ color: i <= numericRating ? '#ff6060' : '#e3e3e3' }}
                    size="lg" 
                />
            );
        }

        return stars;
    };

    // listEquipments: Maps through equipments array to create a list
    const listEquipments = props.equipments.map((equipment, index) => (
        <li key={`equipment${index}`}>{equipment}</li>
    ))

    return (
        <div className="lodging-details">

            <div className="lodging-details-header">
                <div className="title-and-tags">
                    <h2 className="title">{props.title}</h2>
                    <p className="location">{props.location}</p>
                    <div className="tags">
                        {props.tags.map((tag, index) => (
                            <div key={`tag${index}`} className="tag">{tag}</div>
                        ))}
                    </div>
                </div>
                <div className="host-and-rating">
                    <div className="host">
                        <p>{props.hostname}</p>
                        <img src={props.hostpicture} alt={`Photo de ${props.hostname}`}></img>
                    </div>
                    <div className="rating">
                        {ratingStars(rating)}
                    </div>
                </div>
            </div>

            <div className="lodging-details-collapses">
                <Collapse label="Description" text={props.description}/> 
                <Collapse label="Équipements" text={listEquipments}/>
            </div>

        </div>
    )   
}

export default Informations;