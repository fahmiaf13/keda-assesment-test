import Lottie from "lottie-react";
import LoadingIcon from "@/assets/icon/loading.json";

export default function Loading() {
  const style = {
    height: 200,
    width: 200,
  };
  return (
    <div className="fixed top-0 left-0 bg-white z-20 h-full w-full flex justify-center items-center">
      <Lottie animationData={LoadingIcon} style={style} />
    </div>
  );
}
