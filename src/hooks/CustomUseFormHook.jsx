import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";

const RegisterForm = () => {
  const [data, setData] = useState("");
  const mystyle = {
    color: "red",
  };


  const schema = yup.object().shape({
    name: yup.string().required("Your Name don't Match"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required("Age should be equla to & greater than 18 "),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null],"Password don't match").required(),
  });

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });


  const handleRegistration = (data) => {
    console.log("dtata", data);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)} style={{ margin: "30" }}>
      <div style={{ margin: 20 }}>
        <label>Name</label>
        <input type="text"  {...register("name")} />
        <p style={mystyle}>{errors.name?.message}</p>
      </div>
      <div style={{ margin: 20 }}>
        <label>Email</label>
        <input type="email"  {...register("email")} />
        <p style={mystyle}>{errors.email?.message}</p>

      </div>
      <div style={{ margin: 20 }}>
        <label>Age</label>
        <input type="number" {...register("age")} />
        <p style={mystyle}>{errors.age?.message}</p>

      </div>
      <div style={{ margin: 20 }}>
        <label>Password</label>
        <input type="password" {...register("password")} />
        <p style={mystyle}>{errors.password?.message}</p>

      </div>
      <div style={{ margin: 20 }}>
        <label>Password</label>
        <input
          type="password"
          {...register("confirmPassword")}

        />
        <p style={mystyle}>{errors.confirmPassword?.message}</p>

      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
