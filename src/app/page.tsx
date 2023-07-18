'use client';
import { useRouter } from 'next/navigation';

import HomeTemplate from '@templates/HomeTemplate/HomeTemplate';

export default function Home() {
  const rotuer = useRouter();
  const handlePlayButton = () => {
    rotuer.push('/maplist');
  };
  const handleMakeButton = () => {
    rotuer.push('/maker');
  };

  return (
    <section>
      <HomeTemplate
        handleMakeButton={handleMakeButton}
        handlePlayButton={handlePlayButton}
      />
    </section>
  );
}
