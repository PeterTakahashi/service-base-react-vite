import React from "react";

type ErrorMessagesDisplayProps = {
  errorMessages: string[] | null;
};

export const ErrorMessagesDisplay: React.FC<ErrorMessagesDisplayProps> = ({
  errorMessages,
}) => {
  return (
    <>
      {errorMessages && (
        <p className="mt-4 text-center text-sm text-red-600">
          {errorMessages.map((msg, index) => (
            <span key={index}>
              {msg}
              {index < errorMessages.length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
    </>
  );
};
