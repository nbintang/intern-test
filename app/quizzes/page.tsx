import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuizzesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <Button>
        <Link
          href="/quiz"
          className="flex items-center justify-center w-full h-full"
        >
          Start Quiz
        </Link>
      </Button>
    </div>
  );
}
