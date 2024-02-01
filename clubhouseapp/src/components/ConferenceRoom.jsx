import React from "react";
import { HMSPrebuilt } from "@100mslive/roomkit-react";
const ConferenceRoom = () => {
  return (
    <div>
      <div style={{ height: "100vh" }}>
        <HMSPrebuilt roomCode="cmb-rmxj-izl" />
      </div>
    </div>
  );
};

export default ConferenceRoom;
