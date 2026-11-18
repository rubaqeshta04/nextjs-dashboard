"use client";

export default function testButton({ message }: { message: string }) {
  return (
    <button
      className="rounded bg-blue-600 p-3 text-white"
      onClick={() => alert(message)}
    >
      show message
    </button>
  );
}
