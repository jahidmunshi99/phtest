import { wait } from "../../../lib/wait";

export default async function Notification() {
  await wait(10000);
  return (
    <div className="p-5 bg-yellow-200 rounded">
      <h2 className="text-black">Notifications</h2>
    </div>
  );
}
