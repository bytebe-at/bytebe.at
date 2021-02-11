import Layout from "@components/Layout";
import { email } from "@lib/regex";
import React from "react";
import { FunctionComponent } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const getStaticProps = async () => ({
  props: {
    siteKey: process.env["RECAPTCHA_SITE"],
  },
});

const SignUpPage: FunctionComponent<{ siteKey: string }> = ({ siteKey }) => {
  const captchaRef = React.useRef<ReCAPTCHA>();
  const emailRef = React.useRef<HTMLInputElement>();
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>(undefined);
  return (
    <Layout>
      <div
        className="h-full bg-gray-100"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237e7e7e' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundPosition: "center",
        }}
      >
        <form
          action="/api/signup"
          method="post"
          className={`max-w-lg mx-auto p-8 h-full flex flex-col items-center justify-center ${
            isLoading ? "animate-pulse" : ""
          }`}
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const captcha = await captchaRef.current.executeAsync();
            if (email.exec(emailRef.current?.value) == null) {
              setError("Invalid email address");
              return;
            }

            try {
              const req = await fetch("/api/register", {
                method: "post",
                body: JSON.stringify({
                  email: emailRef.current.value,
                  captcha,
                }),
                headers: {
                  "content-type": "application/json",
                },
              });
              if (req.status !== 200) throw `${req.status}: ${req.statusText}`;
              console.log(await req.json());
            } catch (err) {
              setError(err.toString());
            }

            setLoading(false);
          }}
        >
          <h1 className="p-8 text-center text-5xl">Sign Up</h1>
          <div className="text-red-600 w-full p-2 py-1">{error}</div>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className={`bg-white p-3 px-4 w-full rounded-xl mb-4 shadow-lg focus:ring-2 ring-inset focus:outline-none ${
              error ? "ring-2 ring-red-500" : ""
            }`}
            placeholder="someone@example.com"
            required
            formNoValidate
          />

          <button
            type="submit"
            className={`bg-blue-700 text-white p-6 py-3 rounded-xl shadow-xl w-full text-center transition-all `}
            disabled={isLoading}
          >
            Sign Up
          </button>
        </form>
        <ReCAPTCHA sitekey={siteKey} ref={captchaRef} size="invisible" />
      </div>
    </Layout>
  );
};

export default SignUpPage;
