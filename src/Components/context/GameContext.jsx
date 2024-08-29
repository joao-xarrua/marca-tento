import { createContext, useEffect, useState } from "react";

export const GameContext = createContext()

export const GameProvider = ({children}) => {
  const [gameStatus, setGameStatus] = useState(false)
  const [point, setPoint] = useState(1)
  const [activePointOption, setActivePointOption] = useState(null);
  const [teamOne, setTeamOne] = useState({
    teamName: 'Nós',
    points: 0
  })
  const [teamTwo, setTeamTwo] = useState({
    teamName: 'Eles',
    points: 0
  })
  const [total, setTotal] = useState(12)
  const [winner, setWinner] = useState(false)

  useEffect(() => {
    if (teamOne.points >= total) {
      setWinner(teamOne)
    } else if (teamTwo.points >= total) {
      setWinner(teamTwo)
    } else {
      setWinner(false)
    }
  }, [teamOne, teamTwo])

  useEffect(() => {
    if (winner !== false) {
      setGameStatus(false)
    } else {
      setGameStatus(true)
    }
    
  }, [winner])

  function handleScore(e) {
    if (gameStatus) {
      const target = e.currentTarget.id;
      switch (target) {
        case "addOne":
          setTeamOne({ teamName:teamOne.teamName, points: parseInt(teamOne.points)+point})
          break;
        case "removeOne":
          if (point >= teamOne.points) {
            setTeamOne({ teamName:teamOne.teamName, points: 0})
          } else {
            setTeamOne({ teamName:teamOne.teamName, points: parseInt(teamOne.points)-point})
          }
          break;
        case "addTwo":
          setTeamTwo({ teamName:teamTwo.teamName, points: parseInt(teamTwo.points)+point})
          break;
        case "removeTwo":
          if (point >= teamTwo.points) {
            setTeamTwo({ teamName:teamTwo.teamName, points: 0})
          } else {
            setTeamTwo({ teamName:teamTwo.teamName, points: parseInt(teamTwo.points)-point})
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
  }

  return <GameContext.Provider value={{point, setPoint, activePointOption, setActivePointOption, teamOne, setTeamOne, teamTwo, setTeamTwo, handleScore, total, winner, gameStatus}}>{children}</GameContext.Provider>
}