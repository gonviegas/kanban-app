type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

const AddTask = (props: Props) => {
  return (
    <>
      {props.popupName === "add_task" &&
        <div className="flex flex-col">
          <div>
            Add Task
          </div>
          <button onClick={() => props.setPopupName("")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
            + Add New Task
          </button>
        </div>
      }
    </>
  )
}

export default AddTask
