import clsx from 'clsx'
import Avatar from './Avatar'
import { useTranslation } from 'react-i18next'
import Title from './Title'
import Typed from 'react-typed';

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(className)}>
      <div className='flex justify-center'>
      <div><Avatar/></div>
      </div>
      <div className='flex justify-center'>
      <div><Title/></div>
      </div>
      <div>
        <Typed 
        strings={[
          t('Hero.subtitle.reactDev'),
          t('Hero.subtitle.CarromPlayer'),
          t('Hero.subtitle.hobbyMusicLover'),
        ]}
        fadeOut
        loop
        backDelay={40}
        typeSpeed={120}
        className="flex justify-center text-3xl "
        
        />
      </div>
    </div>
  )
}

export default Hero
