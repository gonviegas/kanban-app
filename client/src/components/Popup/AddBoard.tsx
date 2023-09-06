import { useState } from 'react'
import { X } from '@/assets/svgs'

type Props = {
  setPopupName: (arg: string) => void
}

export const AddBoard: React.FC<Props> = props => {
  const [name, setName] = useState('')
  const [columns, setColumns] = useState<Array<object>>([])

  const addColumn = () => {
    setColumns([...columns, {}])
    console.log(columns)
  }

  const removeColumn = (index: number) => {
    console.log(index)
    const newColumns = [...columns]
    newColumns.splice(index, 1)
    setColumns(newColumns)
    console.log(columns)
  }
  return (
    <>
      <div className="flex flex-col gap-6 p-9 text-black dark:text-white">
        <div className="text-h2 dark:text-white">
          <span>Add New Board</span>
        </div>

        <form className="flex flex-col space-y-2">
          <label className="text-h3 text-secondary-500 dark:text-white">
            Name
          </label>
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            name="name"
            value={name}
            placeholder=""
            className="rounded-md border-secondary-500/[0.3] bg-white focus:border-secondary-500 focus:ring-0 dark:bg-gray-normal"
          />
        </form>

        <div className="flex flex-col space-y-2">
          <label className="text-h3 text-secondary-500 dark:text-white">
            Columns
          </label>
          {columns.map((element, index) => (
            <div className="flex gap-x-3" key={index}>
              <input
                type="text"
                name=""
                placeholder="UNTITLED"
                className="w-full rounded-md border-secondary-500/[0.3] bg-white focus:border-secondary-500 focus:ring-0 dark:bg-gray-normal"
              />
              {index ? (
                <button
                  onClick={() => removeColumn(index)}
                  className="fill-secondary-500"
                >
                  {X}
                </button>
              ) : null}
            </div>
          ))}
          <button
            onClick={addColumn}
            className="w-full rounded-full bg-secondary-100 py-2.5 text-h3 text-primary-500 hover:bg-primary-300 dark:bg-white"
          >
            + Add New Column
          </button>
        </div>

        <div className="">
          <button
            onClick={() => props.setPopupName('')}
            className="w-full rounded-full bg-primary-500 py-2.5 text-h3 text-white hover:bg-primary-300"
          >
            Create New Board
          </button>
        </div>
      </div>
    </>
  )
}
