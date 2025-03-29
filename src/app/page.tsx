import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex justify-between items-center">
      <ThemeToggle />
      <Button>Home</Button>
    </div>
  );
}
