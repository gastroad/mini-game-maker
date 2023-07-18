import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import CharURL from '../../../assets/img/cha.png';
import { MazeBoardType } from '@type/maze';

import './MazePlayer.scss';

export interface MazePlayerProps extends MazeBoardType {
  playerSize: any;
}
const MazePlayer: FC<MazePlayerProps> = ({
  mazeData,
  start,
  end,
  playerSize,
}) => {
  const [player, setPlayer] = useState(start);

  return (
    <div
      className="maze-player"
      style={{
        ...playerSize,
        left: player.y * playerSize.width,
        top: player.x * playerSize.height,
      }}
    >
      <Image
        style={{
          width: playerSize.width * 0.8,
          height: playerSize.height * 0.8,
        }}
        src={CharURL}
        alt="캐릭터"
      />
    </div>
  );
};
export default MazePlayer;
