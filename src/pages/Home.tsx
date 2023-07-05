import { useState } from "react";
import Header from '@/components/Header'
import Popup from '@/components/Popup';
import Sidebar from "@/components/Sidebar";
import { Board } from "@/components/Board";

if (typeof window !== 'undefined') {
  if (window.localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

export const Home: React.FC = () => {
  const [popupName, setPopupName] = useState("login")
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [boardName, setBoardName] = useState("")

  return (
    <>
      <main
        className="!outline-none"
      >
        <Header
          setPopupName={popupName => setPopupName(popupName)}
          sidebarToggle={sidebarToggle}
          setSidebarToggle={active => setSidebarToggle(active)}
          boardName={boardName}
        />
        <Sidebar
          setToggle={active => setSidebarToggle(active)}
          toggle={sidebarToggle}
          setPopupName={popupName => setPopupName(popupName)}
          setBoardName={setBoardName}
        />
        <Board setPopupName={popupName => setPopupName(popupName)}
          sidebarToggle={sidebarToggle}
        />
        {popupName &&
          <Popup
            popupName={popupName}
            setPopupName={popupName => setPopupName(popupName)}
          />
        }
      </main>
    </>
  )
}
