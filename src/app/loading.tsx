export default function Loading() {
  return (
    <div className="w-dvw min-h-[calc(100dvh-5rem)] h-[calc(100dvh-5rem)] flex flex-col items-center justify-center overflow-clip">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-dark" />
    </div>
  );
}
