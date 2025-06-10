import Image from "next/image";
import avatarSrc from "../shared/img/avatar.png";

export function Profile() {
  return (
    <>
      <Image className="size-12" src={avatarSrc} alt="avatar" />
      <div>
        <h5 className="text-lg leading-tight">User Name</h5>
        <p className="text-slate-400 text-xs leading-tight">place: 1234</p>
      </div>
    </>
  );
}
