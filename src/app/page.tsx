import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" flex justify-between items-center">
      <ThemeToggle />
      <UserButton />
      <Button>Home</Button>
    </div>
  );
}
