import CustLink from "../components/CustLink";

export default function NotFound() {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div>
        <h1 className="text-9xl font-bold">
          404
        </h1>
        <p className="text-center mt-3">
          her love is not found
        </p>
        <CustLink href="/">
          ⬅️ Go back to your code
        </CustLink>
      </div>
    </div>
  )
}