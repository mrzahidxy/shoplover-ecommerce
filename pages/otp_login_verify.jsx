import { useState, createRef, useEffect } from "react";

const OtpLoginVerify = (props) => {
  const lineIndex = props.index;

  const numerOfInputs = props?.numerOfInputs || 6;

  const [inputRefsArray] = useState(() =>
    Array.from({ length: numerOfInputs }, () => createRef())
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const [letters, setLetters] = useState(() =>
    Array.from({ length: numerOfInputs }, () => "")
  );

  const handleKeyPress = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex < numerOfInputs - 1 ? prevIndex + 1 : 0;
      const nextInput = inputRefsArray?.[nextIndex]?.current;
      nextInput.focus();
      nextInput.select();
      return nextIndex;
    });
  };

  useEffect(() => {
    console.log(letters);

    if (inputRefsArray?.[0]?.current) {
      inputRefsArray?.[0]?.current?.focus();
    }

    window.addEventListener("keyup", handleKeyPress, false);

    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(letters);
  };

  return (
    <div className="container my-10 lg:px-40">
      <div className="px-6 py-16 bg-[#F6F6F6] rounded-xl shadow-lg">
        <div className="w-88 mx-auto">
          <p className="mx-auto text-2xl text-center mb-8">OTP Verification</p>

          <p className="text-center">
            We’ll send an OTP to This Mobile Number <br />{" "}
            <b>+88019123456987</b> <button>Click here</button> to change
          </p>

          <form onSubmit={submitForm}>
            <div className="text-center mt-5">
              <div>
                {inputRefsArray.map((ref, index) => {
                  return (
                    <input
                      className="bg-black opacity-75 border-b-4 border-b-[#FFC800] text-white m-2 border h-10 w-10 text-center form-control rounded"
                      key={index}
                      ref={ref}
                      type="text"
                      id={`box${index}-1`}
                      onChange={(e) => {
                        const { value } = e.target;
                        setLetters((letters) =>
                          letters.map((letter, letterIndex) =>
                            letterIndex === index ? value : letter
                          )
                        );
                      }}
                      onClick={(e) => {
                        setCurrentIndex(index);
                        e.target.select();
                      }}
                      value={letters[index]}
                      max={"1"}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mb-2 w-72 lg:w-96 px-4">
              <button
                className="rounded bg-black text-white w-80 py-2 px-3 mx-auto"
                onClick={submitForm}
              >
                Login with OTP
              </button>
            </div>
          </form>

          <div className="flex justify-between px-4">
            <p className="mt-2">Didn’t recieve the code?</p>
            <button> Resend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpLoginVerify;
