import { createContext } from "react";

export const context = createContext({
  email: "",
  phone: "",
  setPhone: () => {},
  setEmail: () => {},
  serialNumber: "",
  setSerialNumber: () => {},
  validator: null,
  handleLogin: () => {},
  handleRegister: () => {},
  handleUpdate: () => {},
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setSkillsList: () => {},
  skillsList: "",
  skill: "",
  setSkill: () => {},
  setSpecialties: () => {},
  handleLogin: () => {},
  handleRegister: () => {},
  handleUpdate: () => {},
  handleCheck: () => {},
  otp: "",
  setOtp: () => {},
  handleCode: () => {},
  handleChange: () => {},
  handleDelete: () => {},
});
