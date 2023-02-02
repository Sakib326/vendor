import { message, Upload } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload/interface";
import { useEffect, useState } from "react";
interface PropsType {
  errorMessage?: any;
  maxSize?: number;
  onChange: Function;
  width?: number;
  imageSource?: string;
}
export const ImageInput = (props: PropsType) => {
  let errorMessage = props?.errorMessage;
  let maxSize = props?.maxSize ?? 2048;
  let width = props?.width ?? 150;
  let imageSource = props?.imageSource;

  const [imageUrl, setImageUrl] = useState<string>();
  const [isError, setIsError] = useState(errorMessage ? true : false);
  useEffect(() => {
    if (errorMessage) setIsError(true);
  }, [errorMessage]);

  const handleChange: UploadProps["onChange"] = (info: any) => {
    const isJpgOrPng =
      info.file.type === "image/jpeg" ||
      info.file.type === "image/png" ||
      info.file.type === "image/webp";
    const isInSize = info.file?.size / 1024 < maxSize;

    if (info?.fileList.length > 0 && isJpgOrPng && isInSize) {
      props?.onChange({ file: info?.file, type: info?.file?.type });

      const ImageLink = URL.createObjectURL(info?.file);
      setImageUrl(ImageLink);
    } else {
      props?.onChange();
      setImageUrl("");
      setIsError(true);
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/WEBP file!");
    }

    const isInSize = file.size / 1024 < maxSize;
    if (!isInSize) {
      message.error(`Image must smaller than ${maxSize}KB!`);
    }

    // Prevent upload
    return false;
  };

  const uploadButton =
    imageUrl || imageSource ? (
      <div style={{ width: `${width}px` }}>
        <img
          crossOrigin="anonymous"
          src={imageUrl ?? imageSource}
          alt="avatar"
          style={{ width: "100%" }}
        />
      </div>
    ) : (
      <div
        style={{ width: `${width}px` }}
        className={`${isError ? "image_error" : null}`}
      >
        <img src="/images/misc/image_input.svg" alt="input_image" />
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    );

  return (
    <div style={{ width: `${width}px` }}>
      <Upload
        accept="image/png, image/jpeg, image/webp"
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
