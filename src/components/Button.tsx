export default function Button() {
    const isloggedin=true;

  return (
    <div>
      <button>button</button>
      {isloggedin ? "helo":"world"}

    </div>
  )
}
