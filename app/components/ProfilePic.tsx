import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className=" h-[200px] border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/cool-duck.jpg"
        height={200}
        width={200}
        alt="Duck Coolglasses"
        priority={true}
      />
    </section>
  );
}
