import toast from "react-hot-toast";

export const withDefaultOnError = <A, B>(
  cb: () => A,
  defaultValue: B
): A | B => {
  try {
    return cb();
  } catch (_) {
    toast.error("An error occurred");
    return defaultValue;
  }
};
