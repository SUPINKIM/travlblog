import Buttons from "@/components/home/buttons";

export default async function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-950">
      <div className="py-[10px] flex items-center justify-center">
        <Buttons />
      </div>
    </div>
  );
}
