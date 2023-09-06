type Props = {
  popupName: string
  setPopupName: (arg: string) => void
}

export const AddTask: React.FC<Props> = props => {
  return (
    <>
      {props.popupName === 'add_task' && (
        <div className="flex flex-col">
          <div>Add Task</div>
          <button
            onClick={() => props.setPopupName('')}
            className="rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300"
          >
            + Add New Task
          </button>
        </div>
      )}
    </>
  )
}
