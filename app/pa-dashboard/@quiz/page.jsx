import { wait } from "../../../lib/wait";

export default async function Quiz() {
  await wait(3000);
  return (
    <div className="p-5 bg-green-200 rounded">
      <h2 className="text-black">Quiz</h2>
    </div>
  );
}
