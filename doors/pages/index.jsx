import { useState } from "react";
import Door from "../components/Door";
import Gift from "../components/Gift";
import DoorModel from "../model/doorModel";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1))

  return (
    <div style={{ display: 'flex' }}>
      <Door door={d1} />
    </div>
  )
}
