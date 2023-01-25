import { message, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload/interface";
import { useState } from "react";

const ImageInput = ({
  errorMessage,
  accept,
  maxSize = 2,
  onChange,
  width = 150,
}: any) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [isError, setIsError] = useState(errorMessage ? true : false);

  const handleChange: UploadProps["onChange"] = (info: any) => {
    const isJpgOrPng =
      info.file.type === "image/jpeg" ||
      info.file.type === "image/png" ||
      info.file.type === "image/webp";
    const isInSize = info.file?.size / 1024 / 1024 < maxSize;

    if (info?.fileList.length > 0 && isJpgOrPng && isInSize) {
      onChange(info?.file);

      const ImageLink = URL.createObjectURL(info?.file);
      setImageUrl(ImageLink);
    } else {
      setImageUrl("");
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/WEBP file!");
      setIsError(true);
    }
    const isInSize = file.size / 1024 / 1024 < maxSize;
    if (!isInSize) {
      message.error(`Image must smaller than ${maxSize}MB!`);
      setIsError(true);
    }

    // Prevent upload
    return false;
  };
  const uploadButton = imageUrl ? (
    <div style={{ width: `${width}px` }}>
      <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
    </div>
  ) : (
    <div
      style={{ width: `${width}px` }}
      className={`${isError ? "image_error" : null}`}
    >
      <img src="/images/misc/image_input.svg" alt="" />
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );

  return (
    <div style={{ width: `${width}px` }}>
      <Upload
        accept={`${accept ?? "image/png, image/jpeg, image/webp"} `}
        beforeUpload={beforeUpload}
        onChange={(e) => {
          handleChange(e);
        }}
        maxCount={1}
        multiple={false}
      >
        {uploadButton}
      </Upload>
    </div>
  );
};

export default ImageInput;
