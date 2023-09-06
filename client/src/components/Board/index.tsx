import { AddColumnBtn } from './AddColumnBtn'

type Props = {
  setPopupName: (arg: string) => void
  sidebarToggle: boolean
}

export const Board: React.FC<Props> = props => {
  return (
    <div
      className={`${
        props.sidebarToggle ? 'sm:pl-72' : ''
      } fixed top-0 z-0 h-screen w-full bg-secondary-100 dark:bg-gray-dark`}
    >
      <AddColumnBtn setPopupName={props.setPopupName} />
    </div>
  )
}
