import { Text } from "../Text";
import { Icon } from "../../components/Icon";
import { InputText } from "../FormField/Input";
import { FormFieldControl } from "../FormField/Control";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "../../assets/icons/search.svg?react";

export function ContentHeader() {
  return (
    <>
      <Text size="xl" as="div" color="title" weight="bold" className="mb-6">
        Solicitações
      </Text>
      <div className="flex w-full gap-3">
        <FormFieldControl>
          <InputText
            type="text"
            placeholder="Pesquisar por nome"
            className="flex-1"
          />
        </FormFieldControl>
        <Icon svg={SearchIcon} className="w-12 h-12 fill-white" />
      </div>
    </>
  );
}
