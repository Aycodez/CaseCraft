"use client";

import { toast } from "react-toastify";
import { UploadDropzone } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="w-3/4 py-2 mx-auto">
      <UploadDropzone
        input={{ configId: undefined }}
        appearance={{
          container: {
            height: "400px",
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={([data]) => {
          const configId = data.serverData?.configId;
          // console.log("configId: ", configId);
          toast.success("Successfully uploaded!!!");
          router.push(`/configure/design?id=${configId}`);
        }}
        onUploadError={(error) => {
          console.error(`ERROR! ${error.message}`);
          toast.error(
            "Error uploading file Please choose a PNG, JPG, JPEG image or check internet connection"
          );
        }}
      />
    </div>
  );
};

export default Page;
