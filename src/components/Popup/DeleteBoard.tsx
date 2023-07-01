type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

const DeleteBoard = (props: Props) => {
  return (
    <>
      {props.popupName === 'delete_board' &&
        <div className="flex flex-col">
          <div>
            Delete Board
          </div>
          <button onClick={() => props.setPopupName("")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
            Delete Board
          </button>
        </div>
      }

    </>
  )
}

export default DeleteBoard
