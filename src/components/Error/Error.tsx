import Image from "next/image";

export const Error = () => {
  return (
    <div className="py-3">
      <Image
        width={500}
        height={500}
        src="/error.svg"
        alt="A person fixing a computer"
      />
      <p className="text-center text-leap-red-700">
        There was an error getting the posts, sorry! Please, try again soon.
      </p>
    </div>
  );
};
