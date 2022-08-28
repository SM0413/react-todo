import { useForm } from "react-hook-form";
export function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  // console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="FirstName"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="LastName"
        />
        <input
          {...register("userName", { required: true, minLength: 10 })}
          placeholder="UserName"
        />
        <input
          {...register("password", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is to short",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
