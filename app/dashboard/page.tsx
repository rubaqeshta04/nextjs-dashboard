import TestButton from "../ui/test-button";
export default function Page() {
  const message = "Hello from the server!";
  console.log("Hello from Server");
  return <TestButton message={message} />;
}
