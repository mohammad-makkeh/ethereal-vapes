import cn from "lib/utils";
import TransitionIn from "./TransitionIn";

export default function Glow({ color = "blue", className, transitionFrom = "down" }: { color?: "blue" | "gold", className?: string, transitionFrom?: "up" | "down" | "left" | "right" }) {
  return (
    <TransitionIn from={transitionFrom} className={cn("absolute -top-16 -right-16 w-1/2 -z-10", className)}>
      <img src={"/glow-" + color + ".png"} alt="glow"  />
    </TransitionIn>
  )
}
