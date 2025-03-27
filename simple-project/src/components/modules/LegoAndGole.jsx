import Button from "./Button"
import FirstComponent from "./FirstComponent";

export const Lego = () => {
  return (
    <>
      <Button></Button>
      <FirstComponent/>
    </>
  );
};

export const Gole = () => {
  return (
    <>
      <FirstComponent></FirstComponent>
      <Button></Button>
    </>
  );
};

