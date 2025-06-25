import './CoreConcept.scss';

export default function CoreConcept({image, title, description}) { //객체 구조 분해
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}