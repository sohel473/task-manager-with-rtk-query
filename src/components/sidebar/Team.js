import React from "react";
import { useGetTeamMembersQuery } from "../../features/team/teamApi";
import TeamMember from "./TeamMember";

export default function Team() {
  const { data: team, error, isLoading } = useGetTeamMembersQuery();

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error: {error.error}</div>;
  } else if (team) {
    // console.log(team);
    content = team.map((member) => (
      <TeamMember key={member.id} member={member} />
    ));
  }

  return (
    <>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">{content}</div>
      </div>
    </>
  );
}
