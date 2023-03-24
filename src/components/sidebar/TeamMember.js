import React from "react";
import avatars from "../../assets/images/avatars/avatars";

export default function TeamMember({ member }) {
  const { name, avatar } = member;
  const avatarSrc = avatars[avatar];

  return (
    <>
      <div className="checkbox-container">
        <img src={avatarSrc} alt="Sumit Saha" className="team-avater" />
        <p className="label">{name}</p>
      </div>
    </>
  );
}
