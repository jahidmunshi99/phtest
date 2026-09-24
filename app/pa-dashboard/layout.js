export default function Layout({ children, assignment, quiz, notification }) {
  return (
    <>
      <div>{children}</div>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black mt-5">
        <main className="grid grid-cols-2 gap-10 w-full px-[5%]">
          <div className="grid grid-rows-2 gap-5 min-h-screen text-center">
            {assignment}
            {quiz}
          </div>

          {notification}
        </main>
      </div>
    </>
  );
}
