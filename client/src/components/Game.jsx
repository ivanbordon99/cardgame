import { GameEngine } from 'react-game-engine';
import Player from './Player';  // Importa el componente del jugador

const Game = () => {
    return (
        <GameEngine
            running={true}
            systems={[]}
            entities={{
                player: { x: 0, y: 0, renderer: <Player /> },
            }}
        />
    );
};

export default Game;