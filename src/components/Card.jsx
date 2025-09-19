import '../App.css'

function Card(props) {

    return (
        <a href = {props.url} className = 'card'>
            <img src = {props.source}/>
            <div className = 'card-text'>
                <h3 className = 'words'>{props.title}</h3>
                <h4 className = 'words'>${props.price}</h4>
            </div>
        </a>
    )
}

export default Card