import { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHndler = async (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex min-h-[80vh] items-center">
      <div className="m-auto flex min-w-[340px] flex-col items-start gap-3 rounded-xl border p-8 text-sm text-zinc-600 shadow-lg sm:min-w-96">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "Log in"} to book
          appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="mt-1 w-full rounded border border-zinc-300 p-2"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Emails</p>
          <input
            className="mt-1 w-full rounded border border-zinc-300 p-2"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="mt-1 w-full rounded border border-zinc-300 p-2"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <button
          className="w-full rounded-md bg-primary py-2 text-base text-white"
          onClick={submitHndler}
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer text-primary underline"
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?
            <span
              className="cursor-pointer text-primary underline"
              onClick={() => {
                setState("Sign Up");
              }}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
