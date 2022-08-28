import { useForm } from "react-hook-form";
export function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="FirstName" />
        <input {...register("lastName")} placeholder="LastName" />
        <input {...register("userName")} placeholder="UserName" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}
