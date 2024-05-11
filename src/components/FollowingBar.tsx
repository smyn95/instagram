"use client";

import useMe from "@/hooks/me";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";

export default function FollowingBar() {
  const { user, isLoading, error } = useMe();
  const users = user?.following && [
    ...user?.following,
    ...user?.following,
    ...user?.following,
  ];
  return (
    <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto wrapper relative z-0">
      {isLoading ? (
        <PropagateLoader size={8} color="red" />
      ) : (
        !users || (users.length === 0 && <p>{`친구 읎다`}</p>)
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              href={`/user/${username}`}
              className="flex flex-col items-center w-20"
            >
              <Avatar image={image} highlight />
              <p className="w-full text-sm text-center text-ellipsis overflow-hidden">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
