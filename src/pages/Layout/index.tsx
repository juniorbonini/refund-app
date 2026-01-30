import { Outlet } from "react-router";

import Header from "../../components/Header";
import { Icon } from "../../components/Icon";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "../../assets/icons/search.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowLeft from "../../assets/icons/caret-left.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowRight from "../../assets/icons/caret-right.svg?react";
import { Label } from "../../components/FormField/Label";
import { FormFieldControl } from "../../components/FormField/Control";
import { InputText } from "../../components/FormField/Input";
import { useForm } from "react-hook-form";
import { ErroFormField } from "../../components/FormField/Error";
import { Button } from "../../components/Button";

type FormData = {
  email: string;
  form: React.HTMLAttributes<HTMLFormControlsCollection>;
};

export function Layout() {
  const form = useForm<FormData>();
  return (
    <div className="mt-10 px-50 w-full">
      <Header />
      <div className="flex flex-col gap-3">
        <Icon svg={SearchIcon} className="fill-white" size="md" />
        <Icon svg={ArrowLeft} className="fill-white" size="md" />
        <Icon svg={ArrowRight} className="fill-white" size="md" />
      </div>
      <div>
        <form
          className="flex flex-col gap-5"
          onSubmit={form.handleSubmit(() => {})}
        >
          <Label tone={form.formState?.errors.email ? "error" : "default"}>
            E-mail
          </Label>
          <FormFieldControl
            state={form.formState?.errors.email ? "error" : "default"}
            className="w-full"
          >
            <InputText
              placeholder="Digite seu E-mail"
              {...form.register("email", {
                required: "O e-mail é obrigatório",
              })}
            />
          </FormFieldControl>
          <ErroFormField message={form.formState?.errors.email?.message} />
          <Button className="truncate" size="md" type="submit">
            Enviar pedido
          </Button>
        </form>
      </div>

      <div>
        <FormFieldControl size="sm">
          <InputText type="number" />
        </FormFieldControl>
      </div>
      <Outlet />
    </div>
  );
}
