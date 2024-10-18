

function Banner() {
  return (
    <div className="grid grid-cols-2 p-3 items-center">
      <div className=" max-[640px]:col-span-2">
        <h1 className="text-5xl font-semibold mb-6 text-cyan-500">Task Management</h1>
        <p className="font-sans">
          Task management is the process of organizing, prioritizing, and
          tracking tasks to ensure efficient project completion. It involves
          creating tasks, assigning them to individuals, setting deadlines, and
          monitoring progress. Effective task management improves productivity,
          helps manage workloads, and ensures that goals are achieved on time.
        </p>
      </div>
      <div className="flex justify-center items-center max-[640px]:col-span-2">
        <img className="w-10/12" src="./public/Images/banner.png" alt="" />
      </div>
    </div>
  );
}

export default Banner