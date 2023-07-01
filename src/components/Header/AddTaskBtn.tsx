import { Plus } from "@/assets/svgs"

type Props = {
  setPopupName: (arg: string) => void;
};

const AddTaskBtn = (props: Props) => {
  return (
    <>
      <button onClick={() => props.setPopupName("add_task")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white hidden sm:flex text-h3 hover:bg-primary-300">+ Add New Task</button>
      <button onClick={() => props.setPopupName("add_task")} className="rounded-full bg-primary-500 px-6 py-3 text-white flex sm:hidden fill-white hover:bg-primary-300">{Plus()}</button>
    </>
  )
}

export default AddTaskBtn
