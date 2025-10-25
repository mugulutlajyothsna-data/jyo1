export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
      <div className="animate-pulse text-xl">Connecting to Firebase...</div>
    </div>
  );
}
