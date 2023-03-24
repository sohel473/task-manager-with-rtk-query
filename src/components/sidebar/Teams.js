import React from "react";
import sumit from "../../assets/images/avatars/sumit.png";
import sadh from "../../assets/images/avatars/sadh.png";
import akash from "../../assets/images/avatars/akash.png";
import salahuddin from "../../assets/images/avatars/salahuddin.png";
import riyadh from "../../assets/images/avatars/riyadh.png";
import ferdous from "../../assets/images/avatars/ferdous.png";
import almas from "../../assets/images/avatars/almas.png";

export default function Teams() {
  return (
    <>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">
          <div className="checkbox-container">
            <img src={sumit} alt="Sumit Saha" className="team-avater" />
            <p className="label">Sumit Saha</p>
          </div>

          <div className="checkbox-container">
            <img src={sadh} alt="Sadh Hasan" className="team-avater" />
            <p className="label">Sadh Hasan</p>
          </div>

          <div className="checkbox-container">
            <img src={akash} alt="Akash Ahmed" className="team-avater" />
            <p className="label">Akash Ahmed</p>
          </div>

          <div className="checkbox-container">
            <img
              src={salahuddin}
              alt="Md Salahuddin"
              className="team-avater"
            />
            <p className="label">Md Salahuddin</p>
          </div>

          <div className="checkbox-container">
            <img
              src={riyadh}
              alt="Riyadh Hassan"
              className="team-avater"
            />
            <p className="label">Riyadh Hassan</p>
          </div>

          <div className="checkbox-container">
            <img
              src={ferdous}
              alt="Ferdous Hassan"
              className="team-avater"
            />
            <p className="label">Ferdous Hassan</p>
          </div>

          <div className="checkbox-container">
            <img src={almas} alt="Arif Almas" className="team-avater" />
            <p className="label">Arif Almas</p>
          </div>
        </div>
      </div>
    </>
  );
}
