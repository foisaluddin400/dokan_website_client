const FileUpload = ({ onChange }: any) => {
  return (
    <input
      type="file"
      onChange={onChange}
      className="w-full border border-border p-2 rounded-xl"
    />
  );
};

export default FileUpload;