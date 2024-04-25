import { createContext, useState } from "react";

export const GameContext = createContext()

export const GameProvider = ({children}) => {
  const [point, setPoint] = useState(1)
  const [activePointOption, setActivePointOption] = useState(null);
  const [teamOne, setTeamOne] = useState(0)
  const [teamTwo, setTeamTwo] = useState(0)

  function handleScore(e) {
    const target = e.currentTarget.id;
    switch (target) {
      case "addOne":
        setTeamOne(teamOne+point)
        break;
      case "removeOne":
        if (point >= teamOne) {
          setTeamOne(0)
        } else {
          setTeamOne(teamOne-point)
        }
        break;
      case "addTwo":
        setTeamTwo(teamTwo+point)
        break;
      case "removeTwo":
        if (point >= teamTwo) {
          setTeamTwo(0)
        } else {
          setTeamTwo(teamTwo-point)
        }
        break;
      default:
        setPoint(1)
        setActivePointOption(null)
        break;
    }
    setPoint(1)
    setActivePointOption(null)
  }

  return <GameContext.Provider value={{point, setPoint, activePointOption, setActivePointOption, teamOne, setTeamOne, teamTwo, setTeamTwo, handleScore}}>{children}</GameContext.Provider>
}