import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="image-card-container">
      <img src={imgUrl} alt={name} className="place-image" />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
