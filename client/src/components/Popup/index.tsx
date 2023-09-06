import { useRef } from 'react'
import { useClickOutside } from '@/hooks/ClickOutside'
import { AddColumn } from './AddColumn'
import { AddTask } from './AddTask'
import { EditBoard } from './EditBoard'
import { DeleteBoard } from './DeleteBoard'
import { AddBoard } from './AddBoard'
import { Login } from './Login'

type Props = {
  popupName: string
  setPopupName: (arg: string) => void
}

export const Popup: React.FC<Props> = props => {
  const popupMenu = useRef(null)
  useClickOutside(popupMenu, () => props.setPopupName(''))

  return (
    <>
      <div className="absolute top-0 z-30 h-screen w-screen bg-black opacity-40" />
      <div
        className={`${
          props.popupName === 'login'
            ? 'w-[600px] outline outline-1 outline-offset-0 outline-zinc-500 dark:outline-zinc-600'
            : 'w-[480px]'
        } fixed left-1/2 top-1/2 z-50 max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white dark:bg-gray-normal`}
        ref={popupMenu}
      >
        {props.popupName === 'login' && (
          <Login
            popupName={props.popupName}
            setPopupName={props.setPopupName}
          />
        )}
        <AddColumn
          popupName={props.popupName}
          setPopupName={props.setPopupName}
        />
        <AddTask
          popupName={props.popupName}
          setPopupName={props.setPopupName}
        />
        <EditBoard
          popupName={props.popupName}
          setPopupName={props.setPopupName}
        />
        <DeleteBoard
          popupName={props.popupName}
          setPopupName={props.setPopupName}
        />
        {props.popupName === 'add_board' && (
          <AddBoard setPopupName={props.setPopupName} />
        )}
      </div>
    </>
  )
}
