import { Plus } from '@/assets/svgs'

type Props = {
  setPopupName: (arg: string) => void
}

export const AddTaskBtn: React.FC<Props> = props => {
  return (
    <>
      <button
        onClick={() => props.setPopupName('add_task')}
        className="hidden rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300 sm:flex"
      >
        + Add New Task
      </button>
      <button
        onClick={() => props.setPopupName('add_task')}
        className="flex rounded-full bg-primary-500 fill-white px-6 py-3 text-white hover:bg-primary-300 sm:hidden"
      >
        {Plus}
      </button>
    </>
  )
}
