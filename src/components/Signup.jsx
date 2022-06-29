import { useFormik } from "formik";
import * as Yup from "yup";

export const Signup = ({ setHasSignedUp }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phonenumber: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    setHasSignedUp(true);
    localStorage.setItem("user", JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      phonenumber: "",
    },
    validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  console.log(formik.values);

  const formData = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your name",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "phonenumber",
      type: "tel",
      placeholder: "Enter your phone number",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "700px",
          paddingBlock: "30px",
          gap: "20px",
        }}
      >
        <h3 style={{ color: "#888" }}>Sign up</h3>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            width: "100%",
          }}
        >
          {formData.map((data) => (
            <>
              <input
                style={{
                  padding: "15px",
                  fontSize: "15px",
                  borderRadius: "40px",
                  textAlign: "center",
                  paddingBlock: "10px",
                  margin: "0",
                  border: "1px solid #999",
                  outline: "none",
                  width: "80%",
                }}
                key={data.name}
                name={data.name}
                type={data.type}
                value={formik.values[data.name]}
                onChange={formik.handleChange}
                placeholder={data.placeholder}
              />
              {formik.touched[data.name] && formik.errors[data.name] ? (
                <div style={{ fontSize: "15px", color: "red" }}>
                  {formik.errors[data.name]}
                </div>
              ) : null}
            </>
          ))}
          <button
            type="submit"
            style={{
              width: "80%",
              border: "none",
              outline: "none",
              borderRadius: "30px",
              background: "#485",
              padding: "10px",
              color: "#fff",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
