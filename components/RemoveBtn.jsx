"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { BiRectangle } from "react-icons/bi";
export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };


  const taskDone = async() =>{
    const confirmed = window.confirm("Mark this task as done?");
 if(confirmed){
  const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
    method:"DELETE",
  });

  if(res.ok){
    router.refresh()
  }
 }
  }
  return (
    <>
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
      
    </button>
    <button onClick={taskDone} className="text-red-400">
      <BiRectangle size={24} />
    </button>
    </>
  );
}
