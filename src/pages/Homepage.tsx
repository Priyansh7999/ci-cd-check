export default function Homepage() {
    const isloggedin=true;
  return (
        <div>
            <p>Leave Management System</p>
            <p>Homepage</p>
            <p>this is the 3rd line</p>
            <div>
                <button>Hello world</button>
            </div>
            {isloggedin ? "helo":"world"}
        </div>
    )
}
