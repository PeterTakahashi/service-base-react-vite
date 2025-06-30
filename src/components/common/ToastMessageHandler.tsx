import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const ToastMessageHandler = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const successMessage = location.state?.successMessage;
  const errorMessage = location.state?.errorMessage;

  useEffect(() => {
    if ((successMessage || errorMessage) && navigationType === "PUSH") {
      if (errorMessage) {
        toast.error(errorMessage);
      }
      if (successMessage) {
        toast.success(successMessage);
      }
      // history state is not saved, so it won't be displayed again when going back
      window.history.replaceState({}, "", location.pathname);
    }
  }, [successMessage, errorMessage, navigationType, location.pathname]);

  return <Toaster position="top-center" />;
};
