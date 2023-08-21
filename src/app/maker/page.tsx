import GameTemplate from '@components/templates/GameTemplate';
import MakerMazeMaker from '@components/organisms/MakerMazeMaker';
import MakerMazeForm from '@components/organisms/MakerMazeForm';
import MakerMazeController from '@components/organisms/MakerMazeController';

export default function Maker() {
  return (
    <GameTemplate href="/" title="Maker">
      <MakerMazeForm />
      <MakerMazeMaker />
      <MakerMazeController />
    </GameTemplate>
  );
}
