import { useState } from "react";

type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

export const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <div className="flex p-8 gap-1 text-black dark:text-white items-center">
        <div className="flex flex-col justify-left gap-6 w-1/2 items-center">
          <button
            className="rounded-md bg-purple-600 h-12 w-full text-white text-p2 hover:bg-purple-800 hover:scale-[97%]"
          >
            <span>
              Login with Github
            </span>
          </button>
          <button
            className="rounded-md bg-red-600 h-12 w-full text-white text-p2 hover:bg-red-800 hover:scale-[97%]"
          >
            <span>
              Login with Google
            </span>
          </button>
          <button
            className="rounded-md bg-blue-600 h-12 w-full text-white text-p2 hover:bg-blue-800 hover:scale-[97%]"
          >
            <span>
              Login as Guest
            </span>
          </button>

        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <span className="text-h3 uppercase text-secondary-500">
            or
          </span>
        </div>
        <div className="flex flex-col justify-right w-1/2 items-center">
          <label className="text-h3 pb-4 text-secondary-500 dark:text-white justify-center">
            Login with Email
          </label>
          <form className="space-y-2 w-full justify-center">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              className="w-full h-12 text-p2 items-center placeholder:text-p1 bg-slate-100 dark:bg-zinc-800 rounded-md border-secondary-500/[0.2] focus:ring-0 hover:border-secondary-500/[0.7] focus:border-blue-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
              className="w-full h-12 text-p2 placeholder:text-p1 bg-slate-100 dark:bg-zinc-800 rounded-md border-secondary-500/[0.2] focus:ring-0 hover:border-secondary-500/[0.7] focus:border-blue-500"
            />
            <button className="flex-col text-p2 text-secondary-500 dark:text-gray-400 font-thin ml-1 hover:text-gray-900 dark:hover:text-gray-200">
              Forgot password?
            </button>
            <div className="flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  className="!outline-none appearance-none uppercase h-5 w-5 bg-slate-100 dark:bg-zinc-800 rounded-md border-secondary-500/[0.2] ring-0 default:ring-0 checked:ring-0 focus:ring-0 focus:ring-offset-0 hover:bg-slate-300 checked:hover:bg-slate-300 dark:hover:bg-slate-600hover:border-secondary-500/[0.2] checked:hover:border-secondary-500/[0.2]  "
                />
                <label className="pl-2 align-middle text-secondary-500 dark:text-white text-p2 font-semibold">
                  Remember me
                </label>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="login"
                  className="uppercase w-20 h-10 text-p2 text-white placeholder:text-p1 bg-green-600 rounded-md border-secondary-500/[0.2] focus:ring-0 focus:border-secondary-500 hover:scale-[97%] hover:bg-green-700"
                />
              </div>
            </div>
          </form>
          <div className="flex items-center align-middle gap-2 justify-end pt-5 w-full">
            <button className="flex-col text-p2 dark:text-blue-400 dark:hover:text-blue-600 text-blue-500 hover:text-blue-700 text-[14px]">
              Create account
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
