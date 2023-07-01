type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

const AddColumn = (props: Props) => {
  return (
    <>
      {props.popupName === 'add_column' &&
        <div className="flex flex-col">
          <div>
            Add Column
          </div>
          <button onClick={() => props.setPopupName("")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
            + Add New Column
          </button>
        </div>
      }
    </>
  )
}

export default AddColumn
