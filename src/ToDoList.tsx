import { useForm } from "react-hook-form";

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

export function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  // console.log(watch());
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com email allowed",
            },
          })}
          placeholder="Email"
        />
        <strong>
          <span>{errors?.email?.message}</span>
        </strong>
        <input
          {...register("firstName", { required: "Required Here" })}
          placeholder="FirstName"
        />
        <strong>
          <span>{errors?.firstName?.message}</span>
        </strong>
        <input
          {...register("lastName", { required: "Required Here" })}
          placeholder="LastName"
        />
        <strong>
          <span>{errors?.lastName?.message}</span>
        </strong>
        <input
          {...register("userName", {
            required: "Required Here",
            minLength: 10,
          })}
          placeholder="UserName"
        />
        <strong>
          <span>{errors?.userName?.message}</span>
        </strong>
        <input
          {...register("password", {
            required: "Required Here",
            minLength: {
              value: 5,
              message: "Your password is to short",
            },
          })}
          placeholder="Password"
        />
        <strong>
          <span>{errors?.password?.message}</span>
        </strong>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is to short",
            },
          })}
          placeholder="Password1"
        />
        <strong>
          <span>{errors?.password1?.message}</span>
        </strong>
        <button>Add</button>
      </form>
    </div>
  );
}
