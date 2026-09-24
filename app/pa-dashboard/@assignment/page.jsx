import { wait } from "../../../lib/wait";

export default async function Assignment() {
  await wait(8000);
  return (
    <div className="p-5 bg-red-200 rounded">
      <h2 className="text-black">Assignment</h2>
    </div>
  );
}
