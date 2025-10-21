import Link from "next/link";

export default function StudentInfo () {
  const name = "Edwin Olaez";

  return (
    <div>
      <p>{name}</p>
      <p>
        Github: <a target="_blank" rel="noopener nereferrer" href="https://github.com/edwinolaez/cprg306.git">edwinolaez/cprg306</a>
        </p>
    </div>
  )
}