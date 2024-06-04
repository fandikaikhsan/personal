import { TypeAnimation } from "react-type-animation"

export default function HomeTypeAnimationWrap() {
  return (
    <TypeAnimation
      sequence={[
        "Hr",
        200,
        "H",
        500,
        "Hello",
        1000,
        "",
        500,
        "Hel",
        300,
        "H",
        700,
        "Halo",
        2000,
        "",
        "Bonjourr",
        200,
        "Bonj",
        200,
        "Bonjour",
        1500,
        "Hola",
        500,
        "",
        500,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "12em", display: "inline-block", fontWeight: "bold" }}
    />
  )
}
