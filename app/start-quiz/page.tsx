import Navigation from "@/components/Navbar";
import StartQuiz from "./_components/StartQuiz";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navigation />
      <section className="min-h-[90dvh] grid place-items-center">
        <div className="flex flex-col-reverse gap-y-4">
          <div className="space-y-4 flex flex-col items-center">
            <StartQuiz />
          </div>
          <Image
            src={"/start-quiz.svg"}
            alt="start-quiz"
            width={400}
            height={400}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
