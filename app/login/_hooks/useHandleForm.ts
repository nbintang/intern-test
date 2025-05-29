import { useState } from "react";
import {
  ConditionsType,
  formDataSchema,
  FormDataType,
} from "../_schemas/formSchemas";
import { useRouter } from "next/navigation";

const useHandleForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
  });
  const [condition, setCondition] = useState<ConditionsType>({
    error: [""],
    loading: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = formDataSchema.safeParse(formData);
    setCondition((prev) => ({ ...prev, error: [""], loading: true }));
    if (isEmailValid.error) {
      const errFields = isEmailValid.error.errors.map((e) => e.message);
      setCondition((prev) => ({ ...prev, error: errFields, loading: false }));
      return;
    }
    localStorage.setItem("userData", JSON.stringify(formData));
    router.push("/start-quiz");
  };
  return { handleSubmit, conditions: condition, handleChange, formData };
};

export default useHandleForm;
