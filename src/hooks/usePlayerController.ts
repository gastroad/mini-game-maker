import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { playerState, scoreState, answerState } from 'src/state/game/atoms';

export const usePlayerController = (mazeData: any, end: any) => {
  const [player, setPlayer] = useRecoilState(playerState);
  const [score, setScore] = useRecoilState(scoreState);
  const [answer, setAnswer] = useRecoilState(answerState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetScore = useResetRecoilState(scoreState);

  const resetPlayerAndScore = () => {
    resetPlayer();
    resetScore();
  };

  const toggleAnswer = () => {
    setAnswer(!answer);
  };

  const handlePlayer = (nextPlayer: any) => {
    if (
      nextPlayer.y < mazeData[0].length &&
      nextPlayer.x < mazeData.length &&
      nextPlayer.x >= 0 &&
      nextPlayer.y >= 0 &&
      mazeData[nextPlayer.x][nextPlayer.y] === 0
    ) {
      setPlayer(nextPlayer);
    }
  };

  const bindController = (e: KeyboardEvent) => {
    setScore((prev) => prev - 1);
    switch (e.code) {
      case 'ArrowLeft':
        handlePlayer({ ...player, y: player.y - 1 });
        break;
      case 'ArrowRight':
        handlePlayer({ ...player, y: player.y + 1 });
        break;
      case 'ArrowUp':
        handlePlayer({ ...player, x: player.x - 1 });
        break;
      case 'ArrowDown':
        handlePlayer({ ...player, x: player.x + 1 });
        break;
    }
  };
  useEffect(() => {
    if (player.x == end.x && player.y == end.y) {
      alert(`성공, ${score}점 획득하셨습니다.`);
    }

    window.addEventListener('keydown', bindController);
    return () => {
      window.removeEventListener('keydown', bindController);
    };
  }, [player]);

  return {
    player,
    score,
    answer,
    resetPlayerAndScore,
    handlePlayer,
    bindController,
    toggleAnswer,
  };
};

export default usePlayerController;
