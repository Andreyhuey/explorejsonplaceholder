export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <div className="bg-slate-800 text-white">
        <div className="px-2 flex items-center justify-center h-screen w-full">
          <div>
            <h1 className="text-3xl text-center">
              <span> Hello World </span>
            </h1>
            <p className="text-5xl">Welcome to {title}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
