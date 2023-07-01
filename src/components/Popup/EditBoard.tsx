type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

const EditBoard = (props: Props) => {
  return (
    <>
      {props.popupName === 'edit_board' &&
        <div className="flex flex-col">
          <div>
            Edit Board
          </div>
          <button onClick={() => props.setPopupName("")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
            Edit Board
          </button>
        </div>
      }

    </>
  )
}

export default EditBoard
