import PropTypes from 'prop-types';
const Card = ({ cardNumber, cardColor, x, y }) => {
    return (

        <div
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '100px', // Puedes ajustar el tamaño de la carta
                height: '140px',
            }}
        >
            <img
                src={`../assets/cards/${cardColor}/${cardNumber}-${cardColor}.png`} // Ruta a la imagen de la carta
                alt={`Carta ${cardNumber}-${cardColor}`}
                style={{ width: '100%', height: '100%' }}
            />
        </div>

    );

}
Card.propTypes = {
    cardNumber: PropTypes.string.isRequired, // Asegura que cardNumber sea una cadena y es requerido
    cardColor: PropTypes.string.isRequired,  // Asegura que cardColor sea una cadena y es requerido
    x: PropTypes.number.isRequired,          // Asegura que x sea un número y es requerido
    y: PropTypes.number.isRequired,          // Asegura que y sea un número y es requerido
};
export default Card;