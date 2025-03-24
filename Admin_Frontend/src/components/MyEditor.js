import { Editor } from "@tinymce/tinymce-react";

export default function MyEditor({setContent}) {

  // Handle content change
  const handleEditorChange = (newContent) => {
    setContent(newContent); // Save HTML in state
  };

  const BASE_URL = process.env.REACT_APP_BASE_URL

  return (
    <div className="p-5 flex justify-center w-[60%]">
    <Editor
      apiKey={process.env.REACT_APP_API_URL} // Optional
      init={{
        height: 600,
        menubar: true,
        plugins: "image",
        toolbar: "undo redo | image | formatselect | bold italic underline strikethrough | forecolor backcolor | link image media | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | code preview fullscreen",
        images_file_types: 'jpg,svg,webp',
        images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('image', blobInfo.blob(), blobInfo.filename());
          console.log("formData -> ",formData);
          fetch(`${BASE_URL}/upload-image`, {
            method: 'POST',
            body: formData,
          })
          .then(response => response.json())
          .then(data => {
            if (data && data.data.imageUrl) {
              resolve(data.data.imageUrl);
            } else {
              reject(new Error('Invalid response from server.'));
            }
          })
          .catch(error => {
            reject(new Error('Upload failed: ' + error.message));
          });
        })
      }}
      onEditorChange={handleEditorChange}
    />
    </div>
  );
}
