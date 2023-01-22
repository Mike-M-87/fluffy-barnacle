import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.location.assign("/coinflip")
  }, [])
  return (
    <div></div>
  )
}