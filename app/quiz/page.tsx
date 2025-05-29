import Navigation from "@/components/Navbar";
import Quiz from "./_components/Quiz";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="my-4 grid min-h-screen  place-items-center ">
        <Quiz />
      </main>
      <Footer />
    </>
  );
}
