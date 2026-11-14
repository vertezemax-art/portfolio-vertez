"use client";

export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden sm:block">
      <div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-[0.15] blur-3xl"
        style={{
          background: "radial-gradient(circle, #78A348 0%, transparent 70%)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7EC8C8 0%, transparent 70%)",
          animation: "float 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}
