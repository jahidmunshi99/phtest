export default function DashboardPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black mt-5">
      <main className="grid grid-cols-2 gap-10 w-full px-[5%]">
        <div className="grid grid-rows-2 gap-5 min-h-screen text-center">
          <div className="w-full border border-white p-4">Assignment</div>
          <div className="w-full border border-white p-4">Quiz</div>
        </div>
        <div className="w-full border border-white p-4 text-center">
          Notification
        </div>
      </main>
    </div>
  );
}
