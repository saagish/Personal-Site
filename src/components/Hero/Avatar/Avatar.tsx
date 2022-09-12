import logo from "../../../img/saagithan-profile.png";
import clsx from 'clsx'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className,
    // 'ring-[10px]'
    )}>
      <img src={logo} alt='avatar' width="280"/>
    </div>
  )
}

export default Avatar
