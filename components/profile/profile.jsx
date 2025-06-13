import Image from "next/image";
import avatarSrc from "../shared/img/avatar.png";

export function Profile({ playerInfo }) {
  return (
    <>
      <Image className="size-12" src={avatarSrc} alt="avatar" />
      <div className="overflow-hidden">
        <h5 className="text-lg leading-tight truncate">{playerInfo.name}</h5>
        <p className="text-slate-400 text-xs leading-tight">
          place: {playerInfo.place}
        </p>
      </div>
    </>
  );
}
