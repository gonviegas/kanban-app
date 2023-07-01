import { useState } from "react";
import { X } from "@/assets/svgs";

type Props = {
  setPopupName: (arg: string) => void;
};

const AddBoard = (props: Props) => {
  const [name, setName] = useState("")
  const [columns, setColumns] = useState<Array<Object>>([])

  const addColumn = () => {
    setColumns([...columns, {}])
    console.log(columns)
  }

  const removeColumn = (index: number) => {
    console.log(index)
    const newColumns = [...columns];
    newColumns.splice(index, 1);
    setColumns(newColumns)
    console.log(columns)
  }
  return (
    <>
      <div className="flex flex-col p-9 gap-6 text-black dark:text-white">
        <div className="text-h2 dark:text-white">
          <span>
            Add New Board
          </span>
        </div>

        <form className="space-y-2 flex flex-col">
          <label className="text-h3 text-secondary-500 dark:text-white">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
            placeholder=""
            className="bg-white dark:bg-gray-500 rounded-md border-secondary-500/[0.3] focus:ring-0 focus:border-secondary-500"
          />
        </form>

        <div className="space-y-2 flex flex-col">
          <label className="text-h3 text-secondary-500 dark:text-white">
            Columns
          </label>
          {columns.map((element, index) => (

            <div className="flex gap-x-3" key={index}>
              <input type="text"
                name=""
                placeholder="UNTITLED"
                className="w-full bg-white dark:bg-gray-500 rounded-md border-secondary-500/[0.3] focus:ring-0 focus:border-secondary-500"
              />
              {
                index ?
                  <button onClick={() => removeColumn(index)} className="fill-secondary-500">{X()}</button>
                  : null
              }
            </div>
          ))}
          <button onClick={addColumn} className="rounded-full bg-secondary-100 dark:bg-white py-2.5 w-full text-primary-500 text-h3 hover:bg-primary-300">
            + Add New Column
          </button>
        </div>

        <div className="">
          <button onClick={() => props.setPopupName("")} className="rounded-full bg-primary-500 py-2.5 w-full text-white text-h3 hover:bg-primary-300">
            Create New Board
          </button>
        </div>
      </div>
    </>
  )
}

export default AddBoard
