"use client";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useUser } from "src/context/user.context";
import { generateColor } from "src/utils/format";

type UserAvatarProps = {
  size?: 'small' | 'large';
};

function UserAvatar({ size }: UserAvatarProps) {
  const { user } = useUser();

  const avatarBgColor = user
    ? generateColor(`${user.name.firstname} ${user.name.lastname}`)
    : "";
  let initial = user && user.name.firstname ? user.name.firstname[0] : "";
  if (!initial) {
    initial = user && user.email ? user.email[0] : "U";
  }

  let avatarSize  = size === 'large' ? 'w-[4rem] h-[4rem]' : 'w-[2rem] h-[2rem]'
  let iconSize  = size === 'large' ? 'text-[4rem]' : 'text-[1.5rem]'

  return user ? (
    <div
      className={`flex shadow-sm justify-center items-center text-white rounded-full ${avatarSize} text-base pt-[2px] uppercase`}
      style={{ backgroundColor: avatarBgColor }}
    >
      {initial}
    </div>
  ) : (
    <HiOutlineUserCircle className={`text-secondary ${iconSize}`} />
  );
}

export default UserAvatar;
