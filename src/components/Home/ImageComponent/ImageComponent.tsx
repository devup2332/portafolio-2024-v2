import { LoaderIcon } from "@/components/Icons";
import { useEffect, useRef, useState } from "react";

const ImageComponent = ({ url }: { url: string }) => {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const loadData = async () => {
    const blob = await fetch(url).then((res) => res.blob());
    setLoading(false);
    if (imgRef.current) {
      imgRef.current.src = URL.createObjectURL(blob);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return loading ? (
    <LoaderIcon className="animate-spin stroke-current text-white justify-self-center self-center" />
  ) : (
    <img
      ref={imgRef}
      className="object-cover block h-full w-full outline-none ring-0"
    />
  );
};

export default ImageComponent;
