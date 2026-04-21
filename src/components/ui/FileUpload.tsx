import { useState, useRef, useCallback } from "react";

interface FileUploadProps {
  onChange?: (files: File[]) => void;
  uploadCount?: number;
}

const FileUpload = ({ onChange, uploadCount = 5 }: FileUploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<
    { file: File; preview: string; id: string }[]
  >([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isMultiple = uploadCount > 1;
  const isFull = uploadedFiles.length >= uploadCount;

  const processFiles = useCallback(
    (incoming: FileList | null) => {
      if (!incoming) return;

      const remaining = uploadCount - uploadedFiles.length;
      const selected = Array.from(incoming).slice(0, remaining);

      const newEntries = selected.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        id: `${file.name}-${Date.now()}-${Math.random()}`,
      }));

      const updated = [...uploadedFiles, ...newEntries];
      setUploadedFiles(updated);
      onChange?.(updated.map((e) => e.file));
    },
    [uploadedFiles, uploadCount, onChange]
  );

  const handleRemove = (id: string) => {
    const updated = uploadedFiles.filter((e) => e.id !== id);
    setUploadedFiles(updated);
    onChange?.(updated.map((e) => e.file));
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (!isFull) processFiles(e.dataTransfer.files);
  };

  return (
    <div className="upload-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        .upload-root * { box-sizing: border-box; margin: 0; padding: 0; }
        .upload-root {
          font-family: 'DM Sans', sans-serif;
          --clr-bg: #0f0f11;
          --clr-surface: #18181c;
          --clr-border: #2a2a30;
          --clr-border-active: #5b4eff;
          --clr-accent: #5b4eff;
          --clr-accent2: #ff4e9a;
          --clr-text: #f0f0f5;
          --clr-muted: #6b6b7a;
          --clr-danger: #ff4e4e;
          --radius: 16px;
          background: var(--clr-bg);
          padding: 32px;
          border-radius: 24px;
          max-width: 560px;
          width: 100%;
        }

        .upload-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--clr-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .upload-count-badge {
          background: linear-gradient(135deg, var(--clr-accent), var(--clr-accent2));
          color: #fff;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 999px;
          letter-spacing: 0.04em;
        }

        .dropzone {
          border: 1.5px dashed var(--clr-border);
          border-radius: var(--radius);
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--clr-surface);
          position: relative;
          overflow: hidden;
        }

        .dropzone::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(91,78,255,0.08) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .dropzone:hover::before,
        .dropzone.dragging::before { opacity: 1; }

        .dropzone:hover,
        .dropzone.dragging {
          border-color: var(--clr-border-active);
          background: #1c1c22;
        }

        .dropzone.disabled {
          opacity: 0.45;
          cursor: not-allowed;
          pointer-events: none;
        }

        .dropzone-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(91,78,255,0.15), rgba(255,78,154,0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(91,78,255,0.2);
        }

        .dropzone-icon svg {
          width: 22px;
          height: 22px;
          color: var(--clr-accent);
        }

        .dropzone-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--clr-text);
          text-align: center;
        }

        .dropzone-sub {
          font-size: 12px;
          color: var(--clr-muted);
          text-align: center;
          line-height: 1.5;
        }

        .dropzone-btn {
          margin-top: 4px;
          padding: 9px 22px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, var(--clr-accent), var(--clr-accent2));
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 20px rgba(91,78,255,0.3);
        }
        .dropzone-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(91,78,255,0.45);
        }
        .dropzone-btn:active { transform: translateY(0); }

        /* Preview Grid */
        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .preview-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1;
          background: var(--clr-surface);
          border: 1.5px solid var(--clr-border);
          transition: border-color 0.2s;
        }

        .preview-card:hover { border-color: var(--clr-accent); }

        .preview-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 14, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
          backdrop-filter: blur(2px);
        }

        .preview-card:hover .preview-overlay { opacity: 1; }

        .delete-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: var(--clr-danger);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 4px 16px rgba(255,78,78,0.4);
        }
        .delete-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(255,78,78,0.6);
        }
        .delete-btn svg { width: 16px; height: 16px; }

        .preview-name {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 6px 8px;
          font-size: 10px;
          font-family: 'DM Mono', monospace;
          color: #fff;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Progress bar */
        .progress-bar-wrap {
          margin-top: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .progress-bar-track {
          flex: 1;
          height: 4px;
          background: var(--clr-border);
          border-radius: 99px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, var(--clr-accent), var(--clr-accent2));
          transition: width 0.35s cubic-bezier(.4,0,.2,1);
        }
        .progress-text {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--clr-muted);
          white-space: nowrap;
        }
      `}</style>

      {/* Label */}
      <div className="upload-label">
        Upload Photos
        <span className="upload-count-badge">
          {uploadedFiles.length} / {uploadCount}
        </span>
      </div>

      {/* Drop Zone */}
      <div
        className={`dropzone${isDragging ? " dragging" : ""}${isFull ? " disabled" : ""}`}
        onClick={() => !isFull && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="dropzone-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="4"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>

        <div className="dropzone-title">
          {isFull
            ? "Maximum photos reached"
            : isDragging
            ? "Drop your photos here"
            : "Drag & drop photos here"}
        </div>

        {!isFull && (
          <div className="dropzone-sub">
            {isMultiple
              ? `Up to ${uploadCount} photos · PNG, JPG, WEBP`
              : "Single photo only · PNG, JPG, WEBP"}
          </div>
        )}

        {!isFull && (
          <button className="dropzone-btn" onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}>
            Browse Files
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple={isMultiple}
          style={{ display: "none" }}
          onChange={(e) => processFiles(e.target.files)}
        />
      </div>

      {/* Progress */}
      {uploadCount > 1 && (
        <div className="progress-bar-wrap">
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${(uploadedFiles.length / uploadCount) * 100}%` }}
            />
          </div>
          <span className="progress-text">{uploadedFiles.length}/{uploadCount} used</span>
        </div>
      )}

      {/* Preview Grid */}
      {uploadedFiles.length > 0 && (
        <div className="preview-grid">
          {uploadedFiles.map(({ id, preview, file }) => (
            <div key={id} className="preview-card">
              <img src={preview} alt={file.name} />
              <div className="preview-name">{file.name}</div>
              <div className="preview-overlay">
                <button
                  className="delete-btn"
                  onClick={() => handleRemove(id)}
                  title="Remove photo"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                    <path d="M10 11v6M14 11v6"/>
                    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;